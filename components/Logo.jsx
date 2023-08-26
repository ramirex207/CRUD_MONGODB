import React from 'react'

function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
      <polygon
        points="16 16 48 16 32 48"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="1"
      />
      <text
        x="35"
        y="24"
        textAnchor="middle"
        fill="#164B60"
        fontFamily="Arial, sans-serif"
        fontSize="24"
        fontWeight="bold"
      >
        C
      </text>
      <text
        x="28"
        y="40"
        textAnchor="middle"
        fill="#1b6b93"
        fontFamily="Arial, sans-serif"
        fontSize="24"
        fontWeight="bold"
      >
        N
      </text>
    </svg>
  )
}

export default Logo