export default function HowItWorks() {
    return (
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="flex-1 max-w-md">
              <ol className="list-decimal space-y-6 pl-6">
                <li className="text-lg">
                  <span className="font-semibold text-purple-400">Set your vibe:</span> Choose the mood, energy level, and genre for your playlist.
                </li>
                <li className="text-lg">
                  <span className="font-semibold text-purple-400">Specify BPM range:</span> Select the tempo range for your tracks.
                </li>
                <li className="text-lg">
                  <span className="font-semibold text-purple-400">Get recommendations:</span> DJuna suggests tracks that match your criteria.
                </li>
                <li className="text-lg">
                  <span className="font-semibold text-purple-400">Customize your playlist:</span> Add, remove, or reorder tracks as needed.
                </li>
                <li className="text-lg">
                  <span className="font-semibold text-purple-400">Mix and share:</span> Create seamless transitions and share your playlist with others.
                </li>
              </ol>
            </div>
            <div className="flex-1 max-w-md">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <div className="bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-4xl">▶️</span>
                  </div>
                </div>
                <p className="text-center text-gray-400">Watch how DJuna works</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }