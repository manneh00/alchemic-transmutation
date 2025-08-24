"use client";
import { motion } from "motion/react";
import { useEffect, useRef, useLayoutEffect, useState } from "react";
import { animate } from "motion";
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 2.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};
// Middle Pillar animations (Lightning Flash)
const bolt = {
  hidden: { strokeDashoffset: 200 },
};

const ignite = {
  hidden: { opacity: 0, scale: 0.9, filter: "brightness(0.8)" },
  visible: (delaySec: number) => ({
    opacity: 1,
    scale: [1, 1.2, 1],
    filter: ["brightness(1)", "brightness(1.4)", "brightness(1)"],
    transition: { delay: delaySec, duration: 0.5, ease: "easeOut" },
  }),
};
// components/Tetragrammaton.tsx
export default function Tetragrammaton({ className = "" }) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className={`absolute inset-0 m-auto w-full h-full opacity-30 pointer-events-none animate-pulse-slow glow-pulse ${className}`}
      fill="none"
      stroke="url(#gold)"
      filter="url(#outer-glow)"
      initial="hidden"
      animate="visible"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="gold" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF3C0" />
          <stop offset="60%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFB100" />
        </radialGradient>
        <filter id="outer-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <motion.circle
        cx="100"
        cy="100"
        r="72"
        strokeWidth="0.5"
        variants={draw}
        custom={1}
      />
      <motion.circle
        cx="100"
        cy="100"
        r="70"
        strokeWidth="0.4"
        variants={draw}
        custom={2}
      />

      {/* Hebrew Letters for Yod-Heh-Vav-Heh */}
      <text
        x="100"
        y="88"
        textAnchor="middle"
        fontSize="7"
        fill="#FFB100"
        fontFamily="serif"
        className="levitate"
        paintOrder="stroke"
        stroke="#000"
        strokeWidth="0.15"
      >
        י
      </text>
      <text
        x="85"
        y="103"
        textAnchor="middle"
        fontSize="7"
        fill="#FFB100"
        fontFamily="serif"
        className="levitate"
        paintOrder="stroke"
        stroke="#000"
        strokeWidth="0.15"
      >
        ה
      </text>
      <text
        x="115"
        y="103"
        textAnchor="middle"
        fontSize="7"
        fill="#FFB100"
        fontFamily="serif"
        className="levitate"
        paintOrder="stroke"
        stroke="#000"
        strokeWidth="0.15"
      >
        ו
      </text>
      <motion.text
        x="100"
        y="118"
        textAnchor="middle"
        fontSize="7"
        fill="#FFB100"
        fontFamily="serif"
        className="levitate"
        paintOrder="stroke"
        stroke="#000"
        strokeWidth="0.15"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        ה
      </motion.text>
      {/* Pentagram scaled to inner circle */}
      <motion.polygon
        points="100,30.5 59,156 166,78 34,78 141,156"
        strokeWidth="0.4"
        fill="none"
        variants={draw}
        custom={3}
      />

      {/* Spirit Symbol - Dot in Circle */}
      <motion.g
        transform="translate(95, 55) scale(0.5)"
        variants={draw}
        custom={7}
      >
        <motion.circle
          cx="10"
          cy="10"
          r="9"
          stroke="#FFB100"
          strokeWidth="0.4"
          fill="none"
          variants={draw}
          custom={7}
        />
        <motion.circle
          cx="10"
          cy="10"
          r="1"
          fill="#FFB100"
          strokeWidth="0.4"
          variants={draw}
          custom={7}
        />
      </motion.g>

      {/* Water */}
      <motion.polygon
        points="143,91 149,80 137,80"
        stroke="#FFB100"
        strokeWidth="0.4"
        fill="none"
        variants={draw}
        custom={4}
      />

      {/* Air */}
      <motion.polygon
        points="62,80 68,91 56,91"
        stroke="#FFB100"
        strokeWidth="0.4"
        fill="none"
        variants={draw}
        custom={5}
      />
      <motion.line
        x1="58"
        y1="83"
        x2="66"
        y2="83"
        stroke="#FFB100"
        strokeWidth="0.4"
        variants={draw}
        custom={5}
      />

      {/* Earth */}
      <motion.polygon
        points="76,141 82,129 70,129"
        stroke="#FFB100"
        strokeWidth="0.4"
        fill="none"
        variants={draw}
        custom={6}
      />
      <motion.line
        x1="72"
        y1="138"
        x2="80"
        y2="138"
        stroke="#FFB100"
        strokeWidth="0.4"
        variants={draw}
        custom={6}
      />

      {/* Fire */}
      <motion.polygon
        points="127,126 133,138 121,138"
        stroke="#FFB100"
        strokeWidth="0.4"
        fill="none"
        variants={draw}
        custom={7}
      />
    </motion.svg>
  );
}

export function ElementalLettersLine() {
  const lineRef = useRef<SVGLineElement | null>(null);
  const ascendRef = useRef<SVGLineElement | null>(null);
  const yodRef = useRef<SVGTextElement | null>(null);
  const hehTopRef = useRef<SVGTextElement | null>(null);
  const vavRef = useRef<SVGTextElement | null>(null);
  const hehBottomRef = useRef<SVGTextElement | null>(null);

  const [dyOffsets, setDyOffsets] = useState({
    yod: 0,
    hehTop: 0,
    vav: 0,
    hehBottom: 0,
  });

  useLayoutEffect(() => {
    const targets = { yod: 55, hehTop: 95, vav: 135, hehBottom: 175 };

    const computeOffset = (el: SVGTextElement | null, targetY: number) => {
      if (!el) return 0;
      const box = el.getBBox();
      const centerY = box.y + box.height / 2;
      return targetY - centerY;
    };

    const id = requestAnimationFrame(() => {
      setDyOffsets({
        yod: computeOffset(yodRef.current, targets.yod),
        hehTop: computeOffset(hehTopRef.current, targets.hehTop),
        vav: computeOffset(vavRef.current, targets.vav),
        hehBottom: computeOffset(hehBottomRef.current, targets.hehBottom),
      });
    });
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (!lineRef.current || !ascendRef.current) return;

    const downEl = lineRef.current;
    const upEl = ascendRef.current;

    const run = async () => {
      // Descend: draw from top to bottom on the first line
      await animate(
        downEl,
        { strokeDashoffset: 0 },
        { duration: 2, ease: "easeInOut" }
      );

      // Swap: hide down line, show up line, ensure up line is reset to hidden
      downEl.setAttribute("opacity", "0");
      upEl.setAttribute("opacity", "1");
      upEl.setAttribute("stroke-dashoffset", "200");

      // Ascend: draw from bottom to top by reversing the path direction (second line y1/y2 swapped)
      await animate(
        upEl,
        { strokeDashoffset: 0 },
        { duration: 2, ease: "easeInOut" }
      );

      await animate(upEl, { opacity: 0 }, { duration: 0 });
    };

    run();
  }, []);

  return (
    <div className="grid w-full min-h-screen place-items-center">
      <motion.svg
        viewBox="0 0 200 200"
        className="block w-48 h-1/2"
        fill="none"
        initial="hidden"
        animate="visible"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <radialGradient id="gold" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF3C0" />
            <stop offset="60%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFB100" />
          </radialGradient>
          <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Lightning group (rendered before letters so it sits behind) */}
        <g id="lightning" opacity="0.6">
          {/* Lightning column (descend) */}
          <motion.line
            x1="100"
            y1="40"
            x2="101"
            y2="180"
            stroke="url(#gold)"
            strokeWidth="1.2"
            strokeDasharray="200"
            strokeDashoffset="200"
            variants={bolt}
            initial="hidden"
            id="lightning-line"
            ref={lineRef}
            inherit={false}
            filter="url(#soft)"
            custom={0}
            strokeOpacity="0.5"
          />

          {/* Lightning column (ascend) - reversed direction to draw bottom → top */}
          <motion.line
            x1="101"
            y1="200"
            x2="100"
            y2="0"
            stroke="url(#gold)"
            strokeWidth="1.2"
            strokeDasharray="200"
            strokeDashoffset="200"
            variants={bolt}
            initial="hidden"
            id="lightning-line-ascend"
            ref={ascendRef}
            opacity="0"
            inherit={false}
            filter="url(#soft)"
            custom={0}
            strokeOpacity="0.5"
          />
        </g>

        {/* Letters group (rendered after lightning so it sits on top) */}
        <g id="letters">
          {/* Letters: י (head), ה (shoulders/arms), ו (core), ה (legs) */}
          <motion.text
            x="100"
            y="55"
            height="10"
            dy={dyOffsets.yod}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="30"
            fontFamily="serif"
            fill="#FFB100"
            paintOrder="stroke"
            stroke="#000"
            strokeWidth="0.15"
            variants={ignite}
            custom={0.25}
            ref={yodRef}
          >
            י
          </motion.text>

          <motion.text
            x="100"
            y="95"
            height="10"
            dy={dyOffsets.hehTop}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="30"
            fontFamily="serif"
            fill="#FFB100"
            paintOrder="stroke"
            stroke="#000"
            strokeWidth="0.15"
            variants={ignite}
            custom={0.5}
            ref={hehTopRef}
          >
            ה
          </motion.text>

          <motion.text
            x="100"
            y="135"
            height="10"
            dy={dyOffsets.vav}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="30"
            fontFamily="serif"
            fill="#FFB100"
            paintOrder="stroke"
            stroke="#000"
            strokeWidth="0.15"
            variants={ignite}
            custom={0.75}
            ref={vavRef}
          >
            ו
          </motion.text>

          <motion.text
            x="100"
            y="175"
            height="10"
            dy={dyOffsets.hehBottom}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="30"
            fontFamily="serif"
            fill="#FFB100"
            paintOrder="stroke"
            stroke="#000"
            strokeWidth="0.15"
            variants={ignite}
            custom={1}
            ref={hehBottomRef}
          >
            ה
          </motion.text>
        </g>

        {/* Sealing halo after ascent */}
        <motion.circle
          cx="100"
          cy="55"
          r="0.5"
          stroke="url(#gold)"
          strokeWidth="0.01"
          fill="none"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: [1, 100, 25], opacity: [0.6, 1] }}
          transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
          filter="url(#soft)"
        />
        <motion.circle
          cx="100"
          cy="95"
          r="0.5"
          stroke="url(#gold)"
          strokeWidth="0.01"
          fill="none"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: [1, 100, 25], opacity: [0.6, 1] }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
          filter="url(#soft)"
        />
        <motion.circle
          cx="100"
          cy="135"
          r="0.5"
          stroke="url(#gold)"
          strokeWidth="0.01"
          fill="none"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: [1, 100, 25], opacity: [0.6, 1] }}
          transition={{ delay: 0.75, duration: 0.5, ease: "easeOut" }}
          filter="url(#soft)"
        />
        <motion.circle
          cx="100"
          cy="175"
          r="0.5"
          stroke="url(#gold)"
          strokeWidth="0.01"
          fill="none"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: [1, 100, 25], opacity: [0.6, 1] }}
          transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
          filter="url(#soft)"
        />
      </motion.svg>
    </div>
  );
}
