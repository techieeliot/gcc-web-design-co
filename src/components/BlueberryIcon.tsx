'use client';

import React from 'react';
import { MotionDiv } from './ui/motion-components';

interface BlueberryIconProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const BlueberryIcon: React.FC<BlueberryIconProps> = ({
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'text-6xl',
    md: 'text-7xl',
    lg: 'text-8xl',
    xl: 'text-9xl',
  };

  return (
    <MotionDiv
      initial={{ scale: 0.95, rotate: -2 }}
      transition={{
        repeat: Infinity,
        duration: 8,
        ease: 'easeInOut',
      }}
      className={`flex items-center justify-center ${sizeClasses[size]} ${className}`}
    >
      <span className="filter drop-shadow-lg" role="img" aria-label="blueberry">
        🫐
      </span>
    </MotionDiv>
  );
};

export default BlueberryIcon;
