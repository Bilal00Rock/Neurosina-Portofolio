const nodes = [
  { x: 72, y: 64, accent: false },
  { x: 148, y: 42, accent: false },
  { x: 226, y: 78, accent: true },
  { x: 318, y: 36, accent: false },
  { x: 402, y: 88, accent: false },
  { x: 478, y: 52, accent: true },
  { x: 96, y: 168, accent: false },
  { x: 188, y: 196, accent: true },
  { x: 274, y: 148, accent: false },
  { x: 364, y: 190, accent: false },
  { x: 454, y: 156, accent: false },
  { x: 58, y: 268, accent: false },
  { x: 154, y: 292, accent: false },
  { x: 248, y: 250, accent: true },
  { x: 342, y: 286, accent: false },
  { x: 438, y: 248, accent: false },
  { x: 510, y: 300, accent: false },
];

const links: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [0, 6],
  [2, 7],
  [2, 8],
  [4, 9],
  [5, 10],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [6, 11],
  [7, 12],
  [8, 13],
  [9, 14],
  [10, 15],
  [11, 12],
  [13, 14],
  [14, 16],
  [15, 16],
];

function sinePath(amplitude: number, period: number, phase: number, y: number) {
  const points: string[] = [];
  for (let x = 16; x <= 528; x += 8) {
    const py = y + Math.sin(x / period + phase) * amplitude;
    points.push(`${x},${py.toFixed(1)}`);
  }
  return `M ${points.join(" L ")}`;
}

export function HeroViz() {
  return (
    <div className="relative overflow-hidden rounded-lg bg-surface shadow-border">
      <svg
        viewBox="0 0 544 360"
        className="block h-auto w-full"
        role="img"
        aria-label="نمایش جریان داده تا محصول"
      >
        <defs>
          <pattern id="hero-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path
              d="M 24 0 L 0 0 0 24"
              fill="none"
              className="stroke-fg/8"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="544" height="360" className="fill-surface" />
        <rect width="544" height="360" fill="url(#hero-grid)" />

        <path
          d={sinePath(18, 42, 0.2, 118)}
          fill="none"
          className="hero-signal stroke-accent/35"
          strokeWidth="1.25"
        />
        <path
          d={sinePath(12, 36, 1.1, 168)}
          fill="none"
          className="hero-signal stroke-fg/20"
          strokeWidth="1.1"
          style={{ animationDelay: "1.2s" }}
        />
        <path
          d={sinePath(16, 48, 2.2, 214)}
          fill="none"
          className="hero-signal stroke-accent/20"
          strokeWidth="1.1"
          style={{ animationDelay: "2.4s" }}
        />

        {links.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            className="hero-dash stroke-fg/12"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
        ))}

        {nodes.map((node, index) => (
          <circle
            key={`${node.x}-${node.y}`}
            cx={node.x}
            cy={node.y}
            r={node.accent ? 4.2 : 2.6}
            className={
              node.accent
                ? "hero-node fill-accent"
                : "fill-fg/45"
            }
            style={node.accent ? { animationDelay: `${index * 0.18}s` } : undefined}
          />
        ))}
      </svg>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2 rounded-sm bg-bg/90 px-3 py-1.5 text-2xs text-muted shadow-border">
          <span className="size-1.5 rounded-full bg-accent" />
          <span dir="ltr">DATA</span>
          <span className="text-subtle">/</span>
          <span dir="ltr">MODEL</span>
          <span className="text-subtle">/</span>
          <span dir="ltr">PRODUCT</span>
        </div>
        <p className="hidden text-2xs text-muted sm:block">از سیگنال تا سامانه</p>
      </div>
    </div>
  );
}
