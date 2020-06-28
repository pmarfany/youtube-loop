import React from 'react';
import './style.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  iconPosition?: 'before' | 'after';
}

const Button: React.FC<ButtonProps> = ({ icon, iconPosition, children, className, ...props }) => {
  if ( icon && !iconPosition ) { throw new Error('Must specify both "iconPosition" and "icon" if one of them are included!'); }

  return (
    <button className={`button flex-center ${className}`} {...props}>
      {iconPosition === 'before' && <span className="button-icon mr-md">{icon}</span>}
      <span className="button-label">{ children }</span>
      {iconPosition === 'after' && <span className="button-icon ml-md">{icon}</span>}
    </button>
  );
};

export { Button };
