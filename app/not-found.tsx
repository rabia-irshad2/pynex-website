import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="not-found-page min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <p className="section-label mb-3">404</p>
      <h1 className="text-4xl font-bold mb-4 text-white">Page not found</h1>
      <p className="text-white/65 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className="btn-primary">
        Back to home
      </Link>
    </section>
  );
}
