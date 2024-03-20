import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type Article, getArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function Article({ article }: { article: Article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.canonical_url}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.published_at}
          className="md:hidden"
          decorate
        >
          {formatDate(article.published_at)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.published_at}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.published_at)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on software development, collected in chronological order.',
}

export default async function ArticlesIndex() {
  let articles = await getArticles()

  return (
    <SimpleLayout
      title="Writing on software development."
      intro="All of my long-form thoughts on software development, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article key={article.canonical_url} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
