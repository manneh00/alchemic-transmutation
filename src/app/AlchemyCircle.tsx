// components/AlchemyCircle.tsx
export default function AlchemyCircle({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute inset-0 m-auto w-full h-full opacity-10 pointer-events-none animate-pulse-slow ${className}`}
      fill="none"
      stroke="white"
    >
      <circle cx="100" cy="100" r="90" strokeWidth="0.3" />
      <circle cx="100" cy="100" r="70" strokeWidth="0.3" />
      <circle cx="100" cy="100" r="50" strokeWidth="0.3" />
      <polygon points="100,10 190,190 10,190" strokeWidth="0.3" />
      <line x1="10" y1="100" x2="190" y2="100" strokeWidth="0.3" />
      <line x1="100" y1="10" x2="100" y2="190" strokeWidth="0.3" />
      <line x1="30" y1="30" x2="170" y2="170" strokeWidth="0.3" />
      <line x1="170" y1="30" x2="30" y2="170" strokeWidth="0.3" />
    </svg>
  );
}

// Add to your global CSS or Tailwind config:
// .animate-pulse-slow {
//   @apply animate-[pulse_4s_ease-in-out_infinite];
// }

// Or use this in your tailwind.config.js
// extend: {
//   animation: {
//     'pulse-slow': 'pulse 4s ease-in-out infinite',
//   }
// }
