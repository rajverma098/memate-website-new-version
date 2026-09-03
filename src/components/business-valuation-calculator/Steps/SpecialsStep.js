"use client";

import { useState, useEffect } from "react";

export default function SpecialsStep({ form, update }) {
  if (!form) return null;

  const RangeSlider = ({ title, field, leftText, rightText }) => {
    const [localValue, setLocalValue] = useState(form[field] ?? 0);

    useEffect(() => {
      setLocalValue(form[field] ?? 0);
    }, [form[field]]);

  const handleChange = (e) => {
  const value = Number(e.target.value);
  setLocalValue(value); // only update local state
};

const commitValue = () => {
  update(field, localValue); // update parent after drag ends
};

    return (
      <div className="slider-box">
        <h4>{title}</h4>
<input
  type="range"
  min="0"
  max="100"
  value={localValue}
  onChange={handleChange}
  onMouseUp={commitValue}   // desktop
  onTouchEnd={commitValue}  // mobile
  className="exact-range"
/>

        <div className="slider-labels">
          <span>{leftText}</span>
          <span>{rightText}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="specials-grid">
      <RangeSlider
        title="Revenue type"
        field="revenueType"
        leftText="Mostly repeat"
        rightText="Mostly one-off"
      />

      <RangeSlider
        title="Customer concentration"
        field="customerConcentration"
        leftText="Many small customers"
        rightText="Few large customers"
      />

      <RangeSlider
        title="Who drives the sales?"
        field="salesDriver"
        leftText="Team / systems driven"
        rightText="Mostly owner driven"
      />

      <RangeSlider
        title="Business records & history"
        field="recordsHistory"
        leftText="Fully documented"
        rightText="Mostly in my head"
      />
    </div>
  );
}