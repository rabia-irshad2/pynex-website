import { Linkedin, Facebook, Instagram } from 'lucide-react';

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/pynex.pk/', icon: Linkedin },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1KLfm9ApiW/?mibextid=wwXIfr', icon: Facebook },
  { label: 'Instagram', href: 'https://www.instagram.com/pynex.tech?stkn=NWhhd3R6cXpvdmlt&utm_source=qr', icon: Instagram },
];

export default function SocialLinks() {
  const availableLinks = socialLinks.filter((link) => link.href);
  if (!availableLinks.length) return null;

  return (
    <div className="flex items-center gap-3" aria-label="Social links">
      {availableLinks.map(({ label, href, icon: Icon }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label} className="social-link">
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}