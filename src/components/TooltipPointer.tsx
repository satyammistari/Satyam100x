import React, { useState } from "react";

/**
 * TooltipPointer component
 * Props:
 * - label: string (tooltip text)
 * - direction: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
 * - children: React.ReactNode (trigger element)
 */
const directionMap = {
  "top-left": {
    tooltip: "bottom-10 left-0 origin-bottom-left",
    arrow: "top-full left-4 border-t-8 border-t-black/90 border-x-8 border-x-transparent border-b-0",
  },
  "top-right": {
    tooltip: "bottom-10 right-0 origin-bottom-right",
    arrow: "top-full right-4 border-t-8 border-t-black/90 border-x-8 border-x-transparent border-b-0",
  },
  "bottom-left": {
    tooltip: "top-10 left-0 origin-top-left",
    arrow: "bottom-full left-4 border-b-8 border-b-black/90 border-x-8 border-x-transparent border-t-0",
  },
  "bottom-right": {
    tooltip: "top-10 right-0 origin-top-right",
    arrow: "bottom-full right-4 border-b-8 border-b-black/90 border-x-8 border-x-transparent border-t-0",
  },
};

const TooltipPointer = ({ label, direction = "top-left", children }) => {
  const [show, setShow] = useState(false);
  const dir = directionMap[direction] || directionMap["top-left"];

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      tabIndex={0}
    >
      {children}
      <span
        className={`absolute z-50 flex flex-col items-center transition-opacity duration-200 ${dir.tooltip} ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        style={{ pointerEvents: "none" }}
      >
        <span className="relative">
          <span className="px-4 py-1 rounded-full bg-black/90 text-white font-bold text-sm shadow-lg whitespace-nowrap select-none">
            {label}
          </span>
          <span
            className={`absolute w-0 h-0 ${dir.arrow}`}
            style={{
              borderStyle: "solid",
            }}
          />
        </span>
      </span>
    </span>
  );
};

export default TooltipPointer; 