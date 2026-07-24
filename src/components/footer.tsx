import Link from 'next/link';

interface FooterProps {
  siteName: string;
  tagline: string;
}

export default function Footer({ siteName, tagline }: FooterProps) {
  return (
    <footer className="bg-ink text-gray-300">
      <div className="container px-4 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2 md:col-span-1">
          <h3 className="font-serif text-white text-lg mb-4">{siteName}</h3>
          <p className="text-sm text-gray-400">{tagline}</p>
          <p className="text-xs text-gray-500 mt-2 italic">古老道家智慧 照进现代生活</p>
        </div>
        <div>
          <h4 className="font-serif text-white mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-gold transition-colors">Rituals</Link></li>
            <li><Link href="/services/karmic-release" className="hover:text-gold transition-colors">Karmic Release</Link></li>
            <li><Link href="/divination" className="hover:text-gold transition-colors">Divination</Link></li>
            <li><Link href="/divination/qi-men-reading" className="hover:text-gold transition-colors">Qi Men Reading</Link></li>
            <li><Link href="/feng-shui" className="hover:text-gold transition-colors">Feng Shui</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-white mb-4">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/shop" className="hover:text-gold transition-colors">All Products</Link></li>
            <li><Link href="/shop/qi-men-deck" className="hover:text-gold transition-colors">Qi Men Card Deck</Link></li>
            <li><Link href="/shop/talisman-decor" className="hover:text-gold transition-colors">Talisman Decor</Link></li>
            <li><Link href="/talismans" className="hover:text-gold transition-colors">Talismans</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-white mb-4">Learn</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/learn" className="hover:text-gold transition-colors">Explore</Link></li>
            <li><Link href="/culture" className="hover:text-gold transition-colors">Taoist Culture</Link></li>
            <li><Link href="/culture/beginners" className="hover:text-gold transition-colors">For Beginners</Link></li>
            <li><Link href="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
            <li><Link href="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-white mb-4">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/community" className="hover:text-gold transition-colors">Community</Link></li>
            <li><Link href="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            <li><a href="/api/redirect" className="hover:text-gold transition-colors">WhatsApp</a></li>
            <li><Link href="/privacy" className="hover:text-gold transition-colors">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-gold transition-colors">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} {siteName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
