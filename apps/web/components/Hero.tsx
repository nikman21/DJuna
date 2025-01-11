import { Button } from "@workspace/ui/components/button"

export default function Hero() {
    return (
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Create Perfect Playlists with DJuna
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            A data-driven music tool that suggests songs based on mood, BPM, and other audio metrics for creating party-ready playlists.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
            Start Mixing
          </Button>
        </div>
      </section>
    )
}