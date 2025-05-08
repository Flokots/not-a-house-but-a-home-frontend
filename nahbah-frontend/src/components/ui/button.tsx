import type { ButtonHTMLAttributes, FC } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gradient' | 'white';
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant = 'gradient',
  ...props
}) => {
  return (
    <button
      className={cn(
        'px-8 py-3 font-fjalla text-lg transition-all duration-300',
        variant === 'gradient' 
          ? 'gradient-border-btn' 
          : 'white-btn',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;