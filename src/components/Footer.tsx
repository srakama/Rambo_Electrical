import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-yellow-400"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-green-400"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-2">⚡</span>
              <h3 className="text-2xl font-bold">Rambo The Electrician</h3>
            </div>
            <p className="mb-6 text-blue-100 text-lg">Powering Your Home, Brightening Your House.</p>
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/south-africa-flag.png"
                alt="South Africa Flag"
                width={36}
                height={24}
                className="inline-block rounded shadow-sm"
              />
              <span className="font-semibold">Proudly South African</span>
            </div>
            <div className="flex space-x-4">
              <a href="mailto:roynyasango@gmail.com" className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110">
                <span className="text-xl">📧</span>
              </a>
              <a href="tel:0730352691" className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110">
                <span className="text-xl">📱</span>
              </a>
              <a href="https://wa.me/27730352691?text=Hi%20Rambo%20The%20Electrician,%20I'm%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.72.043.433-.101.824z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-yellow-400 transition-colors duration-200 flex items-center group">
                  <span className="mr-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-yellow-400 transition-colors duration-200 flex items-center group">
                  <span className="mr-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-400 transition-colors duration-200 flex items-center group">
                  <span className="mr-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-400 transition-colors duration-200 flex items-center group">
                  <span className="mr-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="mr-3 text-yellow-400">📞</span>
                <a href="tel:0730352691" className="hover:text-yellow-400 transition-colors duration-200 font-semibold">
                  073 035 2691
                </a>
                <span className="ml-2 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">Primary</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-yellow-400">📞</span>
                <a href="tel:0670904151" className="hover:text-yellow-400 transition-colors duration-200">
                  067 090 4151
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-yellow-400">✉️</span>
                <a href="mailto:roynyasango@gmail.com" className="hover:text-yellow-400 transition-colors duration-200">
                  roynyasango@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-yellow-400">🕒</span>
                <span className="text-sm">24/7 Emergency Service</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200">© {new Date().getFullYear()} Rambo The Electrician. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex items-center space-x-6 text-sm text-blue-200">
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>Professional Service</span>
              <span>•</span>
              <span>Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
