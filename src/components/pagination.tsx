import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages: (number | '...')[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...');
    }
  }

  return (
    <nav className="flex items-center justify-center gap-1 py-12" aria-label="Pagination">
      {currentPage > 1 && (
        <Link href={`${basePath}?page=${currentPage - 1}`} className="px-3 py-2 text-sm text-gray-500 hover:text-accent">
          ← Prev
        </Link>
      )}
      {pages.map((p, i) =>
        p === '...' ? (
          <span key={`dots-${i}`} className="px-2 text-gray-400">…</span>
        ) : (
          <Link
            key={p}
            href={`${basePath}?page=${p}`}
            className={`px-3 py-2 text-sm rounded-sm ${
              p === currentPage
                ? 'bg-gold text-white font-semibold'
                : 'text-gray-500 hover:text-accent'
            }`}
          >
            {p}
          </Link>
        )
      )}
      {currentPage < totalPages && (
        <Link href={`${basePath}?page=${currentPage + 1}`} className="px-3 py-2 text-sm text-gray-500 hover:text-accent">
          Next →
        </Link>
      )}
    </nav>
  );
}
