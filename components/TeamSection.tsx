//components/TeamSection.tsx
import Reveal from '@/components/Reveal';
import ScrollRevealText from '@/components/ScrollRevealText';
import SafeImage from '@/components/SafeImage';

type Member = {
  name: string;
  role: string;
  bio?: string;
  photo?: string;
};

const GRADIENT_ORDER = [1, 2, 3, 4];

export default function TeamSection({ team }: { team: Member[] }) {
  if (!team.length) return null;

  return (
    <section className="team-section theme-dark-section">
      <div className="container-pynex">
        <div className="team-header">
          <Reveal>
            <p className="section-label">Team</p>
          </Reveal>

          <ScrollRevealText
            as="h2"
            text="The people behind the intelligence."
            className="team-title"
            variant="focus"
          />
        </div>

        <div className="team-grid-v2">
          {team.map((member, i) => {
            const gradient = GRADIENT_ORDER[i % 4];
            const initials = member.name
              .split(' ')
              .map((p) => p[0])
              .slice(0, 2)
              .join('');

            return (
              <Reveal key={member.name} delay={i * 0.1}>
                <article className="team-card-v2">
                  <div
                    className={`team-card-v2-image team-profile-gradient-${gradient}`}
                  >
                    {member.photo ? (
                      <SafeImage
                        src={member.photo}
                        alt={`${member.name}, ${member.role}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover"
                        fallback={
                          <span className="team-avatar-initials">
                            {initials}
                          </span>
                        }
                      />
                    ) : (
                      <span className="team-avatar-initials">{initials}</span>
                    )}
                  </div>

                  <div className="team-card-v2-body">
                    <p className="team-card-v2-name">{member.name}</p>
                    <p className="team-card-v2-role">{member.role}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}