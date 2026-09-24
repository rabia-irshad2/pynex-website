import { Linkedin, Facebook, Instagram } from 'lucide-react';

export const socialLinks = [
  { label: 'LinkedIn', href: process.env.NEXT_PUBLIC_LINKEDIN_URL, icon: Linkedin },
  { label: 'Facebook', href: process.env.NEXT_PUBLIC_FACEBOOK_URL, icon: Facebook },
  { label: 'Instagram', href: process.env.NEXT_PUBLIC_INSTAGRAM_URL, icon: Instagram },
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
