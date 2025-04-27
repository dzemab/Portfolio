import Link from "next/link"
import { Mail, Send, Code, Bot, Terminal } from "lucide-react"

export function SocialIcons() {
  return (
    <div className="mt-12 flex justify-center items-center space-x-8">
      <Link
        href="https://t.me/azatam05"
        target="_blank"
        className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110 duration-200"
        aria-label="Telegram"
      >
        <Send className="h-8 w-8" />
      </Link>
      <Link
        href="mailto:hyyrofn2005@gmail.com"
        className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110 duration-200"
        aria-label="Email"
      >
        <Mail className="h-8 w-8" />
      </Link>
      <Link
        href="#projects"
        className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110 duration-200"
        aria-label="Projects"
      >
        <Code className="h-8 w-8" />
      </Link>
      <Link
        href="#services"
        className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110 duration-200"
        aria-label="Bot Services"
      >
        <Bot className="h-8 w-8" />
      </Link>
      <Link
        href="#skills"
        className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110 duration-200"
        aria-label="Skills"
      >
        <Terminal className="h-8 w-8" />
      </Link>
    </div>
  )
}
