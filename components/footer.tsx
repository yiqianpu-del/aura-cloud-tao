import Link from 'next/link';
import { siteConfig } from '@/data/site-config';

export default function Footer() {
  return (
    <footer className="bg-ink text-gray-300">
      <div className="container px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-serif text-white text-lg mb-4">{siteConfig.name}</h3>
          <p className="text-sm text-gray-400">{siteConfig.tagline}</p>
          <p className="text-xs text-gray-500 mt-2 italic">让道家智慧照进现代生活</p>
        </div>
        <div>
          <h4 className="font-serif text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/talismans" className="hover:text-gold transition-colors">Talismans</Link></li>
            <li><Link href="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link href="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-white mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link></li>
            <li><Link href="/shipping-returns" className="hover:text-gold transition-colors">Shipping & Returns</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-white mb-4">Contact</h4>
          <p className="text-sm text-gray-400">Email: {siteConfig.email}</p>
          <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-sm mt-4">WhatsApp Us</a>
        </div>
      </div>
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
