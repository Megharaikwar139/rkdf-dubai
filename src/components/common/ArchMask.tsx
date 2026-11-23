import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface ArchMaskProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'sm' | 'md' | 'lg' | 'hero' | 'inverted';
  glow?: boolean;
  parallax?: boolean;
  aspectRatio?: string;
}

export const ArchMask: React.FC<ArchMaskProps> = ({
  children,
  className = '',
  variant = 'md',
  glow = false,
  parallax = false,
  aspectRatio,
}) => {
  const shouldReduceMotion = useReducedMotion();

  let radiusClass = 'rounded-[999px_999px_28px_28px]';
  if (variant === 'sm') radiusClass = 'rounded-[999px_999px_18px_18px]';
  if (variant === 'lg') radiusClass = 'rounded-[999px_999px_36px_36px]';
  if (variant === 'hero') radiusClass = 'rounded-[999px_999px_32px_32px]';
  if (variant === 'inverted') radiusClass = 'rounded-[28px_28px_999px_999px]';

  return (
    <div className={`relative isolate ${className}`}>
      {glow && (
        <div
          className="absolute -inset-6 -z-10 bg-apricot/30 rounded-[999px_999px_48px_48px] blur-2xl pointer-events-none transform-gpu"
          aria-hidden="true"
        />
      )}
      <motion.div
        className={`relative overflow-hidden w-full h-full ${radiusClass}`}
        style={aspectRatio ? { aspectRatio } : undefined}
        whileHover={!shouldReduceMotion && parallax ? { scale: 1.02 } : undefined}
        transition={{ type: 'spring', stiffness: 260, damping: 26 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
