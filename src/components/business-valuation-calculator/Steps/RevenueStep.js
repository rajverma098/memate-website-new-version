import React from "react";

export default function RevenueStep({ form, update }) {
  if (!form) return null;

  return (
    <>
      <div className="grid">
        <div>
          <label>Revenue this year</label>
        <input
  type="text"
  value={form.revenue1 ? `$${form.revenue1.toLocaleString()}` : ""}
  placeholder="$0"
  onChange={(e) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    update("revenue1", Number(raw));
  }}
/>

        </div>

        <div>
          <label>Revenue last year</label>
               <input
              type="text"
              value={form.revenue2 ? `$${form.revenue2.toLocaleString()}` : ""}
              placeholder="$0"
              onChange={(e) => {
                const raw = e.target.value.replace(/[^0-9]/g, "");
                update("revenue2", Number(raw));
              }}
            />

        </div>

        <div>
          <label>Revenue two years ago (Optional)</label>
         <input
  type="text"
  value={form.revenue3 ? `$${form.revenue3.toLocaleString()}` : ""}
  placeholder="$0"
  onChange={(e) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    update("revenue3", Number(raw));
  }}
/>
        </div>
        <div>
          <label>Trading years total</label>
      <select
  value={form.tradingYears}
  onChange={(e) => update("tradingYears", Number(e.target.value))}
>
  <option value={0}>Select</option>
  <option value={1}>&lt; 1 year</option>
  <option value={2}>1–2 years</option>
  <option value={5}>3–5 years</option>
  <option value={10}>6–10 years</option>
  <option value={15}>10+ years</option>
</select>

        </div>
      </div>
    <div className="slider">
  <label>Operational Profitability %</label>

  <div className="range-wrapper">
    <input
      type="range"
      min="0"
      max="100"
      value={form.profitability}
      onChange={(e) => update("profitability", Number(e.target.value))}
      className="custom-range"
      style={{
        background: `linear-gradient(to right, #2f3a46 0%, #2f3a46 ${form.profitability}%, #e6e6e6 ${form.profitability}%, #e6e6e6 100%)`
      }}
    />

    <span
      className="profitabilityCount"
      style={{ left: `calc(${form.profitability}% - 15px)` }}
    >
      {form.profitability}%
    </span>
  </div>
</div>
    </>
  );
}
