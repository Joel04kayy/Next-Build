import Link from 'next/link'
import Logo from './Logo'

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
        <footer className="bg-gray-100 dark:bg-[#0a0a0a] text-gray-900 dark:text-white">
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-8 block">
              <Logo size="lg" className="text-white" />
            </Link>
            <p className="text-gray-600 dark:text-gray-500 mb-8 text-lg leading-relaxed">
              Professional computer building services for gaming, workstations, and custom PCs. 
              Quality builds, expert support, and unbeatable performance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white rounded-2xl flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-xl">
                📘
              </a>
              <a href="#" className="w-12 h-12 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white rounded-2xl flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-xl">
                🐦
              </a>
              <a href="#" className="w-12 h-12 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white rounded-2xl flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-xl">
                📷
              </a>
              <a href="#" className="w-12 h-12 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white rounded-2xl flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-xl">
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
                  <Link href={link.href} className="text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors text-lg">
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
                  <Link href={link.href} className="text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors text-lg">
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
                  <Link href={link.href} className="text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors text-lg">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-12 border-t border-gray-800 dark:border-gray-600">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-600 dark:text-gray-500 mb-8 text-lg">
              Get the latest news about new builds, components, and special offers.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-l-2xl focus:ring-2 focus:ring-gray-500 dark:focus:ring-white focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 text-lg"
              />
              <button className="px-8 py-4 bg-gray-700 dark:bg-gray-500 hover:bg-gray-800 dark:hover:bg-gray-400 text-white font-semibold rounded-r-2xl transition-colors text-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 dark:border-gray-600 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-500 text-lg">
            © {currentYear} Next Build. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="#" className="text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white text-lg transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white text-lg transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white text-lg transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}