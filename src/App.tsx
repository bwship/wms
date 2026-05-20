import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin } from "lucide-react"

function App() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
  }

  const projects = [
    { name: "Commandeer", url: "https://getcommandeer.com", description: "AWS infrastructure console — distributed cloud operations at desktop scale", logoUrl: "/commandeer-logo.png" },
    { name: "MyScorecard", url: "https://myscorecard.com", description: "Real-time analytics platform — handicap computation & performance data at scale", logoUrl: "/myscorecard-logo.png" },
    { name: "Fresh Catch", url: "https://freshcatchapp.com", description: "Two-sided marketplace — inventory, location, and fulfillment integrations", logoUrl: "/fresh-catch-logo.png" },
    { name: "My Stats Diary", url: "https://mystatsdiary.com", description: "Multi-sport performance data platform — stats pipelines across disciplines", logoUrl: "https://www.mystatsdiary.com/logo.png" },
  ]

  const specialties = [
    "AI systems & agent workflows",
    "Autonomous & multimodal pipelines",
    "Distributed systems & infrastructure",
    "Real-time & low-latency platforms",
    "Complex integrations & data architecture",
    "High-leverage product engineering",
  ]

  const engagements = [
    "Fractional CTO",
    "AI architecture & agent systems",
    "Prototype acceleration for funded startups",
    "Advanced platform engineering",
    "3–12 month contract engagements",
    "Remote, high-trust operator model",
  ]

  const faviconUrl = (url: string) => {
    try {
      const domain = new URL(url).hostname.replace(/^www\./, "")
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
    } catch {
      return ""
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="#" className="flex items-center gap-2 flex-1 sm:flex-none">
            <img src="/wms-logo.png" alt="Wall Systems" className="h-9 w-auto" />
            <span className="text-lg font-semibold text-primary tracking-wide sm:tracking-normal"> Wall Systems</span>
          </a>
          <nav className="hidden gap-6 text-sm text-muted-foreground sm:flex">
            <a href="#work" className="transition hover:text-foreground">Systems</a>
            <a href="#engagements" className="transition hover:text-foreground">Engagements</a>
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
              Ex–Silicon Valley CTO
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              AI infrastructure, autonomous systems,
              <br />
              <span className="text-primary">and high-leverage product engineering</span>
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              I architect and build advanced software systems directly—no agency layers, no handoffs. One senior operator for problems that need judgment, speed, and depth.
            </p>
            <p className="mt-6 text-sm text-muted-foreground/80">
              Limited availability · Remote engagements
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
              I’m <strong className="text-foreground">Bob Wall</strong>—the technical judgment, architecture, and execution in a single engagement. Founders and CTOs bring me in when the problem is hard, the timeline is tight, and they need one person who can own the system end to end.
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
              Difficult systems—not generic app work.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2">
              {specialties.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 rounded-xl border-2 border-primary/20 bg-card px-5 py-4 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/40 hover:bg-primary/10 hover:shadow-md"
                >
                  <span className="size-2 shrink-0 rounded-full bg-primary ring-2 ring-primary/30" aria-hidden />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contract engagements */}
        <section id="engagements" className="border-b border-border/50 px-4 py-16 sm:py-20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-3 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Contract engagements
            </h2>
            <p className="mb-10 text-center text-muted-foreground">
              I take on a limited number of high-impact engagements each year.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2">
              {engagements.map((e) => (
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

        {/* Past systems */}
        <section id="work" className="border-b border-border/50 px-4 py-16 sm:py-20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="mb-3 text-center text-2xl font-semibold sm:text-3xl">
              Systems built
            </h2>
            <p className="mb-10 text-center text-muted-foreground">
              Platforms and infrastructure—not brochure sites.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {projects.map((p) => (
                <a
                  key={p.url}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer"
                >
                  <Card className="flex h-full flex-col transition hover:border-primary/40 hover:shadow-md cursor-pointer">
                    <CardHeader className="flex flex-col items-center text-center">
                      <CardTitle className="text-lg">{p.name}</CardTitle>
                      <span className="my-3 flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-lg">
                        <img
                          src={p.logoUrl ?? faviconUrl(p.url)}
                          alt=""
                          className="h-14 w-14 object-cover filter-[contrast(1.15)_saturate(1.25)]"
                        />
                      </span>
                      <CardDescription>{p.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto pt-0 text-center">
                      <span className="text-sm text-primary">
                        {p.url.replace("https://", "")} →
                      </span>
                    </CardContent>
                  </Card>
                </a>
              ))}
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
                    onClick={() => setSubmitted(false)}
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
                    <Button type="submit" size="lg" className="mt-2">
                      Send message
                    </Button>
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
          <p>© {new Date().getFullYear()} Wall Systems. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
