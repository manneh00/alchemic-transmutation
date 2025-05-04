type SymbolType = {
  stroke: Element;
  className: string;
};
// components/FireSymbol.tsx
export function FireSymbol({ stroke, className = "" }: SymbolType) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={stroke}
      strokeWidth="6"
      className={`${className}`}
    >
      <polygon points="50,15 90,85 10,85" />
    </svg>
  );
}

// components/WaterSymbol.tsx
export function WaterSymbol({ stroke, className = "" }: SymbolType) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={stroke}
      strokeWidth="6"
      className={`${className}`}
    >
      <polygon points="50,85 90,15 10,15" />
    </svg>
  );
}

// components/AirSymbol.tsx
export function AirSymbol({ stroke, className = "" }: SymbolType) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={stroke}
      strokeWidth="6"
      className={`${className}`}
    >
      <polygon points="50,15 90,85 10,85" />
      <line x1="20" y1="50" x2="80" y2="50" stroke={stroke} strokeWidth="6" />
    </svg>
  );
}

// components/EarthSymbol.tsx
export function EarthSymbol({ stroke, className = "" }: SymbolType) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={stroke}
      strokeWidth="6"
      className={`${className}`}
    >
      <polygon points="50,85 90,15 10,15" />
      <line x1="20" y1="50" x2="80" y2="50" stroke={stroke} strokeWidth="6" />
    </svg>
  );
}

export type Element = "fire" | "water" | "air" | "earth";

const elementColors: Record<Element, string> = {
  fire: "#ff4500",
  water: "#1e90ff",
  air: "#e0f7fa",
  earth: "#a47551",
};

interface ElementSymbolsProps {
  element: Element;
  className?: string;
}

export function ElementSymbols({
  element,
  className = "",
}: ElementSymbolsProps) {
  const stroke = elementColors[element] as Element;

  const symbolProps: SymbolType = {
    stroke,
    className,
  };

  switch (element) {
    case "fire":
      return <FireSymbol {...symbolProps} />;
    case "water":
      return <WaterSymbol {...symbolProps} />;
    case "air":
      return <AirSymbol {...symbolProps} />;
    case "earth":
      return <EarthSymbol {...symbolProps} />;
    default:
      return null;
  }
}
