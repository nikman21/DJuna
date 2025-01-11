'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

import { Button } from "@workspace/ui/components/button"

const navItems = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Testimonials', href: '#testimonials' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-900  fixed w-full bg-opacity-90 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              
              <span className="text-2xl font-bold text-purple-500">DJuna</span>
            </Link>
          </div>

          {/* Center Links */}
          <div className="hidden lg:flex items-center justify-center flex-grow space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-purple-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Auth Links */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="http://localhost:3001/">
              <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-colors">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button variant="ghost" className="bg-purple-500" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-4 pt-4 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-white hover:text-purple-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col space-y-2">
            <Link href="http://localhost:3001/">
              <Button variant="outline" className="w-full border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-colors">
                Get Started
              </Button>
            </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
