import { useState } from "react"
import { Forminit } from "forminit"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, MailWarning, ScanSearch, type LucideIcon } from "lucide-react"

type WorkItem = {
  name: string
  description: string
  url?: string
  logoUrl?: string
  Icon?: LucideIcon
  footnote?: string
}

function faviconUrl(url: string) {
  try {
    const domain = new URL(url).hostname.replace(/^www\./, "")
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
  } catch {
    return ""
  }
}

function linkLabel(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "")
}

function WorkCard({ item }: { item: WorkItem }) {
  return (
    <Card className="flex h-full flex-col transition hover:border-primary/40 hover:shadow-md">
      <CardHeader className="flex flex-col items-center text-center">
        <CardTitle className="text-lg">{item.name}</CardTitle>
        <span className="my-3 flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-lg">
          {item.Icon ? (
            <span className="flex size-14 items-center justify-center rounded-lg bg-primary/10">
              <item.Icon className="size-7 text-primary" aria-hidden />
            </span>
          ) : (
            <span className="flex size-14 items-center justify-center overflow-hidden rounded-lg bg-muted/40 p-2">
              <img
                src={item.logoUrl ?? (item.url ? faviconUrl(item.url) : "")}
                alt=""
                className="max-h-full max-w-full object-contain"
              />
            </span>
          )}
        </span>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto flex justify-center pt-0">
        {item.url ? (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary transition hover:border-primary/50 hover:bg-primary/10"
          >
            {linkLabel(item.url)} →
          </a>
        ) : (
          <span className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
            {item.footnote ?? "Private deployment"}
          </span>
        )}
      </CardContent>
    </Card>
  )
}

function sortSystemsBuilt(items: WorkItem[]) {
  const named = items.filter((item) => item.url).sort((a, b) => a.name.localeCompare(b.name))
  const other = items.filter((item) => !item.url).sort((a, b) => a.name.localeCompare(b.name))
  return [...named, ...other]
}

function sortAlphabetically(items: WorkItem[]) {
  return [...items].sort((a, b) => a.name.localeCompare(b.name))
}

const forminit = new Forminit()

function App() {
  const formId = import.meta.env.VITE_FORMINIT_FORM_ID

  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formId) {
      setSubmitError("Contact form is not configured. Add VITE_FORMINIT_FORM_ID to your environment.")
      return
    }

    setSubmitting(true)
    setSubmitError(null)

    const payload = new FormData()
    payload.append("fi-sender-fullName", formData.name)
    payload.append("fi-sender-email", formData.email)
    payload.append("fi-text-message", formData.message)

    const { error } = await forminit.submit(formId, payload)

    setSubmitting(false)

    if (error) {
      setSubmitError(error.message)
      return
    }

    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
  }

  const systemsBuilt: WorkItem[] = [
    {
      name: "Fearless Naturals",
      url: "https://app.fearlessnaturals.us",
      logoUrl: "/fearless-naturals-logo.gif",
      description: "Product document intelligence — upload product specs and AI extracts structured summaries, attributes, and catalog-ready data.",
    },
    {
      name: "Email Intelligence Platform",
      Icon: MailWarning,
      footnote: "Enterprise deployment",
      description: "Inbound email analysis — sentiment scoring, escalation alerts when issues need attention, and performance ratings across vendor relationships.",
    },
    {
      name: "Marketing Asset QC",
      Icon: ScanSearch,
      footnote: "Enterprise deployment",
      description: "Multimodal QC pipeline — images and video validated for format, dimensions, and compliance before human review, with AI summaries for downstream QC.",
    },
    {
      name: "MyScorecard",
      url: "https://myscorecard.com",
      logoUrl: "/myscorecard-logo.png",
      description: "Real-time golf analytics platform — handicap computation, stats tracking, and performance data at scale.",
    },
    {
      name: "Commandeer",
      url: "https://getcommandeer.com",
      description: "AWS infrastructure console — distributed cloud operations at desktop scale",
      logoUrl: "/commandeer-logo.png",
    },
  ]

  const techLeadership: WorkItem[] = [
    {
      name: "Tumble",
      url: "https://www.tumble.to/",
      logoUrl: "/tumble-logo.png",
      footnote: "Tech leadership",
      description: "Smart laundry platform — IoT-connected shared laundry for multifamily properties and on-demand wash-and-fold pickup and delivery.",
    },
    {
      name: "Speed Queen",
      url: "https://speedqueen.com/",
      logoUrl: "/speed-queen-logo.png",
      footnote: "Tech leadership",
      description: "Digital platform and customer-facing systems for a major consumer and commercial laundry brand under Alliance Laundry Systems.",
    },
    {
      name: "Tuition.io",
      url: "https://tuition.io/",
      footnote: "Tech leadership",
      description: "Enterprise education benefits platform — tuition assistance, student loan programs, and financial wellness for hundreds of employers.",
    },
    {
      name: "FreshX",
      url: "https://getfreshx.com/",
      footnote: "Tech leadership",
      description: "Refrigerated LTL logistics platform — rate search, load booking, and carrier integrations for cold-chain freight.",
    },
    {
      name: "Washio",
      logoUrl: "/washio-logo.png",
      footnote: "Co-founder · Acquired 2016",
      description: "On-demand laundry and dry cleaning — pioneered mobile pickup and delivery; raised $17M+ before assets were acquired by Rinse.",
    },
  ]

  const technicalDomains = [
    "AI infrastructure",
    "Distributed systems",
    "Low-latency architectures",
    "Autonomous workflows",
    "Multimodal systems",
    "Platform engineering",
    "Inference pipelines",
    "Real-time systems",
    "Scalable architecture",
  ]

  const services = [
    "AI Systems Architecture",
    "Autonomous Workflow Development",
    "Platform Infrastructure",
    "Prototype Acceleration",
    "AI Integration & Deployment",
    "Distributed Systems Engineering",
    "Fractional CTO Engagements",
  ]

  const notes = [
    {
      title: "Production agent orchestration",
      description: "When to chain models, when to parallelize, and how to keep latency bounded under load.",
    },
    {
      title: "Inference pipeline design",
      description: "Edge vs. cloud tradeoffs for real-time AI workloads—and where most teams get it wrong.",
    },
    {
      title: "Scalable architecture under constraint",
      description: "Building platform foundations when the product timeline is 90 days, not 9 months.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="#" className="flex items-center flex-1 sm:flex-none">
            <span className="text-xl font-semibold tracking-tight">
              Wall <span className="text-primary">AI</span>
            </span>
          </a>
          <nav className="hidden gap-6 text-sm text-muted-foreground sm:flex">
            <a href="#work" className="transition hover:text-foreground">Work</a>
            <a href="#engagements" className="transition hover:text-foreground">Engagements</a>
            <a href="#notes" className="transition hover:text-foreground">Notes</a>
            <a href="#contact" className="transition hover:text-foreground">Contact</a>
            <a href="https://www.linkedin.com/in/bobbywall/" target="_blank" rel="noopener noreferrer" className="transition hover:text-foreground">LinkedIn</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="border-b border-border/50 px-4 py-20 sm:py-28 md:py-36">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
              Built by an Ex–Silicon Valley CTO
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Advanced AI Systems
              <br />
              <span className="text-primary">& Infrastructure</span>
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              AI architecture, autonomous systems, and high-performance platform engineering—for founders and CTOs who need someone who handles hard systems.
            </p>
            <p className="mt-6 text-sm text-muted-foreground/80">
              Limited availability · Remote · 3–12 month engagements
            </p>
          </div>
        </section>

        {/* Who this is for */}
        <section className="border-b border-border/50 bg-muted/30 px-4 py-12 sm:py-14">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Who this is for
            </h2>
            <p className="text-base text-foreground sm:text-lg">
              I partner with startups, technical founders, and organizations building ambitious AI-driven products.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              I take on a limited number of high-impact engineering engagements each year.
            </p>
          </div>
        </section>

        {/* One person = CEO, PM, dev */}
        <section className="border-b border-border/50 px-4 pt-16 pb-12 sm:pt-20 sm:pb-14">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <img
                src="/bob.png"
                alt="Bob Wall"
                className="h-40 w-40 rounded-full object-cover ring-2 ring-primary/20 shadow-lg transition hover:ring-primary/40 hover:shadow-xl sm:h-52 sm:w-52"
              />
            </div>
            <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
              You hire the operator, not an agency.
            </h2>
            <p className="mb-8 text-muted-foreground">
              I’m <strong className="text-foreground">Bob Wall</strong>—distributed systems, AI infrastructure, agent architectures, and platform engineering in a single operator. Founders and CTOs bring me in when scalability, architecture depth, and execution speed all have to land at once.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Systems Architect", "Fractional CTO", "AI Infrastructure"].map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Specialties */}
        <section className="border-b border-border/50 bg-gradient-to-b from-primary/5 to-transparent px-4 py-16 sm:py-20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-3 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Technical domains
            </h2>
            <p className="mb-10 text-center text-muted-foreground">
              The problems where architecture depth matters—not CRUD and brochureware.
            </p>
            <ul className="grid gap-3 sm:grid-cols-3">
              {technicalDomains.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 rounded-lg border border-primary/20 bg-card px-4 py-3 text-sm font-medium text-foreground"
                >
                  <span className="size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Engagements / services */}
        <section id="engagements" className="border-b border-border/50 px-4 py-16 sm:py-20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-3 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Engagements
            </h2>
            <p className="mb-10 text-center text-muted-foreground">
              Specialized work—not generic app development.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2">
              {services.map((e) => (
                <li
                  key={e}
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/50 px-5 py-4 text-sm font-medium text-foreground"
                >
                  <span className="size-2 shrink-0 rounded-full bg-primary/60" aria-hidden />
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Architecture notes */}
        <section id="notes" className="border-b border-border/50 bg-gradient-to-b from-primary/5 to-transparent px-4 py-16 sm:py-20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-3 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Architecture notes
            </h2>
            <p className="mb-10 text-center text-muted-foreground">
              Systems thinking on AI infrastructure, agents, and platform design.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {notes.map((note) => (
                <Card key={note.title} className="border-primary/15">
                  <CardHeader>
                    <CardTitle className="text-base leading-snug">{note.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{note.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="border-b border-border/50 px-4 py-16 sm:py-20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="mb-3 text-center text-2xl font-semibold sm:text-3xl">
              Selected work
            </h2>
            <p className="mb-12 text-center text-muted-foreground">
              Systems I’ve built and teams I’ve led.
            </p>

            <div className="mb-14">
              <h3 className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Systems built
              </h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {sortSystemsBuilt(systemsBuilt).map((item) => (
                  <WorkCard key={item.name} item={item} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Tech leadership
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {sortAlphabetically(techLeadership).map((item) => (
                  <WorkCard key={item.name} item={item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-4 py-16 sm:py-20">
          <div className="container mx-auto max-w-xl">
            <h2 className="mb-2 text-center text-2xl font-semibold sm:text-3xl">
              Start a conversation
            </h2>
            <p className="mb-8 text-center text-muted-foreground">
              Describe the system, the deadline, and what’s at stake. I respond personally to engagements that fit.
            </p>
            {submitted ? (
              <Card className="text-center">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">
                    Thanks! I’ll get back to you soon.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      setSubmitted(false)
                      setSubmitError(null)
                    }}
                  >
                    Send another message
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((d) => ({ ...d, name: e.target.value }))
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((d) => ({ ...d, email: e.target.value }))
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="What system do you need built, and by when?"
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((d) => ({ ...d, message: e.target.value }))
                        }
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="mt-2" disabled={submitting}>
                      {submitting ? "Sending…" : "Send message"}
                    </Button>
                    {submitError ? (
                      <p className="text-sm text-destructive" role="alert">
                        {submitError}
                      </p>
                    ) : null}
                    <p className="mt-2 text-xs text-muted-foreground">
                      References and architecture background available on request.
                    </p>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 px-4 py-8">
        <div className="container mx-auto max-w-5xl flex flex-col items-center gap-3 text-center text-sm text-muted-foreground">
          <a
            href="https://www.linkedin.com/in/bobbywall/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <p>© {new Date().getFullYear()} Wall AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
