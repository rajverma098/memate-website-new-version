"use client";

export default function DiagramTooltip({ tooltip, className = "" }) {
  if (!tooltip) return null;

  return (
    <div
      className={`diagram-tooltip ${className}`}
      style={{ left: tooltip.x, top: tooltip.y }}
      role="status"
    >
      <div className="diagram-tooltip__title" style={{ color: tooltip.color }}>
        {tooltip.title}
      </div>
      <div className="diagram-tooltip__description">{tooltip.description}</div>
    </div>
  );
}
