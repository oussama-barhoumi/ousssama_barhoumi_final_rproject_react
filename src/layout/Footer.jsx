export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div>
            <h4 className="font-bold uppercase text-sm tracking-wider mb-4">Get In Touch</h4>
            <p className="text-gray-600 text-sm mb-2">8th floor, 379 Hudson St, New York, NY 10018</p>
            <p className="text-gray-600 text-sm mb-2">Phone: (+1) 96 716 6879</p>
            <p className="text-gray-600 text-sm mb-4">Email: contact@example.com</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-black">Facebook</a>
              <a href="#" className="text-gray-600 hover:text-black">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-black">Instagram</a>
              <a href="#" className="text-gray-600 hover:text-black">Pinterest</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold uppercase text-sm tracking-wider mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-black">Men</a></li>
              <li><a href="#" className="hover:text-black">Women</a></li>
              <li><a href="#" className="hover:text-black">Dresses</a></li>
              <li><a href="#" className="hover:text-black">Sunglasses</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase text-sm tracking-wider mb-4">Links</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-black">Shop</a></li>
              <li><a href="#" className="hover:text-black">Blog</a></li>
              <li><a href="#" className="hover:text-black">Contact</a></li>
              <li><a href="#" className="hover:text-black">Returns</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase text-sm tracking-wider mb-4">Help</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-black">FAQs</a></li>
              <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase text-sm tracking-wider mb-4">Newsletter</h4>
            <p className="text-gray-600 text-sm mb-4">Subscribe to our newsletter for updates.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none focus:border-black"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-black text-white font-semibold uppercase text-sm hover:bg-gray-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">Copyright © 2026 All rights reserved | This template is made with ♥ by Colorlib</p>
          <div className="flex gap-4">
            <span className="text-gray-400 text-xs">Visa</span>
            <span className="text-gray-400 text-xs">Mastercard</span>
            <span className="text-gray-400 text-xs">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
