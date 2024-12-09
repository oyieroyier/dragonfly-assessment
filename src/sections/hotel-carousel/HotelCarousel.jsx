import { useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",
    title: "Inclusive Collection, part of Mantis Hotel and Resort",
    description:
      "Looking to plan a trip and create lasting memories with loved ones? Well it couldn't be better timing. Book your package with us and save £60 per adult and £45 per child on Mantis Hotel holidays when you fly with RwandAir.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
    title: "Luxury Beachfront Villas at Sunset Resort",
    description:
      "Experience ultimate relaxation in our private beachfront villas. Enjoy stunning ocean views, personalized service, and exclusive access to our world-class spa. Book now and receive a complimentary sunset dinner cruise for two.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",
    title: "Mountain Retreat at Alpine Lodge",
    description:
      "Escape to the serene beauty of the mountains at our Alpine Lodge. Perfect for nature lovers and adventure seekers. Book a 5-night stay and get a free guided hiking tour of the surrounding national park.",
  },
];

export default function HotelCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="mx-auto max-w-6xl p-4">
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="flex flex-col md:flex-row">
          <div className="h-[300px] md:h-[400px] md:w-1/2">
            <img
              src={slides[currentSlide].image}
              alt={`View of ${slides[currentSlide].title}`}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-between p-6 md:w-1/2 md:p-8">
            <div>
              <h2 className="mb-4 text-2xl font-semibold">
                {slides[currentSlide].title}
              </h2>
              <p className="mb-6 text-gray-600">
                {slides[currentSlide].description}
              </p>
              <button className="rounded-md bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700">
                Browse Package
              </button>
            </div>

            <div className="mt-8 flex justify-end gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "w-8 bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
