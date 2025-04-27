"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  link?: string
}

export function ProjectCard({ title, description, tags, image, link = "#" }: ProjectCardProps) {
  // Generate color based on the project title for the placeholder
  const generateColorFromTitle = (title: string) => {
    let hash = 0
    for (let i = 0; i < title.length; i++) {
      hash = title.charCodeAt(i) + ((hash << 5) - hash)
    }
    const color = (hash & 0x00ffffff).toString(16).toUpperCase()
    return `0000${color}`.slice(-6)
  }

  const placeholderImage =
    image ||
    `https://placehold.co/800x600/${generateColorFromTitle(title)}/1a1a1a?text=${encodeURIComponent(title.split(" ")[0])}`

  return (
    <Link href={link}>
      <motion.div whileHover={{ y: -10 }} className="overflow-hidden">
        <Card className="bg-gray-900 border-gray-800 overflow-hidden h-full">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={placeholderImage || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-gray-800 text-cyan-400 rounded-md text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  )
}
