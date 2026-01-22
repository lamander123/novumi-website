import { PageLayout } from '@/components/layout'
import { Container, Button, Card } from '@/components/ui'
import { SEO } from '@/components/SEO'
import { useI18n } from '@/lib/i18n'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export function BlogPage() {
  const { language } = useI18n()
  const isNL = language === 'nl'

  const posts = [
    {
      slug: 'vog-vs-background-check',
      title: isNL ? 'VOG vs. Achtergrondonderzoek: Wat is het Verschil?' : 'Criminal Record vs. Background Check: What\'s the Difference?',
      excerpt: isNL
        ? 'Een VOG vertelt je alleen of iemand veroordeeld is. Een achtergrondonderzoek gaat veel verder. Ontdek de verschillen en wanneer je welke optie kiest.'
        : 'A criminal record check only tells you if someone was convicted. A background check goes much further. Discover the differences and when to choose which option.',
      date: '2025-01-15',
      readTime: isNL ? '5 min lezen' : '5 min read',
      category: isNL ? 'Gidsen' : 'Guides',
    },
    {
      slug: 'gdpr-compliant-screening',
      title: isNL ? 'AVG-Compliant Screenen: Complete Gids voor Werkgevers' : 'GDPR-Compliant Screening: Complete Guide for Employers',
      excerpt: isNL
        ? 'Hoe voer je een screening uit die voldoet aan de AVG? Van toestemming tot dataverwerking—alles wat je moet weten.'
        : 'How do you conduct screening that complies with GDPR? From consent to data processing—everything you need to know.',
      date: '2025-01-10',
      readTime: isNL ? '8 min lezen' : '8 min read',
      category: isNL ? 'Compliance' : 'Compliance',
    },
    {
      slug: 'digital-red-flags',
      title: isNL ? 'Digitale Red Flags bij Sollicitanten: Waar Let Je Op?' : 'Digital Red Flags in Candidates: What to Look For?',
      excerpt: isNL
        ? 'Social media en online aanwezigheid kunnen veel onthullen. Leer welke digitale signalen aandacht verdienen bij het aannemen van personeel.'
        : 'Social media and online presence can reveal a lot. Learn which digital signals deserve attention when hiring personnel.',
      date: '2025-01-05',
      readTime: isNL ? '6 min lezen' : '6 min read',
      category: 'OSINT',
    },
  ]

  return (
    <PageLayout>
      <SEO
        title={isNL ? 'Blog | Insights over Pre-employment Screening' : 'Blog | Pre-employment Screening Insights'}
        description={isNL
          ? 'Artikelen en gidsen over pre-employment screening, achtergrondonderzoek, AVG-compliance en OSINT. Voor HR-professionals en werkgevers.'
          : 'Articles and guides on pre-employment screening, background checks, GDPR compliance, and OSINT. For HR professionals and employers.'}
        canonical="/blog"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <Container size="md">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
              {isNL ? 'Blog & Insights' : 'Blog & Insights'}
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {isNL
                ? 'Artikelen, gidsen en best practices over pre-employment screening, compliance en achtergrondonderzoek.'
                : 'Articles, guides, and best practices on pre-employment screening, compliance, and background investigation.'}
            </p>
          </div>
        </Container>
      </section>

      {/* Posts */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <Card key={i} padding="none" hoverable>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.date).toLocaleDateString(isNL ? 'nl-NL' : 'en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <button className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-accent-600 transition-colors">
                    {isNL ? 'Lees artikel' : 'Read article'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24">
        <Container size="sm">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {isNL ? 'Blijf op de hoogte' : 'Stay informed'}
            </h2>
            <p className="mt-4 text-gray-600 max-w-md mx-auto">
              {isNL
                ? 'Ontvang nieuwe artikelen en updates over screening en compliance in uw inbox.'
                : 'Receive new articles and updates on screening and compliance in your inbox.'}
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg" href="/contact">
                {isNL ? 'Neem contact op' : 'Get in touch'}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  )
}
