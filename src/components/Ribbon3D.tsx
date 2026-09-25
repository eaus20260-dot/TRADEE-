import React from 'react';

interface Ribbon3DProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Ribbon3D: React.FC<Ribbon3DProps> = ({ className = '', size = 'md' }) => {
  // Scaled logo background 33% bigger with clean non-blurred high-contrast text backing
  const dimensions = {
    sm: { width: 213, height: 106, textClass: 'text-[12px]', iconSize: 12 },
    md: { width: 346, height: 173, textClass: 'text-[17px]', iconSize: 17 },
    lg: { width: 466, height: 233, textClass: 'text-[24px] sm:text-[26px]', iconSize: 24 }
  }[size];

  return (
    <div className={`relative flex items-center justify-center select-none pointer-events-none max-w-full ${className}`}>
      
      {/* Original Ribbon SVG - Scaled 33% bigger */}
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 280 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-[0_10px_25px_rgba(139,92,246,0.35)] max-w-full h-auto"
      >
        <defs>
          <linearGradient id="ribbonTop" x1="260" y1="20" x2="20" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#A7F3D0" />
            <stop offset="25%" stopColor="#67E8F9" />
            <stop offset="60%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#C084FC" />
          </linearGradient>

          <linearGradient id="ribbonUnder" x1="240" y1="40" x2="40" y2="130" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0891B2" />
            <stop offset="35%" stopColor="#4F46E5" />
            <stop offset="75%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#581C87" />
          </linearGradient>

          <linearGradient id="ribbonHighlight" x1="140" y1="20" x2="140" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <ellipse cx="140" cy="70" rx="100" ry="40" fill="#8B5CF6" opacity="0.18" filter="url(#glow)" />

        <path
          d="M 60,95 C 90,115 130,110 160,85 C 190,60 220,55 250,65 L 245,80 C 215,70 185,75 155,100 C 125,125 85,128 55,108 Z"
          fill="url(#ribbonUnder)"
          opacity="0.9"
        />
        <path
          d="M 30,100 C 45,115 75,110 105,80 C 135,50 170,40 210,60 C 235,72 250,68 260,52 C 265,44 260,35 245,32 C 220,28 180,42 145,72 C 110,102 75,105 45,88 C 35,82 25,88 30,100 Z"
          fill="url(#ribbonTop)"
        />
        <path
          d="M 35,94 C 55,104 85,100 115,72 C 150,42 190,32 230,36 C 248,38 256,43 258,48 C 255,42 245,36 230,34 C 190,30 150,40 115,70 C 85,96 55,100 35,94 Z"
          fill="url(#ribbonHighlight)"
        />
        <path
          d="M 120,78 C 145,55 180,48 215,64 C 205,58 175,52 140,75 C 115,92 90,96 70,90 C 85,93 105,90 120,78 Z"
          fill="#FFFFFF"
          opacity="0.4"
        />
      </svg>

      {/* Brand Overlay - Enlarged with 10% more opaqueness backing to avoid background conflicts */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        
        {/* Semi-opaque backdrop pill avoiding conflict with ribbon gradient behind the wording (no blur) */}
        <div className="px-4 py-1.5 rounded-full bg-black/55 border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.85)]">
          <div className={`flex items-center gap-2 font-bold tracking-wider drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)] whitespace-nowrap ${dimensions.textClass}`}>
            
            {/* Gradient text (White to subtle amber) */}
            <span className="font-display bg-gradient-to-b from-white to-amber-100 bg-clip-text text-transparent">
              TRADEE
            </span>
            
            <span className="inline-flex items-center justify-center text-amber-400">
              <svg 
                width={dimensions.iconSize} 
                height={dimensions.iconSize} 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="animate-[spin_4s_linear_infinite]"
              >
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" 
                />
              </svg>
            </span>
            
            {/* Gradient text (White to subtle amber) */}
            <span className="font-display bg-gradient-to-b from-white to-amber-100 bg-clip-text text-transparent">
              SOLUTIONS
            </span>
            
          </div>
        </div>
      </div>

    </div>
  );
};
