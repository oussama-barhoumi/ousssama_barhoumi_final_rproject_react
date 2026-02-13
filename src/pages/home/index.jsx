import Carousel from "../../components/Carousel";
import HeroSlideContent from "../../components/HeroSlideContent";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80",
    alt: "New Arrivals",
    overlay: (isActive) => (
      <HeroSlideContent
        isActive={isActive}
        subtitle="Spring / Summer 2018"
        title="NEW ARRIVALS"
      />
    ),
  },
  {
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&q=80",
    alt: "Winter Collection",
    overlay: (isActive) => (
      <HeroSlideContent
        isActive={isActive}
        subtitle="New Season"
        title="WINTER COLLECTION"
      />
    ),
  },
  {
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80",
    alt: "Summer Sale",
    overlay: (isActive) => (
      <HeroSlideContent
        isActive={isActive}
        subtitle="Limited Edition"
        title="SUMMER SALE"
      />
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
