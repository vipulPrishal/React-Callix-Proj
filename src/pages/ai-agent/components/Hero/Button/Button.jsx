import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button as UiButton } from '@/components/ui/button';

const base =
  'group h-11 px-5 rounded-lg inline-flex items-center justify-center text-sm font-medium';
const variants = {
  primary: 'bg-primary hover:bg-primary/90 text-white',
  outline: 'border border-primary/25 text-primary hover:bg-primary/10',
  ghost: 'hover:bg-primary/10 text-primary',
};

const Button = ({
  children,
  variant = 'primary', // 'primary' | 'outline' | 'ghost'
  minWidth = 220, // standard width across the app
  showArrow = false, // toggle animated trailing arrow
  arrowSize = 16, // px
  className = '',
  onClick,
  type = 'button',
}) => {
  return (
    <UiButton
      type={type}
      onClick={onClick}
      variant={variant === 'primary' ? 'default' : 'outline'}
      className={`${base} ${variants[variant]} ${className}`}
      style={{ minWidth }}
    >
      <span className="mr-2">{children}</span>
      {showArrow && (
        <ArrowRight
          className="h-4 w-4 transform transition-transform duration-300 ease-out group-hover:translate-x-2 group-hover:scale-125"
          style={{ width: arrowSize, height: arrowSize }}
        />
      )}
    </UiButton>
  );
};

export default Button;
