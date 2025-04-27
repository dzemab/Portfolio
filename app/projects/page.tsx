"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { Navbar } from "@/components/navbar"

export default function ProjectsPage() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="container pt-32 pb-16">
        <div className="mb-10 flex items-center">
          <Link href="/">
            <Button variant="ghost" className="text-cyan-400">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
          All Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <ProjectCard
            title="Personal Finance Dashboard"
            description="Interactive dashboard for expense tracking and financial planning"
            tags={["Vue.js", "Chart.js", "Express"]}
            image="https://placehold.co/800x600/10b981/1a1a1a?text=Finance"
            link="/projects/finance-app"
          />
          <ProjectCard
            title="AI Chatbot Assistant"
            description="Natural language processing assistant for customer service"
            tags={["Python", "TensorFlow", "NLP"]}
            image="https://placehold.co/800x600/f59e0b/1a1a1a?text=AI+Chatbot"
            link="/projects/ai-chatbot"
          />
          <ProjectCard
            title="Crypto Portfolio Tracker"
            description="Real-time cryptocurrency portfolio monitoring with alerts"
            tags={["React", "Node.js", "WebSockets"]}
            image="https://placehold.co/800x600/ec4899/1a1a1a?text=Crypto"
            link="/projects/crypto-app"
          />
          <ProjectCard
            title="Social Media Dashboard"
            description="Centralized platform to manage multiple social media accounts"
            tags={["React", "Redux", "Social APIs"]}
            image="https://placehold.co/800x600/8b5cf6/1a1a1a?text=Social+Dashboard"
            link="/projects/social-dashboard"
          />
          <ProjectCard
            title="Weather Forecast App"
            description="Accurate weather predictions with interactive maps"
            tags={["React Native", "OpenWeather API", "Geolocation"]}
            image="https://placehold.co/800x600/06b6d4/1a1a1a?text=Weather+App"
            link="/projects/weather-app"
          />
          <ProjectCard
            title="Music Streaming Service"
            description="Custom audio player with playlists and recommendations"
            tags={["Angular", "Node.js", "MongoDB"]}
            image="https://placehold.co/800x600/9333ea/1a1a1a?text=Music+App"
            link="/projects/music-app"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 border-t border-gray-800">
        <div className="container text-center text-gray-400">
          <p>© {new Date().getFullYear()} | IT Programming Student | Made with Next.js</p>
        </div>
      </footer>
    </div>
  )
}
