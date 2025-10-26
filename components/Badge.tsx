// FILE: components/Badge.tsx
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export default function Badge({ children, variant = 'primary', className = '' }: BadgeProps) {
  const variants = {
    primary: 'bg-accent/10 text-accent border-accent/20',
    secondary: 'bg-panel text-muted border-border',
    accent: 'bg-accent text-white border-accent',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-pill border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
