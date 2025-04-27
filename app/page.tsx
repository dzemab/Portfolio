"use client"

import Link from "next/link"
import { ArrowRight, Bot, Code, MessageSquare, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { ProjectCard } from "@/components/project-card"
import { ServiceCard } from "@/components/service-card"
import { SkillBadge } from "@/components/skill-badge"
import { ContactForm } from "@/components/contact-form"
import { SocialIcons } from "@/components/social-icons"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />

      {/* About Section */}
      <section id="about" className="container py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              About Me
            </h2>
            <p className="text-gray-300 mb-4">
              Hi there! I'm a 20-year-old IT Programming student currently in my 3rd year of studies at the Technical
              University of Munich. I specialize in web development and bot creation for any platform.
            </p>
            <p className="text-gray-300 mb-4">
              I'm passionate about coding and love turning ideas into functional, efficient solutions. Whether you need
              a personal portfolio, business website, or an automated bot, I'm here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-75"></div>
            <div className="relative bg-black p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Education</h3>
              <div className="mb-4">
                <p className="text-white font-medium">Technical University of Munich</p>
                <p className="text-gray-400">IT Engineering</p>
                <p className="text-gray-400">Expected Graduation: 2025</p>
              </div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Location</h3>
              <p className="text-gray-400">Germany</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gray-950">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
            My Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SkillBadge name="Frontend Development" icon={<Code />} />
            <SkillBadge name="Backend Development" icon={<Zap />} />
            <SkillBadge name="Bot Development" icon={<Bot />} />
            <SkillBadge name="Automation" icon={<MessageSquare />} />
          </div>
          <div className="mt-12 flex flex-wrap gap-3 justify-center">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "Discord.js",
              "Telegram API",
              "MongoDB",
              "SQL",
              "Git",
              "Docker",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-900 text-cyan-400 rounded-full text-sm border border-cyan-900"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container py-24 md:py-32">
        <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
          What I Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            title="Website Development"
            description="Custom frontend & backend solutions with responsive designs"
            icon={<Code className="h-10 w-10 text-cyan-400" />}
          />
          <ServiceCard
            title="Discord Bots"
            description="Custom bots with moderation, music, and utility features"
            icon={<Bot className="h-10 w-10 text-purple-500" />}
          />
          <ServiceCard
            title="Telegram Bots"
            description="Automated solutions for messaging and community management"
            icon={<MessageSquare className="h-10 w-10 text-blue-500" />}
          />
          <ServiceCard
            title="Automation Scripts"
            description="Custom scripts to automate repetitive tasks and workflows"
            icon={<Zap className="h-10 w-10 text-yellow-500" />}
          />
        </div>
      </section>

      {/* Projects Section - Limited to 3 projects */}
      <section id="projects" className="py-24 bg-gray-950">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard
              title="E-Commerce Platform"
              description="A full-stack e-commerce solution with payment integration and admin dashboard"
              tags={["Next.js", "MongoDB", "Stripe"]}
              image="https://placehold.co/800x600/2563eb/1a1a1a?text=E-Commerce"
              link="/projects/ecommerce"
            />
            <ProjectCard
              title="Discord Community Bot"
              description="A feature-rich bot for server management, moderation, and entertainment"
              tags={["Discord.js", "Node.js", "MongoDB"]}
              image="https://placehold.co/800x600/7e22ce/1a1a1a?text=Discord+Bot"
              link="/projects/discord-bot"
            />
            <ProjectCard
              title="Task Management App"
              description="A responsive web app for organizing tasks with team collaboration features"
              tags={["React", "Firebase", "Tailwind CSS"]}
              image="https://placehold.co/800x600/0ea5e9/1a1a1a?text=Task+App"
              link="/projects/task-app"
            />
          </div>
          <div className="mt-12 text-center">
            <Link href="/projects">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
            Let's Work Together
          </h2>
          <ContactForm />
          <SocialIcons />
        </div>
      </section>

      {/* Footer with Icons instead of text */}
      <footer className="bg-gray-950 py-8 border-t border-gray-800">
        <div className="container text-center text-gray-400">
          <p>© {new Date().getFullYear()} | IT Programming Student | Made with Next.js</p>
        </div>
      </footer>
    </div>
  )
}
