"use client";

export default function SummaryCard({ form, valuation, uplift }) {
  const avgRevenue =
    (Number(form.revenue1) +
      Number(form.revenue2) +
      Number(form.revenue3)) / 3;

  const missingRevenue = avgRevenue === 0;

  return (
    <div className="summary-card">
      <div className="summary-top">
        <p>Estimated business value today</p>
        <h2>${valuation.toLocaleString()}</h2>
      </div>

      <div className="summary-breakdown">
        <h4>Business inputs breakdown</h4>

        <div className="row">
          <span>Average revenue</span>
          <span>${avgRevenue.toLocaleString()}</span>
        </div>

        <div className="row">
          <span>Employees</span>
          <span>{form.employees}</span>
        </div>

        <div className="row">
          <span>Profitability</span>
          <span>{form.profitability}%</span>
        </div>

        <div className="row">
          <span>Industry</span>
          <span>{form.industry || "Not selected"}</span>
        </div>

        <div className="row highlight">
          <span>With MeMate uplift (+12.9%)</span>
          <span>${uplift.toLocaleString()}</span>
        </div>
      </div>

      {missingRevenue && (
        <div className="summary-warning">
          <strong>⚠ You don’t have enough revenue data</strong>
          <p>
            Please enter revenue figures to calculate a realistic valuation.
          </p>
        </div>
      )}
    </div>
  );
}
