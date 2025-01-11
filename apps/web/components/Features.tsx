import { Music, Zap, Filter, Users } from 'lucide-react'

const features = [
  {
    icon: <Music className="w-12 h-12 text-purple-500" />,
    title: 'Mood-based Suggestions',
    description: 'Get song recommendations tailored to the vibe you want to create.'
  },
  {
    icon: <Zap className="w-12 h-12 text-purple-500" />,
    title: 'BPM Matching',
    description: 'Find tracks with matching tempos for seamless transitions.'
  },
  {
    icon: <Filter className="w-12 h-12 text-purple-500" />,
    title: 'Advanced Filtering',
    description: 'Filter tracks by genre, energy level, danceability, and more.'
  },
  {
    icon: <Users className="w-12 h-12 text-purple-500" />,
    title: 'Collaborative Playlists',
    description: 'Create and share playlists with other DJs and music enthusiasts.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-colors">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}