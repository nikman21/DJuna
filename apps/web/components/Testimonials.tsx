const testimonials = [
    {
      quote: "DJuna has revolutionized the way I prepare for my sets. It's like having a personal assistant who knows exactly what tracks will keep the crowd moving.",
      author: "DJ Sparkle",
      role: "Club DJ"
    },
    {
      quote: "As a music enthusiast, I love how DJuna helps me discover new tracks that perfectly fit the mood I'm going for. It's made playlist creation a breeze!",
      author: "Alex Thompson",
      role: "Music Blogger"
    },
    {
      quote: "The BPM matching feature is a game-changer. I can create smooth transitions between tracks effortlessly, elevating the overall quality of my mixes.",
      author: "Sarah Lee",
      role: "Wedding DJ"
    }
  ]
  
  export default function Testimonials() {
    return (
      <section id="testimonials" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg">
                <p className="text-lg mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-purple-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }