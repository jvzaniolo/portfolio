import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="14” MacBook Pro, M1 Pro, 16GB RAM (2021)">
            I was using an Intel-based 13” MacBook Pro prior to this and the
            difference is night and day. I’ve never heard the fans turn on a
            single time, even under the incredibly heavy loads I put it through
            with our various launch simulations.
          </Tool>
          <Tool title="NuPhy Halo65 Wireless Mechanical Keyboard">
            This is by far the best in-stock mechanical keyboard I’ve ever used.
            They recently released the Gem80 keyboard with 1000mhz polling rate
            which I’m eager to buy.
          </Tool>
          <Tool title="Logitech MX Master 3s Wireless Mouse">
            It’s very ergonomic and fits perfectly in my hands. Plus the
            horizontal scrolling wheel is very useful when reading code. But
            sometimes I use the MackBook trackpad for a smooth experience.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VS Code">
            I like to customize the file icons and themes every now and then,
            and VS Code is really good for me. But I’m keeping an eye on{' '}
            <Link
              href="https://codeedit.app/"
              target="_blank"
              rel="noreferrer"
              className="text-primary-500 dark:text-primary-400 hover:underline hover:underline-offset-2"
            >
              CodeEdit
            </Link>{' '}
            and{' '}
            <Link
              href="https://zed.dev/"
              target="_blank"
              rel="noreferrer"
              className="text-primary-500 dark:text-primary-400 hover:underline hover:underline-offset-2"
            >
              Zed
            </Link>{' '}
            too.
          </Tool>
          <Tool title="MacOS Terminal">
            I’ve used other terminals before but I always switch back to the
            native Terminal app. It’s fast and I don’t really need any extra
            features.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            Great experience, free and easy to share with others.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Spotlight">
            I’ve tried Alfred and Raycast, but Spotlight just looks better and
            has everything I need.
          </Tool>
          <Tool title="Rectangle">
            I come from Windows so having a window management tool is handy for
            me and this one is free and have great shortcuts.
          </Tool>
          <Tool title="Bartender">
            Great tool for hiding your unused apps in the menubar.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
