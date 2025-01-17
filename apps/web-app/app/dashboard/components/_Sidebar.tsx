import { Home, Music, Radio, Settings } from 'lucide-react'
import Link from 'next/link'

const navItems = [
  { icon: Home, label: 'Home', href: '/dashboard' },
  { icon: Music, label: 'My Playlists', href: '/dashboard/playlists' },
  { icon: Radio, label: 'Discover', href: '/dashboard/discover' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
]

export default function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-white border-r">
      <div className="flex items-center justify-center h-16 border-b">
        <span className="text-2xl font-bold text-purple-600">DJuna</span>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-4 space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link 
                href={item.href}
                className="flex items-center p-2 text-gray-700 rounded hover:bg-purple-100 hover:text-purple-600 transition-colors"
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

