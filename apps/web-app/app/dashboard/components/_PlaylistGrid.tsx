import { Music } from 'lucide-react'

const playlists = [
  { id: 1, name: 'Summer Vibes 2023', songCount: 25, image: '/placeholder.svg' },
  { id: 2, name: 'Chill House Mix', songCount: 40, image: '/placeholder.svg' },
  { id: 3, name: 'Workout Beats', songCount: 30, image: '/placeholder.svg' },
  { id: 4, name: 'Late Night Techno', songCount: 35, image: '/placeholder.svg' },
  { id: 5, name: 'Hip Hop Classics', songCount: 50, image: '/placeholder.svg' },
  { id: 6, name: 'Indie Discoveries', songCount: 20, image: '/placeholder.svg' },
]

export default function PlaylistGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {playlists.map((playlist) => (
        <div key={playlist.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
            {playlist.image ? (
              <img src={playlist.image || "/placeholder.svg"} alt={playlist.name} className="object-cover" />
            ) : (
              <div className="flex items-center justify-center">
                <Music className="h-12 w-12 text-gray-400" />
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-1">{playlist.name}</h3>
            <p className="text-sm text-gray-600">{playlist.songCount} songs</p>
          </div>
        </div>
      ))}
    </div>
  )
}