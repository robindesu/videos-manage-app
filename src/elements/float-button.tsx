import React from 'react';

interface FloatButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const FloatButton: React.FC<FloatButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="shadow-md bg-greenLight active:bg-greenMoving active:border-0 p-4">
      {children}
    </button>
  );
};

export default FloatButton;
