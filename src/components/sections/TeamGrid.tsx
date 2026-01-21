import { Linkedin } from 'lucide-react'
import { Container, Card } from '@/components/ui'

interface TeamMember {
  name: string
  role: string
  bio: string
  image?: string
  linkedin?: string
}

interface TeamGridProps {
  title?: string
  subtitle?: string
  members: TeamMember[]
}

export function TeamGrid({ title, subtitle, members }: TeamGridProps) {
  return (
    <section className="section">
      <Container>
        {(title || subtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-neutral-600">{subtitle}</p>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <Card key={index} padding="lg" className="text-center">
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span className="text-3xl font-heading font-bold text-white">
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                )}
              </div>

              <h3 className="font-heading font-semibold text-lg text-primary-900">
                {member.name}
              </h3>
              <p className="text-accent-600 font-medium text-sm">{member.role}</p>
              <p className="mt-3 text-neutral-600 text-sm">{member.bio}</p>

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm text-neutral-500 hover:text-accent-600 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
