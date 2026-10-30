export function TopoLines({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g id="topo-g">
        <path d="M-60 520C180 380 360 600 640 470S1080 300 1500 430" />
      </g>
      {[-200, -160, -120, -80, -40, 40, 80, 120, 160, 200, 240, 280].map((y) => (
        <use key={y} href="#topo-g" y={y} />
      ))}
    </svg>
  );
}
