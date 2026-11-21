import { useId, type CSSProperties, type ReactNode } from "react";
import { cn } from "../utils/cn";

export function useSafeId(prefix: string) {
  return prefix + useId().replace(/[^a-zA-Z0-9_-]/g, "");
}

/** Wortmarke „Ikarus bleibt zivil“ – Open Sauce Bold, drei Zeilen. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("wordmark block", className)}>
      <span>Ikarus </span>
      <span>bleibt </span>
      <span>zivil</span>
    </span>
  );
}

export function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <path d="M4 12h15M13 5.5l6.5 6.5-6.5 6.5" />
    </svg>
  );
}

export function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="0.8em"
      height="0.8em"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <path d="M6.5 17.5 17.5 6.5M8 6.5h9.5V16" />
    </svg>
  );
}

type PillProps = {
  href: string;
  children: ReactNode;
  variant?: "red" | "cream";
  external?: boolean;
  className?: string;
};

/** Runder Button wie in der Vorlage: unterstrichen, fett, mit Schatten. */
export function Pill({ href, children, variant = "red", external = false, className }: PillProps) {
  return (
    <a
      href={href}
      className={cn("pill", variant === "cream" && "pill--cream", className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{children}</span>
      {external && (
        <>
          <ExternalIcon />
          <span className="sr-only"> (öffnet in neuem Tab)</span>
        </>
      )}
    </a>
  );
}

type ArrowProps = { className?: string; outline?: boolean; mirrored?: boolean; style?: CSSProperties };

/** Handgeschnittener Pfeil, der auf einen Button zeigt. */
export function Arrow({ className, outline = false, mirrored = false, style }: ArrowProps) {
  const shaft = "M12 15 C 40 5, 71 21, 78 54";
  const head = "97.3,48.8 58.7,59.2 86,84";
  const front = outline ? "var(--color-red)" : "currentColor";
  return (
    <svg
      viewBox="0 0 108 94"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn("arrow", mirrored && "arrow--mirrored", className)}
      style={style}
    >
      {outline && (
        <g stroke="var(--color-cream)" strokeLinecap="round" strokeLinejoin="round">
          <path d={shaft} strokeWidth="19" />
          <polygon points={head} strokeWidth="9" fill="var(--color-cream)" />
        </g>
      )}
      <g stroke={front} strokeLinecap="round" strokeLinejoin="round">
        <path d={shaft} strokeWidth="12" />
        <polygon points={head} strokeWidth="3" fill={front} />
      </g>
    </svg>
  );
}

/** Raster-Explosion (Halbton), reine Deko. */
export function Burst({ className, style }: { className?: string; style?: CSSProperties }) {
  const id = useSafeId("burst");
  const spikes = 13;
  const points = Array.from({ length: spikes * 2 }, (_, i) => {
    const angle = (i / (spikes * 2)) * Math.PI * 2 - Math.PI / 2;
    const outer = 97 - ((i * 37) % 5) * 9;
    const inner = 33 + ((i * 13) % 4) * 4;
    const r = i % 2 === 0 ? outer : inner;
    return `${(100 + Math.cos(angle) * r).toFixed(1)},${(100 + Math.sin(angle) * r).toFixed(1)}`;
  }).join(" ");
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" focusable="false" className={className} style={style}>
      <defs>
        <pattern id={id} width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <circle cx="4.5" cy="4.5" r="3.2" fill="currentColor" />
        </pattern>
      </defs>
      <polygon points={points} fill={`url(#${id})`} />
      <polygon points={points} fill="currentColor" transform="translate(100 100) scale(0.4) translate(-100 -100)" />
    </svg>
  );
}

/**
 * Halbton-Kante zwischen cremefarbenen und roten Flächen.
 * "down": Punkte wachsen nach unten zur roten Fläche, "up": lösen sich nach unten auf.
 */
export function HalftoneEdge({ direction, className }: { direction: "down" | "up"; className?: string }) {
  const id = useSafeId("ht");
  const pitch = 14;
  const rows = 12;
  const step = pitch / 2;
  const height = rows * step;
  const dots: ReactNode[] = [];
  for (let i = 0; i < rows; i++) {
    const t = (i + 0.5) / rows;
    const density = direction === "down" ? t : 1 - t;
    const r = 0.5 + Math.pow(density, 1.2) * pitch * 0.58;
    const cy = i * step + step / 2;
    const xs = i % 2 === 0 ? [0, pitch] : [-pitch / 2, pitch / 2, pitch * 1.5];
    xs.forEach((cx) => dots.push(<circle key={`${i}-${cx}`} cx={cx} cy={cy} r={r.toFixed(2)} />));
  }
  return (
    <svg
      height={height}
      aria-hidden="true"
      focusable="false"
      className={cn("relative z-[1] block w-full", className)}
      style={{ height }}
    >
      <defs>
        <pattern id={id} width={pitch} height={height} patternUnits="userSpaceOnUse">
          <g fill="var(--color-red)">{dots}</g>
        </pattern>
      </defs>
      <rect width="100%" height={height} fill={`url(#${id})`} />
    </svg>
  );
}

/** Runder Stempel: macht klar, dass die Schule nicht hinter der Gruppe steht. */
export function Stamp({ className }: { className?: string }) {
  const id = useSafeId("stamp");
  const r = 72;
  return (
    <div className={cn("stamp", className)} aria-hidden="true">
      <svg viewBox="0 0 200 200" className="stamp-ring" focusable="false">
        <defs>
          <path id={id} d={`M ${100 - r},100 a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 ${-r * 2},0`} />
        </defs>
        <text fill="currentColor" fontSize="17" fontWeight="700" letterSpacing="0.2">
          <textPath href={`#${id}`} textLength={Math.round(2 * Math.PI * r) - 2} lengthAdjust="spacing">
            NICHT DIE SCHULE • NICHT DIE SV •
          </textPath>
        </text>
      </svg>
      <div className="stamp-core">
        <b>FWG</b>
        <i>initiative</i>
      </div>
    </div>
  );
}

/** Ikarus mit Megafon. Das Megafon gehört zum Streik – nur dort einsetzen. */
export function Ikarus({ className, label }: { className?: string; label?: string }) {
  return label ? (
    <span role="img" aria-label={label} className={cn("ikarus", className)} />
  ) : (
    <span aria-hidden="true" className={cn("ikarus", className)} />
  );
}
