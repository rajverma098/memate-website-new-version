"use client";

import { useState } from "react";
import "./Tabs.css";

export default function Tabs({ tabs, defaultTab }) {
  const [activeTab, setActiveTab] = useState(
    defaultTab || tabs[0].id
  );

  return (
    <div className="tabs">
      <div className="tabs-header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${
              activeTab === tab.id ? "active" : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
            onPointerEnter={() => tab.Component?.preload?.()}
            onFocus={() => tab.Component?.preload?.()}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tabs-content">
        {(() => {
          const ActiveTab = tabs.find((tab) => tab.id === activeTab)?.Component;
          return ActiveTab ? <ActiveTab /> : null;
        })()}
      </div>
    </div>
  );
}