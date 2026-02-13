import Carousel from "../../components/Carousel";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80",
    alt: "New Arrivals",
    overlay: (
      <>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white">
          <p className="text-gray-300 text-sm uppercase tracking-[0.3em] mb-2">Spring / Summer 2018</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">NEW ARRIVALS</h1>
          <a
            href="#"
            className="px-10 py-3 bg-white text-black font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors border-2 border-white"
          >
            Shop Now
          </a>
        </div>
      </>
    ),
  },
  {
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&q=80",
    alt: "Winter Collection",
    overlay: (
      <>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white">
          <p className="text-gray-300 text-sm uppercase tracking-[0.3em] mb-2">New Season</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">WINTER COLLECTION</h1>
          <a
            href="#"
            className="px-10 py-3 bg-white text-black font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors border-2 border-white"
          >
            Shop Now
          </a>
        </div>
      </>
    ),
  },
  {
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80",
    alt: "Summer Sale",
    overlay: (
      <>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white">
          <p className="text-gray-300 text-sm uppercase tracking-[0.3em] mb-2">Limited Edition</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">SUMMER SALE</h1>
          <a
            href="#"
            className="px-10 py-3 bg-white text-black font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors border-2 border-white"
          >
            Shop Now
          </a>
        </div>
      </>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <Carousel slides={slides} interval={5000} />
    </section>
  );
}
