"use client";

export default function ValuationGraph({ valuation, boosted }) {
  const max = boosted + 200000;

  return (
    <div className="graph-box">
      <h3>Projected Business Value Growth</h3>

      <div className="graph-lines">
        <div
          className="line normal"
          style={{ width: `${(valuation / max) * 100}%` }}
        >
          Current Value
        </div>

        <div
          className="line boosted"
          style={{ width: `${(boosted / max) * 100}%` }}
        >
          With MeMate
        </div>
      </div>
    </div>
  );
}
