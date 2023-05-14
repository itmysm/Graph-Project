import React, { useState } from 'react';

function NBtn({ custom, size, children, ...props }) {
  const [btnActive, setBtnActive] = useState(false)
  let sizeClasses = '';
  switch (size) {
    case 'sm':
      sizeClasses = 'py-1 px-2';
      break;
    case 'md':
      sizeClasses = 'py-2.5 px-4';
      break;
    case 'lg':
      sizeClasses = 'py-4 px-6';
      break;
    default:
      sizeClasses = 'py-2 px-4';
  }

  const handleMouseLeave = () => {
    setBtnActive(false);
  };

  const handleMouseUp = () => {
    setBtnActive(false);
  };

  const handleMouseDown = () => {
    setBtnActive(true);
  };

  return (
    <button
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseDown={handleMouseDown}
      className={`group transition-all duration-300 focus:outline-none ${custom} ${sizeClasses} ${btnActive ? 'scale-[.9]' : 'scale-100'}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default NBtn;
