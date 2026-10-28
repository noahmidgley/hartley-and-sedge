const shared = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ConsultationIcon() {
  return (
    <svg {...shared}>
      <circle cx="10" cy="10" r="6" />
      <line x1="14.5" y1="14.5" x2="20" y2="20" />
    </svg>
  );
}

export function MasterplanIcon() {
  return (
    <svg {...shared}>
      <path d="M4 5l6-1.5L15 5l5-1.5v16L15 21l-5-1.5L4 21V5z" />
      <path d="M10 3.5v16M15 5v16" />
    </svg>
  );
}

export function PlantingIcon() {
  return (
    <svg {...shared}>
      <line x1="12" y1="20" x2="12" y2="11" />
      <circle cx="12" cy="7.5" r="3" />
      <circle cx="6.5" cy="12" r="2" />
      <circle cx="17.5" cy="12" r="2" />
    </svg>
  );
}

export function BuildIcon() {
  return (
    <svg {...shared}>
      <path d="M12 3l5 5-7 7-5-5z" />
      <line x1="10" y1="15" x2="4.5" y2="20.5" />
    </svg>
  );
}

export function AftercareIcon() {
  return (
    <svg {...shared}>
      <rect x="4" y="10" width="10" height="7" rx="1" />
      <line x1="14" y1="12" x2="20.5" y2="7.5" />
      <path d="M7 10V7a2 2 0 0 1 2-2h1" />
    </svg>
  );
}
