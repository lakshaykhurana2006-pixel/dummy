import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showText?: boolean;
  iconSize?: 'sm' | 'md' | 'lg';
}

export default function Logo({
  className = '',
  variant = 'light',
  showText = true,
  iconSize = 'md'
}: LogoProps) {
  const isDark = variant === 'dark';

  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-11 w-11',
    lg: 'h-16 w-16'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`} id="brand-logo">
      {/* Dynamic custom vector gym logo icon */}
      <div 
        className={`${sizeClasses[iconSize]} shrink-0 transition-transform duration-300 hover:scale-105`}
        id="logo-icon-container"
      >
        <svg
          viewBox="0 0 100 100"
          className={`h-full w-full ${isDark ? 'text-white' : 'text-slate-900'}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Circular Swoosh Tracks */}
          {/* Top Arc Swoosh with a pointed end representing movement */}
          <path
            d="M 24,35 A 36,36 0 0,1 76,35 L 73,31 A 38,38 0 0,0 27,31 Z"
            fill="currentColor"
            opacity="0.95"
          />
          {/* Bottom Arc Swoosh with a pointed end matching the top */}
          <path
            d="M 76,65 A 36,36 0 0,1 24,65 L 27,69 A 38,38 0 0,0 73,69 Z"
            fill="currentColor"
            opacity="0.95"
          />

          {/* Barbell Bar (behind the forearm, but details are layered) */}
          <rect 
            x="18" 
            y="48.5" 
            width="64" 
            height="3" 
            rx="1.5" 
            fill="currentColor" 
          />

          {/* Left Weights / Plates */}
          <rect x="25" y="38" width="3" height="24" rx="1" fill="currentColor" />
          <rect x="21" y="41" width="3" height="18" rx="0.8" fill="currentColor" />
          <rect x="15" y="46.5" width="5" height="7" rx="0.5" fill="currentColor" />
          
          {/* Right Weights / Plates */}
          <rect x="72" y="38" width="3" height="24" rx="1" fill="currentColor" />
          <rect x="76" y="41" width="3" height="18" rx="0.8" fill="currentColor" />
          <rect x="80" y="46.5" width="5" height="7" rx="0.5" fill="currentColor" />

          {/* Flexing Muscle Arm Silhouette (Centerpiece) */}
          {/* Vector shape representing a strong, flexing bicep arm */}
          <path
            d="M 39,58 
               C 39,50  44,38  47,28 
               C 49,24  52,24  53,28 
               C 54,31  52,33  51,35 
               C 52,36  54,34  55,36 
               C 56,38  54,40  53,41 
               C 58,41  65,45  64,51 
               C 63,56  50,60  39,58 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col justify-center" id="logo-text-container">
          {/* Wordmark */}
          <span 
            className={`font-sans font-black tracking-wider leading-none ${
              isDark ? 'text-white' : 'text-slate-900'
            } ${iconSize === 'sm' ? 'text-lg' : iconSize === 'lg' ? 'text-3xl' : 'text-2xl'}`}
          >
            FITZEE
          </span>
          {/* Tagline "STAY POWER" echoing the image's "STAY POWER" */}
          <span 
            className={`font-mono text-[9px] font-extrabold tracking-[0.24em] leading-none mt-1.5 ${
              isDark ? 'text-orange-400' : 'text-orange-600'
            }`}
          >
            STAY POWER
          </span>
        </div>
      )}
    </div>
  );
}
