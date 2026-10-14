import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const CustomSelect = ({ options, value, onChange, placeholder = "Select" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const updatePosition = () => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setCoords({
      top: rect.bottom + window.scrollY + 4,
      left: rect.left + window.scrollX,
      width: rect.width,
    });
  };

  const handleToggle = () => {
    if (!isOpen) updatePosition();
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isOpen) return;
    const onScrollOrResize = () => updatePosition();
    window.addEventListener("scroll", onScrollOrResize, true);
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize, true);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [isOpen]);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || placeholder;

  const dropdown = isOpen && mounted
    ? createPortal(
        <div
          ref={dropdownRef}
          className="custom-select-options"
          style={{
            position: "absolute",
            top: coords.top,
            left: coords.left,
            width: coords.width,
          }}
        >
          {options.map((option) => (
            <div
              key={option.value}
              className={`custom-option ${
                value === option.value ? "selected" : ""
              }`}
              onClick={() => handleSelect(option.value)}
            >
              <span>{option.label}</span>
              {value === option.value && (
                <span className="checkmark">✓</span>
              )}
            </div>
          ))}
        </div>,
        document.body
      )
    : null;

  return (
    <div className="custom-select-wrapper">
      <div
        ref={triggerRef}
        className={`custom-select-trigger ${isOpen ? "open" : ""}`}
        onClick={handleToggle}
      >
        <span className={value ? "selected-text" : "placeholder-text"}>
          {selectedLabel}
        </span>
        <svg
          className={`chevron-icon ${isOpen ? "rotate" : ""}`}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>

      {dropdown}
    </div>
  );
};

export default CustomSelect;