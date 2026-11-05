import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="error-page">
      <p className="section-label">404</p>
      <h1 className="error-title">Page not found</h1>
      <p style={{ opacity: 0.7, marginBottom: '2rem' }}>
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <div className="error-actions">
        <Link href="/" className="btn btn-primary">
          Back to home
        </Link>
        <Link href="/contact" className="btn btn-outline">
          Contact
        </Link>
      </div>
    </section>
  );
}