import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Code, Lightbulb, Target, Users, Zap } from "lucide-react"

export default function AboutSection() {
  const interests = [
    { icon: Code, title: "Programming", description: "Building software solutions" },
    { icon: Zap, title: "Robotics", description: "Automation and AI systems" },
    { icon: Lightbulb, title: "Innovation", description: "Creative problem solving" },
    { icon: Users, title: "Collaboration", description: "Team-based projects" },
    { icon: Target, title: "Goals", description: "Continuous learning" },
    { icon: BookOpen, title: "Research", description: "Exploring new technologies" },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            I'm a first-year Computer Engineering student at [University Name], passionate about leveraging technology
            to solve real-world problems. My journey in engineering has just begun, but I'm already excited about the
            possibilities ahead.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">My Journey</h3>
            <div className="space-y-4 text-slate-600">
              <p>
                Currently pursuing my Bachelor's degree in Computer Engineering, I'm building a strong foundation in
                mathematics, programming, and engineering principles.
              </p>
              <p>
                My interests span across software development, artificial intelligence, and robotics. I believe in the
                power of technology to create positive change and am committed to developing skills that will help me
                contribute meaningfully to the field.
              </p>
              <p>
                When I'm not coding or studying, you can find me exploring new technologies, participating in
                hackathons, or working on personal projects that challenge me to grow as an engineer.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {interests.map((interest, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-slate-200">
                <CardContent className="p-6 text-center">
                  <interest.icon className="mx-auto mb-3 text-blue-600" size={32} />
                  <h4 className="font-semibold text-slate-800 mb-2">{interest.title}</h4>
                  <p className="text-sm text-slate-600">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
