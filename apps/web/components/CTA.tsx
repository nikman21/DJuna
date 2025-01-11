import { Button } from '@workspace/ui/components/button'

export default function CTA() {
  return (
    <section className="py-20 bg-purple-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to elevate your music game?</h2>
        <p className="text-xl mb-8">Join DJuna today and start creating perfect playlists for any occasion.</p>
        <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-colors">
          Get Started for Free
        </Button>
      </div>
    </section>
  )
}
