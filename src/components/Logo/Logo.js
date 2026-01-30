import React from "react";

export default function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      {/* Headphones Icon with Q */}
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Headband */}
        <path
          d="M 12 26 Q 12 12, 24 12 Q 36 12, 36 26"
          stroke="#121212"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Left ear cup */}
        <rect
          x="8"
          y="24"
          width="10"
          height="14"
          rx="5"
          fill="#121212"
        />
        
        {/* Right ear cup */}
        <rect
          x="30"
          y="24"
          width="10"
          height="14"
          rx="5"
          fill="#121212"
        />
        
        {/* Q inside left ear cup */}
        <circle
          cx="13"
          cy="31"
          r="3.5"
          fill="none"
          stroke="#34C94B"
          strokeWidth="1.5"
        />
        <line
          x1="15"
          y1="33"
          x2="16.5"
          y2="34.5"
          stroke="#34C94B"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Q tify text */}
      <span style={{
        fontFamily: 'Avenir Next Condensed, -apple-system, sans-serif',
        fontWeight: 600,
        fontSize: '24px',
        lineHeight: '24px',
        letterSpacing: '1px',
        color: '#FFFFFF'
      }}>
        Qtify
      </span>
    </div>
  );
}