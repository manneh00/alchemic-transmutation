import { WaterSymbol } from "../components/ElementSymbols";

// components/Tetragrammaton.tsx
export default function Tetragrammaton({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute inset-0 m-auto w-full h-full opacity-30 pointer-events-none animate-pulse-slow glow-pulse ${className}`}
      fill="none"
      stroke="#FFB100"
    >
      <circle cx="100" cy="100" r="72" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="70" strokeWidth="0.4" />

      {/* Hebrew Letters for Yod-Heh-Vav-Heh */}
      <text
        x="100"
        y="88"
        textAnchor="middle"
        fontSize="7"
        fill="white"
        fontFamily="serif"
        className="levitate"
      >
        י
      </text>
      <text
        x="85"
        y="103"
        textAnchor="middle"
        fontSize="7"
        fill="white"
        fontFamily="serif"
        className="levitate"
      >
        ה
      </text>
      <text
        x="115"
        y="103"
        textAnchor="middle"
        fontSize="7"
        fill="white"
        fontFamily="serif"
        className="levitate"
      >
        ו
      </text>
      <text
        x="100"
        y="118"
        textAnchor="middle"
        fontSize="7"
        fill="white"
        fontFamily="serif"
        className="levitate"
      >
        ה
      </text>
      {/* Pentagram scaled to inner circle */}
      <polygon
        points="100,30.5 59,156 166,78 34,78 141,156"
        strokeWidth="0.4"
        fill="none"
      />

      {/* Spirit Symbol - Dot in Circle */}
      <g transform="translate(95, 55) scale(0.5)">
        <circle
          cx="10"
          cy="10"
          r="9"
          stroke="#FFB100"
          strokeWidth="0.4"
          fill="none"
        />
        <circle cx="10" cy="10" r="1" fill="#FFB100" strokeWidth="0.4" />
      </g>

      {/* Water */}
      <polygon
        points="143,91 149,80 137,80"
        stroke="#FFB100"
        strokeWidth="0.4"
        fill="none"
      />

      {/* Air */}
      <polygon
        points="62,80 68,91 56,91"
        stroke="#FFB100"
        strokeWidth="0.4"
        fill="none"
      />
      <line
        x1="58"
        y1="83"
        x2="66"
        y2="83"
        stroke="#FFB100"
        strokeWidth="0.4"
      />

      {/* Earth */}
      <polygon
        points="76,141 82,129 70,129"
        stroke="#FFB100"
        strokeWidth="0.4"
        fill="none"
      />
      <line
        x1="72"
        y1="138"
        x2="80"
        y2="138"
        stroke="#FFB100"
        strokeWidth="0.4"
      />

      {/* Fire */}
      <polygon
        points="127,126 133,138 121,138"
        stroke="#FFB100"
        strokeWidth="0.4"
        fill="none"
      />
    </svg>
  );
}
