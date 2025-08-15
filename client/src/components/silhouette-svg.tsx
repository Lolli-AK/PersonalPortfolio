export default function SilhouetteSVG({ className = "w-96 h-96" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.3"/>
        </filter>
      </defs>
      
      {/* Boy's head silhouette in side profile facing right */}
      <g fill="#000000" filter="url(#shadow)">
        {/* Main head shape */}
        <circle cx="180" cy="120" r="80" />
        
        {/* Forehead and hair line */}
        <ellipse cx="170" cy="80" rx="70" ry="40" />
        
        {/* Nose protruding */}
        <ellipse cx="250" cy="120" rx="12" ry="20" />
        
        {/* Chin area */}
        <ellipse cx="190" cy="180" rx="45" ry="35" />
        
        {/* Neck */}
        <rect x="170" y="200" width="40" height="150" rx="20" />
        
        {/* Back of head curve */}
        <ellipse cx="120" cy="120" rx="40" ry="80" />
      </g>
    </svg>
  );
}