export type Article = {
  id: string
  title: string
  description: string
  canonical_url: string
  tag_list: string[]
  reading_time_minutes: number
  published_at: string
  positive_reactions_count: number
  user: {
    name: string
    profile_image: string
  }
}

export async function getArticles() {
  let res = await fetch('https://dev.to/api/articles/me', {
    headers: {
      accept: 'application/vnd.forem.api-v1+json',
      'api-key': process.env.API_KEY as string,
    },
  })

  if (!res.ok) {
    throw new Error('Error to fetch posts')
  }

  return res.json() as Promise<Article[]>
}
