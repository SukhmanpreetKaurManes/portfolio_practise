"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">Alex Johnson</h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-6">
            Aspiring Engineer | Passionate about Technology & Innovation
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">
            First-year Computer Engineering student with a drive to create innovative solutions and make a positive
            impact through technology.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button onClick={scrollToProjects} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
            View My Work
          </Button>
          <Button
            onClick={scrollToContact}
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
          >
            Contact Me
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-blue-600 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-blue-600 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:alex@example.com"
            className="text-slate-600 hover:text-blue-600 transition-colors"
            aria-label="Email Contact"
          >
            <Mail size={28} />
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-slate-400" size={32} />
        </div>
      </div>
    </section>
  )
}
