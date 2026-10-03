//app/components/SocialLinks.tsx
import { Linkedin, Facebook, Instagram } from 'lucide-react';

export const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/pynex.pk/',
    icon: Linkedin,
    brand: 'linkedin',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1KLfm9ApiW/?mibextid=wwXIfr',
    icon: Facebook,
    brand: 'facebook',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/pynex.tech',
    icon: Instagram,
    brand: 'instagram',
  },
];

export default function SocialLinks() {
  const available = socialLinks.filter((l) => l.href);
  if (!available.length) return null;

  return (
    <div className="social-links" aria-label="Social links">
      {available.map(({ label, href, icon: Icon, brand }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className={`social-link social-link-${brand}`}
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  );
}