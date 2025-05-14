import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, BookOpen, Target, BarChart, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex max-w-[64rem] mx-auto flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Safety Pilot System
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            An innovative AI-powered traffic education platform combining gamification and real-world simulations to
            enhance road safety in Uganda.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="/team">
              <Button size="lg" className="gap-2">
                Meet the Team
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                96.1% Support Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Overwhelming support from survey respondents for implementing the Safety Pilot system.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart className="h-5 w-5 text-primary" />
                30% Reduction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Projected reduction in road accidents within the first three years of implementation.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                75% Retention
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Improved knowledge retention rate compared to traditional learning methods.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Project Details */}
      <section className="container mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="technology">Technology</TabsTrigger>
            <TabsTrigger value="impact">Impact</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    The Safety Pilot project addresses Uganda's critical road safety challenges through an innovative,
                    AI-powered educational platform. By combining gamification with cutting-edge technology, we aim to
                    transform how traffic rules and safe driving practices are taught and learned.
                  </p>
                  <p>
                    Our research shows that traditional traffic education methods often fail to engage learners
                    effectively, leading to poor knowledge retention and increased accident risks. The Safety Pilot
                    system offers an interactive, accessible solution that adapts to individual learning needs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="features" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">AI-Powered Learning</h4>
                    <p className="text-muted-foreground">
                      Driving Ai and near real-time feedback using Gemini services, adapting to each user's
                      progress.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Interactive Simulations</h4>
                    <p className="text-muted-foreground">
                      Real-world traffic scenarios in Unreal Engine, allowing safe practice of driving skills.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Gamification Elements</h4>
                    <p className="text-muted-foreground">
                     Scores to maintain engagement.
                    </p>
                    <p className="text-muted-foreground">
                     Quizes to Test knowledge retention for road signs and rules.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Several Driving lessons</h4>
                    <p className="text-muted-foreground">
                     Basic controls.
                    </p>
                    <p className="text-muted-foreground">
                     Rainy weather.
                    </p>
                    <p className="text-muted-foreground">
                     Parking and reversing.
                    </p>
                    <p className="text-muted-foreground">
                     Round about and more...
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="technology" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Technology Stack</h3>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Unreal Engine</h4>
                    <p className="text-muted-foreground">
                      Advanced 3D simulation capabilities for realistic traffic scenarios.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Azure AI Services</h4>
                    <p className="text-muted-foreground">
                      Bot Services for conversational interactions and Speech Services for natural voice communication.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Machine Learning</h4>
                    <p className="text-muted-foreground">
                      Adaptive learning algorithms to personalize the educational experience.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="impact" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Expected Impact</h3>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Road Safety Enhancement</h4>
                    <p className="text-muted-foreground">
                      Projected 30% reduction in accidents through improved driver education and awareness.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Accessibility</h4>
                    <p className="text-muted-foreground">
                      Reaching underserved communities with cost-effective, mobile-friendly learning solutions.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Behavioral Change</h4>
                    <p className="text-muted-foreground">
                      Fostering a culture of responsible driving through engaging, interactive education.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Research Methodology */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Research Methodology</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Quantitative Analysis</h3>
                <p className="text-muted-foreground">
                  50 participants surveyed including drivers, students, and traffic officers
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Focus Groups</h3>
                <p className="text-muted-foreground">18 driving students participated in detailed discussions</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Data Analysis</h3>
                <p className="text-muted-foreground">Statistical analysis of survey responses and user feedback</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

