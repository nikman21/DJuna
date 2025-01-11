import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-purple-500 mb-4">DJuna</h3>
            <p className="text-gray-400">Empowering DJs and music enthusiasts to create perfect playlists with data-driven insights.</p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-gray-400 hover:text-purple-400 transition-colors">Features</Link></li>
              <li><Link href="#how-it-works" className="text-gray-400 hover:text-purple-400 transition-colors">How It Works</Link></li>
              <li><Link href="#testimonials" className="text-gray-400 hover:text-purple-400 transition-colors">Testimonials</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DJuna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

