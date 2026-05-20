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
    { name: "MyScorecard", url: "https://myscorecard.com", description: "Golf handicap and stats tracking", logoUrl: "/myscorecard-logo.png" },
    { name: "Commandeer", url: "https://getcommandeer.com", description: "AWS Desktop Management Console", logoUrl: "/commandeer-logo.png" },
    { name: "Fresh Catch", url: "https://freshcatchapp.com", description: "Seafood & local catch marketplace", logoUrl: "/fresh-catch-logo.png" },
    { name: "My Stats Diary", url: "https://mystatsdiary.com", description: "Soccer, Baseball, Basketball and more stats & tracking", logoUrl: "https://www.mystatsdiary.com/logo.png" },
  ]

  const specialties = [
    "Full-stack web development",
    "iOS and Android native and web-wrapped experiences",
    "Database design",
    "AI integrations",
    "Complex business processes",
    "SaaS",
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
            <img src="/wms-logo.png" alt="WMS" className="h-9 w-auto" />
            <span className="text-lg font-semibold text-primary tracking-wide sm:tracking-normal"> Wall Mobile Solutions</span>
          </a>
          <nav className="hidden gap-6 text-sm text-muted-foreground sm:flex">
            <a href="#work" className="transition hover:text-foreground">Work</a>
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
              Silicon Valley CTO
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Mobile, web & AI workflows—
              <br />
              <span className="text-primary">without the big-firm price tag</span>
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              I design and build your product myself. No layers of account managers or offshore teams—just one experienced technical founder focused on your outcome.
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
              One person. Three roles.
            </h2>
            <p className="mb-8 text-muted-foreground">
              I’m <strong className="text-foreground">Bob Wall</strong>: your CTO-level strategist, product manager, and developer in a single engagement. You get clarity, speed, and lower cost—no handoffs, no miscommunication.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["CTO", "Product Manager", "Developer"].map((role) => (
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
            <h2 className="mb-10 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Specialties
            </h2>
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

        {/* Past projects */}
        <section id="work" className="border-b border-border/50 px-4 py-16 sm:py-20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="mb-10 text-center text-2xl font-semibold sm:text-3xl">
              Past projects
            </h2>
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
              Get in touch
            </h2>
            <p className="mb-8 text-center text-muted-foreground">
              Tell me about your product or workflow idea. I’ll respond personally.
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
                        placeholder="What are you looking to build?"
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
                      * Resume and references available upon request.
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
          <p>© {new Date().getFullYear()} Wall Mobile Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
