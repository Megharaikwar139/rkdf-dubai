import React, { useRef, useState, MouseEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'terracotta' | 'cloud' | 'apricot' | 'sand' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: string;
  ariaLabel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  variant = 'terracotta',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  href,
  ariaLabel,
}) => {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: MouseEvent) => {
    if (shouldReduceMotion || disabled || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // 40px magnetic pull radius
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const distance = Math.hypot(distanceX, distanceY);

    if (distance < 60) {
      setPosition({
        x: distanceX * 0.28,
        y: distanceY * 0.28,
      });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    terracotta: 'bg-terracotta text-white hover:brightness-105 active:brightness-95 shadow-sm shadow-terracotta/20',
    cloud: 'bg-cloud text-ink border border-black/5 hover:bg-sand/40 active:bg-sand/60 shadow-sm',
    apricot: 'bg-apricot text-ink hover:brightness-95 active:brightness-90',
    sand: 'bg-sand text-ink hover:brightness-95 active:brightness-90',
    ghost: 'bg-transparent text-ink hover:bg-black/5',
  };

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 rounded-pill',
    md: 'text-sm px-6 py-3 rounded-pill',
    lg: 'text-base px-8 py-4 rounded-pill font-medium',
  };

  const baseClasses = `inline-flex items-center justify-center font-medium transition-colors select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-focus ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const motionProps = {
    animate: shouldReduceMotion ? undefined : { x: position.x, y: position.y },
    transition: { type: 'spring', stiffness: 260, damping: 26 },
  };

  if (href) {
    return (
      <motion.a
        ref={buttonRef as any}
        href={href}
        className={baseClasses}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        aria-label={ariaLabel}
        {...motionProps}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={buttonRef as any}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel}
      {...motionProps}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};
