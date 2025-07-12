
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01z"/>
      </svg>
      <span className="font-bold text-xl text-primary">Satyam100x</span>
    </div>
  );
};

export default Logo;
