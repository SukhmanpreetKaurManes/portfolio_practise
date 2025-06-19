"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All")

  const projects = [
    {
      title: "Personal Finance Tracker",
      description:
        "A web application to track expenses and manage personal budgets with interactive charts and analytics.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Python", "Flask", "JavaScript", "Chart.js"],
      category: "Web Dev",
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Arduino Weather Station",
      description:
        "IoT project that collects weather data using sensors and displays real-time information on a web dashboard.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Arduino", "C++", "IoT", "Sensors"],
      category: "Hardware",
      github: "https://github.com",
      demo: null,
    },
    {
      title: "Student Grade Calculator",
      description: "Desktop application for calculating GPA and tracking academic progress with data visualization.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Python", "Tkinter", "SQLite"],
      category: "Desktop App",
      github: "https://github.com",
      demo: null,
    },
    {
      title: "Task Management Bot",
      description: "Discord bot that helps teams manage tasks, set reminders, and track project progress.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Python", "Discord.py", "APIs"],
      category: "Bot",
      github: "https://github.com",
      demo: null,
    },
    {
      title: "Recipe Finder App",
      description:
        "Mobile-responsive web app that suggests recipes based on available ingredients using external APIs.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React", "JavaScript", "API Integration"],
      category: "Web Dev",
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Binary Search Visualizer",
      description:
        "Interactive tool to visualize binary search algorithm with step-by-step execution and explanations.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["JavaScript", "HTML/CSS", "Algorithms"],
      category: "Educational",
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ]

  const categories = ["All", "Web Dev", "Hardware", "Desktop App", "Bot", "Educational"]

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">My Projects</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            Here's a collection of projects I've worked on, showcasing my skills in various technologies and
            problem-solving approaches.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={
                  filter === category
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "border-blue-600 text-blue-600 hover:bg-blue-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="border-slate-200 hover:shadow-lg transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-slate-800">{project.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-slate-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-blue-100 text-blue-800">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex items-center gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>

                  {project.demo && (
                    <Button size="sm" className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
