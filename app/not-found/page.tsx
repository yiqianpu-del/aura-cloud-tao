import Link from 'next/link';
import { siteConfig } from '@/data/site-config';

export default function NotFound() {
  return (
    <div className="section min-h-[60vh] flex items-center">
      <div className="container text-center">
        <p className="text-8xl font-serif font-bold text-gold/30 mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-2">The page you are looking for does not exist or has been moved.</p>
        <p className="text-sm text-gray-500 italic mb-8">此页面不存在</p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="btn btn-gold">Return Home</Link>
          <Link href="/talismans" className="btn btn-outline">Browse Talismans</Link>
        </div>
      </div>
    </div>
  );
}
