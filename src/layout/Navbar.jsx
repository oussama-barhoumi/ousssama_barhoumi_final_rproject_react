export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Utility Bar */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-9 text-sm">
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-600 hover:text-black">Facebook</a>
            <a href="#" className="text-gray-600 hover:text-black">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-black">Pinterest</a>
            <a href="#" className="text-gray-600 hover:text-black">Instagram</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Free shipping for all order of $99</span>
            <select className="bg-transparent border-none text-gray-600 cursor-pointer">
              <option>USD</option>
            </select>
            <a href="#" className="text-gray-600 hover:text-black">My Account</a>
            <a href="#" className="text-gray-600 hover:text-black">Login</a>
            <a href="#" className="text-gray-600 hover:text-black">Register</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="text-2xl font-bold text-black tracking-tight">Fashe.</a>
        <ul className="hidden md:flex items-center gap-8">
          <li><a href="#" className="text-black hover:text-gray-600 font-medium">Home</a></li>
          <li><a href="#" className="text-black hover:text-gray-600 font-medium">Shop</a></li>
          <li><a href="#" className="text-black hover:text-gray-600 font-medium">Sale</a></li>
          <li><a href="#" className="text-black hover:text-gray-600 font-medium">Features</a></li>
          <li><a href="#" className="text-black hover:text-gray-600 font-medium">Blog</a></li>
          <li><a href="#" className="text-black hover:text-gray-600 font-medium">About</a></li>
          <li><a href="#" className="text-black hover:text-gray-600 font-medium">Contact</a></li>
        </ul>
        <div className="flex items-center gap-6">
          <button className="text-black hover:text-gray-600" aria-label="Search">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <a href="#" className="relative text-black hover:text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </a>
          <a href="#" className="text-black hover:text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}
