import React, { useState } from 'react';
import { Construction, HardHat, AlertTriangle, X } from 'lucide-react';

export const WipBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return null;
  }

  return (
    <aside
      id="wip-banner"
      aria-label="Work in progress notice"
      className="relative z-30 w-full bg-zinc-950/95 border-b border-amber-500/30 backdrop-blur-md shadow-sm"
    >
      {/* Top micro hazard stripe ribbon */}
      <div
        className="w-full h-1"
        style={{
          background:
            'repeating-linear-gradient(45deg, #f59e0b, #f59e0b 8px, #18181b 8px, #18181b 16px)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2.5 flex items-center justify-between gap-3 text-xs sm:text-sm">
        {/* Left Side: Hazard Badges & Notice Text */}
        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
          {/* Subtle Work In Progress Badge with Hazard Stripes */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/15 border border-amber-500/30 text-amber-400 font-semibold tracking-wide uppercase text-[11px] sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            <Construction className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Work in Progress</span>
          </div>

          {/* Descriptive text */}
          <p className="text-zinc-300 font-normal leading-tight">
            <span className="text-zinc-100 font-medium">Website currently under construction:</span>{' '}
            We are putting the final touches on our new platform. Features and content are actively being finalized.
          </p>
        </div>

        {/* Right Side: Optional Close Button */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss banner"
            className="p-1 rounded text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 transition-colors cursor-pointer"
            title="Dismiss notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom micro hazard stripe ribbon for subtle framing */}
      <div
        className="w-full h-0.5 opacity-60"
        style={{
          background:
            'repeating-linear-gradient(-45deg, #f59e0b, #f59e0b 8px, #18181b 8px, #18181b 16px)',
        }}
        aria-hidden="true"
      />
    </aside>
  );
};
