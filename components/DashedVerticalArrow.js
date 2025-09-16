// DashedVerticalArrows.js
import React from "react";

export function DashedUpArrow({ size = 24, color = "black" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeDasharray="4 2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="19" x2="12" y2="5" />          {/* vertical line */}
      <polyline points="5 12 12 5 19 12" />             {/* arrowhead */}
    </svg>
  );
}

export function DashedDownArrow({ width = 230, height=56, color = "black" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeDasharray="4 2"
      // strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="0" x2="12" y2="0" />          {/* vertical line */}
      <polyline points="5 12 12 19 19 12" />           {/* arrowhead */}
    </svg>
  );
}
