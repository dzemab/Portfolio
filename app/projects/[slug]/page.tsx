"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"

// This would typically come from a database or CMS
const projectData: Record<
  string,
  {
    title: string
    description: string
    longDescription: string
    image: string
    technologies: string[]
    features: string[]
    date: string
  }
> = {
  ecommerce: {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration and admin dashboard",
    longDescription:
      "A comprehensive e-commerce platform developed for a client selling tech products. The solution includes a responsive frontend, secure payment processing with Stripe, inventory management, and a powerful admin dashboard for managing products, orders, and customer data.",
    image: "https://placehold.co/800x600/2563eb/1a1a1a?text=E-Commerce",
    technologies: ["Next.js", "MongoDB", "Stripe API", "Redux", "Tailwind CSS"],
    features: [
      "Product catalog with filtering and search",
      "User authentication and account management",
      "Shopping cart and checkout process",
      "Payment processing with Stripe",
      "Order history and tracking",
      "Admin dashboard for inventory management",
    ],
    date: "January 2023",
  },
  "discord-bot": {
    title: "Discord Community Bot",
    description: "A feature-rich bot for server management, moderation, and entertainment",
    longDescription:
      "A custom Discord bot built for a gaming community with over 10,000 members. The bot handles moderation tasks, welcomes new members, provides server information, manages roles, and includes entertainment features like games and music playback.",
    image: "https://placehold.co/800x600/7e22ce/1a1a1a?text=Discord+Bot",
    technologies: ["Discord.js", "Node.js", "MongoDB", "Docker", "AWS Lambda"],
    features: [
      "Automated moderation with customizable rules",
      "Welcome messages for new users",
      "Role management and permissions",
      "Custom commands and responses",
      "Music playback from various sources",
      "In-chat games and activities",
    ],
    date: "April 2023",
  },
  "task-app": {
    title: "Task Management App",
    description: "A responsive web app for organizing tasks with team collaboration features",
    longDescription:
      "A productivity application designed for small teams to organize tasks, track progress, and collaborate efficiently. Users can create projects, assign tasks, set deadlines, add attachments, and communicate through comments. Real-time updates keep everyone in sync.",
    image: "https://placehold.co/800x600/0ea5e9/1a1a1a?text=Task+App",
    technologies: ["React", "Firebase", "Tailwind CSS", "React DnD", "React Query"],
    features: [
      "Project and task organization",
      "Drag-and-drop interface",
      "Task assignments and deadline tracking",
      "File attachments and comments",
      "Real-time collaboration",
      "Progress tracking and reporting",
    ],
    date: "August 2023",
  },
  "finance-app": {
    title: "Personal Finance Dashboard",
    description: "Interactive dashboard for expense tracking and financial planning",
    longDescription:
      "A personal finance management application that helps users track expenses, create budgets, and visualize their financial data. The app connects to bank accounts via secure API, categorizes transactions automatically, and provides insights through interactive charts and reports.",
    image: "https://placehold.co/800x600/10b981/1a1a1a?text=Finance",
    technologies: ["Vue.js", "Chart.js", "Express", "PostgreSQL", "Plaid API"],
    features: [
      "Bank account integration",
      "Automatic transaction categorization",
      "Budget planning and tracking",
      "Interactive data visualizations",
      "Financial goal setting",
      "Monthly and yearly reports",
    ],
    date: "November 2023",
  },
  "ai-chatbot": {
    title: "AI Chatbot Assistant",
    description: "Natural language processing assistant for customer service",
    longDescription:
      "An AI-powered chatbot built for a client in the retail industry to handle customer service inquiries. The chatbot uses natural language processing to understand customer questions, provide relevant information, and escalate to human agents when necessary.",
    image: "https://placehold.co/800x600/f59e0b/1a1a1a?text=AI+Chatbot",
    technologies: ["Python", "TensorFlow", "NLP", "FastAPI", "Redis"],
    features: [
      "Natural language understanding",
      "Context-aware responses",
      "Intent classification",
      "FAQ handling",
      "Human agent handoff",
      "Conversation analytics",
    ],
    date: "February 2024",
  },
  "crypto-app": {
    title: "Crypto Portfolio Tracker",
    description: "Real-time cryptocurrency portfolio monitoring with alerts",
    longDescription:
      "A cryptocurrency portfolio tracking application that allows users to monitor their investments in real-time. The app connects to various exchanges via API, provides live price updates, calculates gains/losses, and sends alerts for significant price movements.",
    image: "https://placehold.co/800x600/ec4899/1a1a1a?text=Crypto",
    technologies: ["React", "Node.js", "WebSockets", "MongoDB", "Exchange APIs"],
    features: [
      "Multi-exchange support",
      "Real-time price updates",
      "Portfolio performance tracking",
      "Price alerts and notifications",
      "Transaction history",
      "Market trends analysis",
    ],
    date: "March 2024",
  },
  "social-dashboard": {
    title: "Social Media Dashboard",
    description: "Centralized platform to manage multiple social media accounts",
    longDescription:
      "A comprehensive social media management dashboard for businesses to manage their presence across multiple platforms. Users can schedule posts, monitor engagement, analyze performance, and respond to messages all from a single interface.",
    image: "https://placehold.co/800x600/8b5cf6/1a1a1a?text=Social+Dashboard",
    technologies: ["React", "Redux", "Social APIs", "Express", "PostgreSQL"],
    features: [
      "Multi-platform post scheduling",
      "Unified inbox for messages",
      "Content calendar",
      "Performance analytics",
      "Audience insights",
      "Competitor tracking",
    ],
    date: "December 2023",
  },
  "weather-app": {
    title: "Weather Forecast App",
    description: "Accurate weather predictions with interactive maps",
    longDescription:
      "A mobile-first weather application that provides accurate forecasts, radar maps, and weather alerts. The app uses geolocation to deliver local weather information and allows users to save multiple locations for easy access.",
    image: "https://placehold.co/800x600/06b6d4/1a1a1a?text=Weather+App",
    technologies: ["React Native", "OpenWeather API", "Geolocation", "MapBox"],
    features: [
      "Current conditions and hourly forecasts",
      "7-day weather predictions",
      "Radar and satellite maps",
      "Weather alerts and notifications",
      "Location-based services",
      "Customizable units and settings",
    ],
    date: "October 2023",
  },
  "music-app": {
    title: "Music Streaming Service",
    description: "Custom audio player with playlists and recommendations",
    longDescription:
      "A music streaming service built for independent artists to showcase and monetize their music. The platform includes features for playlist creation, music discovery, artist profiles, and a custom audio player with cross-device playback synchronization.",
    image: "https://placehold.co/800x600/9333ea/1a1a1a?text=Music+App",
    technologies: ["Angular", "Node.js", "MongoDB", "Web Audio API", "AWS S3"],
    features: [
      "Custom audio player",
      "Playlist creation and management",
      "Artist profiles and statistics",
      "Music recommendation engine",
      "Cross-device synchronization",
      "Offline listening mode",
    ],
    date: "July 2023",
  },
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const project = projectData[params.slug]

  // Fallback if project doesn't exist
  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="container pt-32 pb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">Project Not Found</h1>
          <p className="mb-8">Sorry, the project you're looking for doesn't exist.</p>
          <Link href="/projects">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="container pt-32 pb-16">
        <div className="mb-8">
          <Link href="/projects">
            <Button variant="ghost" className="text-cyan-400">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 mb-6">{project.description}</p>
            <p className="text-gray-400 mb-8">{project.longDescription}</p>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-cyan-400">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-900 text-cyan-400 rounded-full text-sm border border-cyan-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-cyan-400">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-400">Completed: {project.date}</p>
          </div>

          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-75"></div>
            <div className="relative bg-black rounded-lg overflow-hidden border border-gray-800">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-8 flex justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full">
                View Live Demo
              </Button>
            </div>
          </div>
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
