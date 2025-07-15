import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Professional electrician services in Cape Town, South Africa. Expert circuit design, solar installations, electrical repairs & maintenance. 24/7 emergency service.',
  keywords: ['electrician Cape Town', 'solar solutions South Africa', 'circuit design', 'electrical repairs', 'emergency electrician'],
  openGraph: {
    title: 'Rambo The Electrician | Professional Electrical Services Cape Town',
    description: 'Expert electrician services in Cape Town. Solar installations, circuit design, repairs & maintenance. 24/7 emergency service.',
    images: ['/og-image.svg'],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-yellow-400"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-blue-300"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-green-400"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-3 py-1 bg-yellow-500 text-blue-900 rounded-full text-sm font-semibold mb-6">
                Professional Electrical & Solar Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Powering Your Home, <span className="text-yellow-400">Brightening</span> Your House.
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                South Africa's trusted electrical contractor specializing in residential and commercial electrical solutions, solar installations, and emergency repairs. We combine traditional electrical expertise with cutting-edge renewable energy technology to power your future.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:0730352691"
                  className="btn-secondary"
                >
                  📞 Call for Free Quote
                </a>
                <Link
                  href="/services"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white px-6 py-3 rounded-md text-lg font-medium inline-block transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
              <div className="mt-8 flex items-center text-sm">
                <div className="flex -space-x-2 mr-3">
                  <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white flex items-center justify-center">
                    <span className="text-xs">⚡</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white flex items-center justify-center">
                    <span className="text-xs">🔧</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center">
                    <span className="text-xs">☀️</span>
                  </div>
                </div>
                <span>Trusted by hundreds of satisfied customers</span>
              </div>
            </div>
            <div className="relative h-80 md:h-96 img-hover-zoom rounded-lg overflow-hidden shadow-2xl transform md:translate-y-4">
              <Image
                src="/electrician-hero.svg"
                alt="Professional electrician in Cape Town working on solar panel installation - Rambo The Electrician services"
                fill
                className="object-cover rounded-lg"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Services</h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive electrical and solar solutions designed to meet all your power needs with reliability, efficiency, and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="service-card blue group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-gray-800">Circuit Design</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Expert electrical system design with detailed planning, load calculations, and compliance with South African standards.
              </p>
              <div className="mt-4 text-center">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Professional Planning</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="service-card green group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-gray-800">Installations</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Professional installation of solar PV systems, battery backups, distribution boards, and complete electrical systems.
              </p>
              <div className="mt-4 text-center">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Solar & Electrical</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="service-card yellow group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-gray-800">Maintenance</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Comprehensive maintenance programs including system inspections, thermal imaging, and preventive care for electrical and solar systems.
              </p>
              <div className="mt-4 text-center">
                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Preventive Care</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="service-card red group">
              <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-gray-800">Emergency Repairs</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                24/7 emergency electrical repairs with rapid response times, advanced diagnostics, and permanent solutions for all electrical problems.
              </p>
              <div className="mt-4 text-center">
                <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">24/7 Available</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="btn-primary inline-flex items-center"
            >
              Explore All Services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <a
              href="tel:0730352691"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md text-lg font-medium inline-flex items-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              📞 Call Now: 073 035 2691
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">What Our Customers Say</h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from satisfied customers across South Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-lg">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
                <span className="ml-2 text-sm text-gray-500 font-medium">5.0</span>
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "Rambo The Electrician installed our complete solar system in Camps Bay. Professional work, fair pricing, and excellent customer service. Our electricity bills have dropped by 80%!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Michael K.</h4>
                  <p className="text-gray-600 text-sm flex items-center">
                    <span className="mr-1">📍</span>
                    Camps Bay, Cape Town
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg border border-green-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-lg">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
                <span className="ml-2 text-sm text-gray-500 font-medium">5.0</span>
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "Emergency electrical repair at 2 AM in Claremont - they came out immediately and fixed our power outage. Truly 24/7 service. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Sarah L.</h4>
                  <p className="text-gray-600 text-sm flex items-center">
                    <span className="mr-1">📍</span>
                    Claremont, Cape Town
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-xl shadow-lg border border-yellow-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-lg">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
                <span className="ml-2 text-sm text-gray-500 font-medium">5.0</span>
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "Complete rewiring of our office building in Century City. The team was professional, clean, and finished ahead of schedule. Excellent workmanship!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  D
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">David M.</h4>
                  <p className="text-gray-600 text-sm flex items-center">
                    <span className="mr-1">📍</span>
                    Century City, Cape Town
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-blue-200 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">5.0</div>
                <div className="text-blue-200 text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-blue-200 text-sm">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-blue-200 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-yellow-400 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-green-400 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-blue-400 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Cape Town Trusts Us</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just electricians - we're your trusted partners in powering Cape Town's future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Licensed & Certified</h3>
              <p className="text-gray-300 text-center leading-relaxed">
                Fully licensed electrical contractors with all necessary certifications and insurance coverage for your peace of mind.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Rapid Response</h3>
              <p className="text-gray-300 text-center leading-relaxed">
                24/7 emergency service across Cape Town with average response time of under 30 minutes for urgent electrical issues.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Solar Specialists</h3>
              <p className="text-gray-300 text-center leading-relaxed">
                Leading Cape Town's solar revolution with cutting-edge installations that reduce your electricity costs by up to 90%.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
              <span className="text-2xl mr-3">🏆</span>
              <span className="font-semibold">Cape Town's #1 Rated Electrical Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Power Your Future?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Join hundreds of satisfied customers who trust us with their electrical and solar needs. Get your free consultation today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/27730352691?text=Hi%20Rambo%20The%20Electrician,%20I'm%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md text-lg font-medium inline-flex items-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
                className="mr-2"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.72.043.433-.101.824z"/>
              </svg>
              WhatsApp Us
            </a>
            <a
              href="tel:0730352691"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white px-6 py-3 rounded-md text-lg font-medium inline-flex items-center transition-all duration-300"
            >
              <span className="mr-2">📞</span>
              Call Now: 073 035 2691
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
