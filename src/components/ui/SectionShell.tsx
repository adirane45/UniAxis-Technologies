import { ReactNode } from 'react';

interface SectionShellProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionShell({ id, children, className = '' }: SectionShellProps) {
  return (
    <section id={id} className={`px-4 sm:px-6 lg:px-8 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
