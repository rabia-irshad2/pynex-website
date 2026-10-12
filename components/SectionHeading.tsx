import SectionLabel from './SectionLabel';

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  as?: 'h1' | 'h2';
  titleClassName?: string;
  className?: string;
  centered?: boolean;
};

export default function SectionHeading({
  label,
  title,
  description,
  as: Heading = 'h2',
  titleClassName = '',
  className = '',
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${centered ? 'section-heading-centered' : ''} ${className}`.trim()}>
      {label && <SectionLabel>{label}</SectionLabel>}
      <Heading className={titleClassName}>{title}</Heading>
      {description && <p className="section-heading-description">{description}</p>}
    </div>
  );
}
