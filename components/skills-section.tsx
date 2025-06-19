import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "C++", level: 70 },
        { name: "HTML/CSS", level: 80 },
        { name: "Java", level: 60 },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 80 },
        { name: "React", level: 70 },
        { name: "Node.js", level: 65 },
        { name: "VS Code", level: 90 },
        { name: "Linux", level: 60 },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 85 },
        { name: "Team Collaboration", level: 80 },
        { name: "Communication", level: 75 },
        { name: "Time Management", level: 70 },
        { name: "Adaptability", level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Here are the technical and soft skills I've developed through coursework, personal projects, and hands-on
            experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800 text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
