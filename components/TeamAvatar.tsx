//app/components/ui/TeamAvatar.tsx
'use client';

import Image from 'next/image';
import SafeImage from '@/components/SafeImage';

export default function TeamAvatar({
  name,
  role,
  photo,
  gradient = 1,
}: {
  name: string;
  role: string;
  photo?: string;
  gradient?: 1 | 2 | 3 | 4;
}) {
  const initials = name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('');

  return (
    <article className="team-profile-card">
      <div className={`team-profile-image team-profile-gradient-${gradient}`}>
        {photo ? (
          <SafeImage
            src={photo}
            alt={`${name}, ${role}`}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
            fallback={<span className="team-avatar-initials">{initials}</span>}
          />
        ) : (
          <span className="team-avatar-initials">{initials}</span>
        )}
      </div>
      <p className="team-profile-name">{name}</p>
      <p className="team-profile-role">{role}</p>
    </article>
  );
}