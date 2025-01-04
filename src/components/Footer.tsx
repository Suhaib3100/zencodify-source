import { Blocks, Github, Twitter, DiscIcon as Discord, ExternalLink } from 'lucide-react'
import Link from "next/link"
import { TextHoverEffect } from './ui/text-hover-effect'

function Footer() {
  return (
    <footer className="relative border-t border-gray-800/50 mt-auto bg-gradient-to-b from-black/40 via-black/50 to-black/60">
      {/* Top gradient line */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Content */}
        <div className="grid grid-col
        s-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-col items-start gap-6">
              {/* Logo and Brand */}
              <div className="flex items-center gap-3 group">
                <div className="relative">
                  <Blocks className="size-8 text-purple-500 group-hover:rotate-180 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full group-hover:bg-purple-500/30 transition-colors" />
                </div>
                <div className="h-20" style={{ width: '300px' }}>
  <TextHoverEffect text="ZenCodify" />
</div>


              </div>
              
              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Experience the future of coding with our powerful online compiler. 
                Built for developers who demand excellence, powered by innovation.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-6">
                <Link 
                  href="https://github.com" 
                  className="group relative"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/20 rounded-full blur-xl transition-all duration-300" />
                  <Github className="size-6 text-gray-400 group-hover:text-purple-400 transform group-hover:-translate-y-1 transition-all duration-300" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link 
                  href="https://twitter.com" 
                  className="group relative"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/20 rounded-full blur-xl transition-all duration-300" />
                  <Twitter className="size-6 text-gray-400 group-hover:text-purple-400 transform group-hover:-translate-y-1 transition-all duration-300" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link 
                  href="https://discord.com" 
                  className="group relative"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/20 rounded-full blur-xl transition-all duration-300" />
                  <Discord className="size-6 text-gray-400 group-hover:text-purple-400 transform group-hover:-translate-y-1 transition-all duration-300" />
                  <span className="sr-only">Discord</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links Sections */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Support Section */}
            <div className="space-y-4">
              <h3 className="font-medium text-gray-200 text-lg">Support</h3>
              <div className="flex flex-col space-y-3">
                {['Help Center', 'Documentation', 'Status'].map((item) => (
                  <Link 
                    key={item}
                    href={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="group flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors w-fit"
                  >
                    <span>{item}</span>
                    <ExternalLink className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal Section */}
            <div className="space-y-4">
              <h3 className="font-medium text-gray-200 text-lg">Legal</h3>
              <div className="flex flex-col space-y-3">
                {['Privacy', 'Terms', 'Cookies'].map((item) => (
                  <Link 
                    key={item}
                    href={`/${item.toLowerCase()}`} 
                    className="group flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors w-fit"
                  >
                    <span>{item}</span>
                    <ExternalLink className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources Section */}
            <div className="space-y-4">
              <h3 className="font-medium text-gray-200 text-lg">Resources</h3>
              <div className="flex flex-col space-y-3">
                {['Blog', 'Guides', 'Community'].map((item) => (
                  <Link 
                    key={item}
                    href={`/${item.toLowerCase()}`} 
                    className="group flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors w-fit"
                  >
                    <span>{item}</span>
                    <ExternalLink className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Zencodify. Powered by{" "}
              <Link 
                href="#" 
                className="text-purple-400 hover:text-purple-300 transition-colors relative inline-flex group"
              >
                <span>Suhaib King</span>
                <span className="absolute -bottom-px left-0 w-full h-px bg-gradient-to-r from-purple-500/0 via-purple-500 to-purple-500/0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            </div>
            <div className="text-sm text-gray-500 flex items-center gap-2">
              <Blocks className="size-4" />
              <span>Built for developers, by developers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
    </footer>
  )
}

export default Footer

