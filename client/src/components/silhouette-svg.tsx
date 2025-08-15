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
      
      {/* Main silhouette profile facing right */}
      <path
        d="M80 120C80 80 110 50 150 50C180 50 200 60 210 80C215 90 218 100 220 120C225 140 230 160 235 180C240 200 245 220 250 240C255 260 260 280 265 300C270 320 275 340 280 360C285 370 290 375 300 375L320 375C330 375 340 370 350 360C360 350 365 340 365 330C365 320 360 310 350 305C340 300 330 295 320 290C310 285 300 280 295 270C290 260 285 250 280 240C275 230 270 220 265 210C260 200 255 190 250 180C245 170 240 160 235 150C230 140 225 130 220 120C215 110 210 100 205 90C200 80 195 70 185 65C175 60 165 58 155 58C145 58 135 60 125 65C115 70 105 80 100 90C95 100 90 110 85 120"
        fill="#000000"
        filter="url(#shadow)"
      />
      
      {/* Hair detail */}
      <path
        d="M140 55C160 45 180 50 195 60C200 65 202 70 200 75C195 70 185 65 175 62C165 60 155 58 145 58C142 57 141 56 140 55Z"
        fill="#000000"
      />
      
      {/* Neck and shoulder detail */}
      <path
        d="M265 300C270 310 275 320 285 325C295 330 305 332 315 330C325 328 335 325 340 315C345 305 342 295 335 290C328 285 320 282 312 280C304 278 296 277 288 278C280 279 272 282 265 300Z"
        fill="#000000"
      />
    </svg>
  );
}
