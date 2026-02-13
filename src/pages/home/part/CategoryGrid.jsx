import ScrollReveal from "../../../components/ScrollReveal";

const categories = [
  {
    title: "WOMEN",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
  },
  {
    title: "WATCHES",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
  },
  {
    title: "BAGS",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
  },
  {
    title: "SUNGLASSES",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
  },
  {
    title: "FOOTWEAR",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
  },
  {
    title: "ACCESSORIES",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&q=80",
  },
];

export default function CategoryGrid() {
  return (
    <ScrollReveal stagger={0.1} y={40} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-4 py-12">
      {categories.map((cat) => (
        <a
          key={cat.title}
          href="#"
          className="group relative h-80 overflow-hidden block"
        >
          <img
            src={cat.image}
            alt={cat.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h3 className="text-2xl font-bold uppercase tracking-wider mb-4">{cat.title}</h3>
            <span className="px-6 py-2 bg-white/20 backdrop-blur-sm text-sm font-medium uppercase hover:bg-white hover:text-black transition-colors">
              Shop Now
            </span>
          </div>
        </a>
      ))}
    </ScrollReveal>
  );
}
