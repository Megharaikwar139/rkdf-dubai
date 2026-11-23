import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

interface SpringCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const SpringCounter: React.FC<SpringCounterProps> = ({
  value,
  duration = 1.2,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const shouldReduceMotion = useReducedMotion();
  
  // Real number exists immediately in initial state for SEO/accessibility
  const [displayValue, setDisplayValue] = useState<number>(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      // Start from 60% of real value to avoid long counting from zero
      const startValue = Math.floor(value * 0.65);
      const startTime = performance.now();
      const totalDuration = duration * 1000;

      const updateCounter = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / totalDuration, 1);
        
        // Ease-out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(startValue + (value - startValue) * easeOut);
        
        setDisplayValue(current);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          setDisplayValue(value);
        }
      };

      requestAnimationFrame(updateCounter);
    }
  }, [isInView, value, duration, shouldReduceMotion]);

  return (
    <span
      ref={ref}
      className={`tabular-nums font-semibold tracking-tight ${className}`}
      data-numeral={value}
      aria-label={`${prefix}${value.toLocaleString()}${suffix}`}
    >
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};
