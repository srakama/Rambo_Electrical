import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electrical Services',
  description: 'Comprehensive electrical services in South Africa: circuit design, solar installations, maintenance, and emergency repairs. Professional licensed electricians.',
  keywords: ['electrical services South Africa', 'circuit design', 'solar panel installation', 'electrical maintenance', 'emergency electrical repairs'],
  openGraph: {
    title: 'Professional Electrical Services | Rambo The Electrician',
    description: 'Circuit design, solar installations, maintenance, and emergency repairs. Professional electrical services across South Africa.',
    images: ['/og-image.svg'],
  },
};

export default function Services() {
  const services = [
    {
      title: "Designing of Circuits",
      description: "Our expert circuit design services ensure your electrical systems are efficient, safe, and future-ready. We analyze your power requirements, design optimal circuit layouts, and create comprehensive electrical plans that meet all South African electrical standards and regulations. Whether you're building a new home, expanding your business, or upgrading existing systems, our designs maximize efficiency while minimizing costs.",
      features: [
        "Comprehensive load analysis and calculations",
        "3-phase and single-phase system design",
        "Energy-efficient circuit optimization",
        "Compliance with SANS 10142-1 standards",
        "Integration with solar and backup systems",
        "Detailed electrical drawings and specifications",
        "Future expansion planning",
        "Cost-effective material selection"
      ],
      image: "/circuit-design.svg",
      color: "blue"
    },
    {
      title: "Installations",
      description: "Our installation services cover everything from basic electrical fixtures to complete solar power systems. Our certified technicians follow strict safety protocols and industry best practices to ensure every installation is performed correctly the first time. We specialize in both traditional electrical installations and renewable energy solutions, providing South African homes and businesses with reliable power systems that stand the test of time.",
      features: [
        "Complete solar PV system installations",
        "Battery backup system integration",
        "Distribution board upgrades and replacements",
        "Smart home electrical installations",
        "Generator installation and transfer switches",
        "Energy-efficient lighting systems",
        "Surge protection systems",
        "Electric vehicle charging stations"
      ],
      image: "/installation.svg",
      color: "green"
    },
    {
      title: "Maintenance",
      description: "Proactive maintenance is essential for the longevity and safety of your electrical systems. Our comprehensive maintenance programs are designed to identify potential issues before they become costly problems. We provide scheduled maintenance services for residential, commercial, and industrial clients, ensuring optimal performance of both traditional electrical systems and renewable energy installations throughout South Africa's challenging climate conditions.",
      features: [
        "Comprehensive electrical system inspections",
        "Solar panel cleaning and performance optimization",
        "Battery system maintenance and testing",
        "Thermal imaging fault detection",
        "Circuit breaker testing and calibration",
        "Preventive maintenance contracts",
        "Emergency response protocols",
        "Detailed maintenance reporting and recommendations"
      ],
      image: "/maintenance.svg",
      color: "yellow"
    },
    {
      title: "Repairs",
      description: "When electrical problems strike, you need fast, reliable repair services. Our emergency response team is available 24/7 to handle urgent electrical issues that could pose safety risks or disrupt your daily operations. From simple circuit repairs to complex system failures, we have the expertise and equipment to diagnose problems quickly and implement lasting solutions that restore your electrical systems to optimal performance.",
      features: [
        "24/7 emergency electrical repairs",
        "Advanced fault diagnosis with thermal imaging",
        "Circuit breaker and fuse replacement",
        "Electrical fire damage restoration",
        "Power outage troubleshooting and resolution",
        "Damaged wiring repair and replacement",
        "Solar system fault diagnosis and repair",
        "Guaranteed workmanship with warranty coverage"
      ],
      image: "/repairs.svg",
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-600',
          border: 'border-blue-200',
          button: 'bg-blue-600 hover:bg-blue-700'
        };
      case 'green':
        return {
          bg: 'bg-green-100',
          text: 'text-green-600',
          border: 'border-green-200',
          button: 'bg-green-600 hover:bg-green-700'
        };
      case 'yellow':
        return {
          bg: 'bg-yellow-100',
          text: 'text-yellow-600',
          border: 'border-yellow-200',
          button: 'bg-yellow-600 hover:bg-yellow-700'
        };
      case 'red':
        return {
          bg: 'bg-red-100',
          text: 'text-red-600',
          border: 'border-red-200',
          button: 'bg-red-600 hover:bg-red-700'
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-600',
          border: 'border-gray-200',
          button: 'bg-gray-600 hover:bg-gray-700'
        };
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-yellow-400 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-green-400 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-red-400 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-yellow-500 text-blue-900 rounded-full text-sm font-semibold mb-6">
            Professional Electrical Services
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our <span className="text-yellow-400">Expert</span> Services</h1>
          <p className="text-xl max-w-4xl mx-auto text-blue-100 leading-relaxed">
            Comprehensive electrical and solar solutions designed to meet all your power needs with reliability, efficiency, and safety across Cape Town.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              return (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} - Professional electrical service by Rambo The Electrician in South Africa`}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className={`absolute top-4 left-4 inline-flex items-center px-4 py-2 rounded-full text-sm font-bold ${colors.bg} ${colors.text} shadow-lg`}>
                      {service.title}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{service.title}</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">{service.description}</p>

                    <div className="bg-gray-50 rounded-xl p-6 mb-8">
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <span className="mr-2">✨</span>
                        What's Included:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <svg className={`h-5 w-5 ${colors.text} mr-3 mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <a
                        href="tel:0730352691"
                        className={`${colors.button} text-white px-8 py-3 rounded-xl font-bold inline-flex items-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                      >
                        📞 Call for Quote
                        <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </a>
                      <a
                        href="https://wa.me/27730352691?text=Hi%20Rambo%20The%20Electrician,%20I'm%20interested%20in%20your%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium inline-flex items-center transition-all duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="mr-2"
                        >
                          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.72.043.433-.101.824z"/>
                        </svg>
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Services</h2>
            <p className="mt-4 text-xl text-gray-600">
              Professional expertise you can trust for all your electrical needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Professionals</h3>
              <p className="text-gray-600">Licensed and certified electricians with years of experience in the field.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Emergency Service</h3>
              <p className="text-gray-600">Round-the-clock emergency services for urgent electrical issues.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Energy Efficient Solutions</h3>
              <p className="text-gray-600">Focus on energy-efficient installations to reduce your power costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Electrical Services?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get in touch with us today for a free consultation and personalized quote for your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0730352691"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-md text-lg font-medium inline-flex items-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              📞 Call for Free Quote
            </a>
            <a
              href="https://wa.me/27730352691?text=Hi%20Rambo%20The%20Electrician,%20I'm%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md text-lg font-medium inline-flex items-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="white"
                className="mr-2"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.72.043.433-.101.824z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
