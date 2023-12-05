import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

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

          <Tool title="MacBook Air M1">
            Powerful yet portable machine for development on the go. The M1 chip gives incredible performance.
          </Tool>

          <Tool title="Dell 4K Monitor">
            External display for more screen real estate when coding complex UIs.
          </Tool>

          <Tool title="Mechanical Keyboard">
            Satisfying to type on and durable for everyday use.
          </Tool>

          <Tool title="Logitech Mouse">
            Reliable mouse with smooth scrolling and extra buttons for shortcuts.
          </Tool>

        </ToolsSection>

        <ToolsSection title="Development Tools">

          <Tool title="Visual Studio Code">
            Excellent code editor with great extensions and customization.
          </Tool>

          <Tool title="Node & NPM">
            JavaScript runtime and package manager for building applications.
          </Tool>

          <Tool title="Git & GitHub">
            Version control and collaboration tools for managing code.
          </Tool>

          <Tool title="React Developer Tools">
            Helpful browser extension for inspecting React component hierarchies.
          </Tool>

        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
