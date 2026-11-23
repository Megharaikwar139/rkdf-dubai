import React from 'react';

interface BadgeChipProps {
  children: React.ReactNode;
  variant?: 'sand' | 'apricot' | 'sky' | 'mint' | 'cloud' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const BadgeChip: React.FC<BadgeChipProps> = ({
  children,
  variant = 'sand',
  size = 'md',
  className = '',
  icon,
}) => {
  const variantStyles = {
    sand: 'bg-sand text-ink',
    apricot: 'bg-apricot/40 text-ink border border-apricot/60',
    sky: 'bg-sky/50 text-ink border border-sky/70',
    mint: 'bg-mint/50 text-ink border border-mint/70',
    cloud: 'bg-cloud text-ink shadow-sm border border-black/5',
    outline: 'bg-transparent text-ink border border-ink/15',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-1 tracking-wider',
    md: 'text-[13px] px-3.5 py-1.5 tracking-normal',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-pill font-medium select-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="opacity-75">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
