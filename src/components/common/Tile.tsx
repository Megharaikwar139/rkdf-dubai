import React, { useRef, useState, MouseEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface TileProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: '1' | '2' | '3' | 'full';
  rowSpan?: '1' | '2';
  bg?: 'cloud' | 'sand' | 'apricot' | 'sky' | 'mint' | 'transparent';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  enableTilt?: boolean;
  hoverAccent?: 'apricot' | 'sky' | 'mint' | 'none';
  onClick?: () => void;
  tabIndex?: number;
}

export const Tile: React.FC<TileProps> = ({
  children,
  className = '',
  colSpan = '1',
  rowSpan = '1',
  bg = 'cloud',
  shadow = 'sm',
  enableTilt = true,
  hoverAccent = 'none',
  onClick,
  tabIndex,
}) => {
  const tileRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !enableTilt || !tileRef.current) return;
    const rect = tileRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // 2-3 degrees subtle tilt with 1000px perspective
    const rotateX = ((y - centerY) / centerY) * -2.5;
    const rotateY = ((x - centerX) / centerX) * 2.5;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const colClasses = {
    '1': 'col-span-1',
    '2': 'col-span-1 md:col-span-2',
    '3': 'col-span-1 md:col-span-3',
    'full': 'col-span-full',
  }[colSpan];

  const rowClasses = {
    '1': 'row-span-1',
    '2': 'row-span-1 md:row-span-2',
  }[rowSpan];

  const bgClasses = {
    cloud: 'bg-cloud',
    sand: 'bg-sand',
    apricot: 'bg-apricot/30',
    sky: 'bg-sky/35',
    mint: 'bg-mint/35',
    transparent: 'bg-transparent',
  }[bg];

  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  }[shadow];

  const hoverAccentClasses = {
    none: '',
    apricot: 'hover:bg-apricot/[0.12] transition-colors duration-300',
    sky: 'hover:bg-sky/[0.20] transition-colors duration-300',
    mint: 'hover:bg-mint/[0.20] transition-colors duration-300',
  }[hoverAccent];

  return (
    <motion.div
      ref={tileRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      tabIndex={tabIndex}
      className={`relative rounded-[20px] md:rounded-card p-6 md:p-8 overflow-hidden transform-gpu border border-black/[0.04] ${colClasses} ${rowClasses} ${bgClasses} ${shadowClasses} ${hoverAccentClasses} ${onClick ? 'cursor-pointer' : ''} ${className}`}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      animate={
        shouldReduceMotion || !enableTilt
          ? undefined
          : {
              rotateX: tilt.rotateX,
              rotateY: tilt.rotateY,
            }
      }
      transition={{ type: 'spring', stiffness: 260, damping: 26 }}
    >
      {children}
    </motion.div>
  );
};
