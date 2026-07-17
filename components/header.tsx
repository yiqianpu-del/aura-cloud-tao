'use client';
import Link from 'next/link';
import { useState } from 'react';
import { siteConfig, navigation } from '@/data/site-config';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-cream/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-accent"></span>
          <span className="font-serif font-bold text-lg hidden sm:block">{siteConfig.name}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-gray-700 hover:text-accent transition-colors uppercase tracking-wider">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="/api/redirect" className="btn btn-gold btn-sm hidden md:inline-flex">
            Book on WhatsApp
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-cream px-4 py-4 space-y-3">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-gray-700 hover:text-accent uppercase tracking-wider">
              {item.label}
            </Link>
          ))}
          <a href="/api/redirect" className="btn btn-gold w-full text-center mt-4">Book on WhatsApp</a>
        </div>
      )}
    </header>
  );
}
