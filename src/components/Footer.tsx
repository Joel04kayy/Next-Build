import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Gaming PCs', href: '#services' },
      { name: 'Workstations', href: '#services' },
      { name: 'Custom Builds', href: '#services' },
      { name: 'Repair & Upgrade', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Gallery', href: '#gallery' },
      { name: 'Testimonials', href: '#testimonials' }
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: '#' },
      { name: 'Warranty', href: '#' },
      { name: 'Support', href: '#' }
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">N</span>
              </div>
              <span className="text-2xl font-bold">Next Build</span>
            </Link>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Professional computer building services for gaming, workstations, and custom PCs. 
              Quality builds, expert support, and unbeatable performance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-gray-800 text-white rounded-xl flex items-center justify-center hover:bg-gray-600 transition-colors text-xl">
                📘
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 text-white rounded-xl flex items-center justify-center hover:bg-gray-600 transition-colors text-xl">
                🐦
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 text-white rounded-xl flex items-center justify-center hover:bg-gray-600 transition-colors text-xl">
                📷
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 text-white rounded-xl flex items-center justify-center hover:bg-gray-600 transition-colors text-xl">
                📺
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-lg">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-lg">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Support</h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-lg">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-8 text-lg">
              Get the latest news about new builds, components, and special offers.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-l-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400 text-lg"
              />
              <button className="px-8 py-4 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-r-xl transition-colors text-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-lg">
            © {currentYear} Next Build. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-lg transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-lg transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-lg transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}