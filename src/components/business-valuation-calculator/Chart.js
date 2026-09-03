"use client";

import { useState, useEffect, useRef } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
);

function getChartLabels(tradingYears) {
  const years = Number(tradingYears);

  if (!years) return ["Now", "", "", "", "", "Year 5"];

  const labels = [];

  for (let i = 0; i <= years; i++) {
    if (i === 0) {
      labels.push("Now");
    } else if (i === years) {
      labels.push(`Year ${years}`);
    } else {
      labels.push(""); // hide middle labels
    }
  }

  return labels;
}

export default function Chart({ valuation, uplift, tradingYears = 5 }) {
  const [showModal, setShowModal] = useState(false);


  const infoIconRef = useRef(null);
  const drawProgressRef = useRef(1);

  const safeVal = valuation || 0;
  const safeUp = uplift || 0;

  const labels = getChartLabels(tradingYears);

const baseData =
  safeVal === 0
    ? [0,0,0,0,0,0]
    : labels.map((_, i) =>
        Math.round(safeVal * Math.pow(1.05, i))
      );

const upliftData =
  safeUp === 0
    ? [0,0,0,0,0,0]
    : labels.map((_, i) =>
        Math.round(safeUp * Math.pow(1.07, i))
      );

  useEffect(() => {
    drawProgressRef.current = 0;
  }, [tradingYears]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const img = new window.Image();
      img.src =
        "https://memate-website.s3.ap-southeast-2.amazonaws.com/charicon.svg";

      infoIconRef.current = img;
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!CanvasRenderingContext2D.prototype.roundRect) {
        CanvasRenderingContext2D.prototype.roundRect = function (
          x,
          y,
          w,
          h,
          r,
        ) {
          if (w < 2 * r) r = w / 2;
          if (h < 2 * r) r = h / 2;

          this.moveTo(x + r, y);
          this.lineTo(x + w - r, y);
          this.quadraticCurveTo(x + w, y, x + w, y + r);
          this.lineTo(x + w, y + h - r);
          this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
          this.lineTo(x + r, y + h);
          this.quadraticCurveTo(x, y + h, x, y + h - r);
          this.lineTo(x, y + r);
          this.quadraticCurveTo(x, y, x + r, y);

          return this;
        };
      }
    }
  }, []);

  
  const clipPlugin = { 
    id: "smoothClip",
    beforeDatasetsDraw(chart) {
      const progress = drawProgressRef.current;
      if (progress >= 1) return;

      const { ctx, chartArea } = chart;
      if (!chartArea) return;

      const chartWidth = chartArea.right - chartArea.left;
      const clipWidth = Math.min(chartWidth * progress + 80, chartWidth + 100);
      ctx.save();
      ctx.beginPath();
      ctx.rect(
        chartArea.left,
        chartArea.top,
        clipWidth,
        chartArea.bottom - chartArea.top,
      );
      ctx.clip();
      chart._smoothClipActive = true;
    },
    afterDatasetsDraw(chart) {
      if (chart._smoothClipActive) {
        chart.ctx.restore();
        chart._smoothClipActive = false;
      }
    },
  };

  // ✅ Custom Plugin Safe
  const customPlugin = {
    id: "customLabels",
    afterDatasetsDraw(chart) {
      const { ctx } = chart;

      if (chart.data.datasets.length < 2) return;

      const meta = chart.getDatasetMeta(1);
      if (!meta?.data?.length) return;

      const lastPoint = meta.data[meta.data.length - 1];
      const x = lastPoint.x;
      const y = lastPoint.y;

      ctx.save();

      ctx.beginPath();
      ctx.roundRect(x - 100, y - 30, 110, 28, 6);

      ctx.fillStyle = "transparent";
      ctx.strokeStyle = "transparent";

      ctx.fill();
      ctx.stroke();

      ctx.font = "12px Arial";
      ctx.fillStyle = "#000";

      ctx.fillText("With MeMate", x - 110, y - 10);

      const icon = infoIconRef.current;
      if (icon && icon.complete) {
        ctx.drawImage(icon, x - 35, y - 23, 16, 16);
      }

      chart.withMemateBox = {
        x: x - 100,
        y: y - 30,
        w: 110,
        h: 28,
      };

      ctx.restore();
    },
  };
const projectedLabelPlugin = {
  id: "projectedLabel",
  afterDatasetsDraw(chart) {
    const { ctx, chartArea } = chart;

    const data = chart.data.datasets[0].data;

    // ✅ hide label if all values are 0
    const allZero = data.every((v) => v === 0);
    if (allZero) return;

    const meta = chart.getDatasetMeta(0);
    if (!meta?.data?.length) return;

    const lastPoint = meta.data[meta.data.length - 1];

    const text = "Your projected business value";

    ctx.save();

    ctx.font = "12px Arial";
    ctx.fillStyle = "#000";

    const textWidth = ctx.measureText(text).width;

    let x = lastPoint.x + 12;
    let y = lastPoint.y + 60;

    if (x + textWidth > chartArea.right) {
      x = chartArea.right - textWidth - 10;
    }

    if (y > chartArea.bottom) {
      y = chartArea.bottom - 5;
    }

    ctx.fillText(text, x, y);

    ctx.restore();
  },
};
  const data = {
    labels,
    datasets: [
      {
        label: "Projected Value",
  data: baseData,
  borderColor: "black",
  borderWidth: 3,
  tension: 0.45,
  cubicInterpolationMode: "monotone",
  borderCapStyle: "round",
  borderJoinStyle: "round",
  pointRadius: 0,
        // pointRadius: (ctx) =>
        // ctx.dataIndex === labels.length - 1 ? 7 : 0,
        pointBackgroundColor: "transparent",
        pointBorderColor: "transparent",
        pointBorderWidth: 2,
      },
      ...(safeUp === 0
        ? []
        : [
            {
              label: "With MeMate",
  data: upliftData,
  borderWidth: 4,
  tension: 0.45,
  cubicInterpolationMode: "monotone",
  fill: false,
  pointRadius: 0,

              borderColor: (ctx) => {
                const chart = ctx.chart;
                const { ctx: canvasCtx, chartArea } = chart;

                if (!chartArea) return null;

                const gradient = canvasCtx.createLinearGradient(
                  chartArea.left,
                  0,
                  chartArea.right,
                  0,
                );

                gradient.addColorStop(0, "#1ab2ff");
                gradient.addColorStop(0.5, "#ffb258");
                gradient.addColorStop(1, "#1ab2ff");

                return gradient;
              },

              fill: false,

              // pointRadius: (ctx) =>
              // ctx.dataIndex === labels.length - 1 ? 7 : 0,
              pointBackgroundColor: "transparent",
              pointBorderColor: "transparent",
              pointBorderWidth: 2,
            },
          ]),
    ],
  };

  const totalDuration = 600;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
    // mode: "index",
      mode: "nearest",
    intersect: false
  },
    animation: {
      duration: totalDuration,
      onProgress: (anim) => {
        if (anim.initial) {
          drawProgressRef.current = anim.currentStep / anim.numSteps;
        }
      },
      onComplete: (anim) => {
        if (anim.initial) {
          drawProgressRef.current = 1;
        }
      },
    },
    transitions: {
      reset: { animation: { duration: 0 } },
      active: { animation: { duration: 0 } },
    },
plugins: {
tooltip: {
  enabled: false,

  external: function (context) {
    const { chart, tooltip } = context;

    let tooltipEl = document.getElementById("chart-tooltip");

    if (!tooltipEl) {
      tooltipEl = document.createElement("div");
      tooltipEl.id = "chart-tooltip";
      tooltipEl.className = "chart-tooltip";

      chart.canvas.closest(".mainChatWrapper").appendChild(tooltipEl);
    }

    if (tooltip.opacity === 0) {
      tooltipEl.style.opacity = 0;
      return;
    }

    const dataPoints = tooltip.dataPoints;

    // show tooltip only near MeMate line
    if (!dataPoints || dataPoints[0].datasetIndex !== 1) {
      tooltipEl.style.opacity = 0;
      return;
    }

    const index = dataPoints[0].dataIndex;

    const projected = chart.data.datasets[0].data[index];
    const memate = chart.data.datasets[1].data[index];

    const year = chart.data.labels[index];

  tooltipEl.innerHTML = `


  <div style="display:flex;gap:20px">
    <div>
      <div style="font-size:12px;font-weight:600;white-space:nowrap">Projected</div>
      <div style="font-size:16px;font-weight:bold">$${Number(projected).toLocaleString()}</div>
    </div>

    <div>
      <div style="font-size:12px;font-weight:600;white-space:nowrap">With MeMate</div>
      <div style="font-size:16px;font-weight:bold">$${Number(memate).toLocaleString()}</div>
    </div>
  </div>
`;

    const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

    const tooltipWidth = tooltipEl.offsetWidth;
    const tooltipHeight = tooltipEl.offsetHeight;

  let left = positionX + tooltip.caretX - tooltipWidth / 2;
let top = positionY + tooltip.caretY - tooltipHeight - 10;

/* prevent overflow */
if (left < 10) {
  left = 10;
}

if (left + tooltipWidth > chart.width) {
  left = chart.width - tooltipWidth - 10;
}

/* calculate arrow position relative to tooltip */
let arrowLeft = positionX + tooltip.caretX - left;

/* keep arrow inside tooltip */
arrowLeft = Math.max(12, Math.min(tooltipWidth - 12, arrowLeft));

tooltipEl.style.setProperty("--arrow-left", arrowLeft + "px");

    /* flip tooltip if near top */
    if (top < chart.chartArea.top) {
      top = positionY + tooltip.caretY + 10;
      tooltipEl.classList.add("tooltip-bottom");
    } else {
      tooltipEl.classList.remove("tooltip-bottom");
    }

    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = left + "px";
    tooltipEl.style.top = top + "px";
  }
}
},
    scales: {
      x: {
        grid: {
          color: "#f2f2f2",
          drawBorder: false,
          drawTicks: false,
          clip: true,
        },
         border: {
      display: false      
    },
        ticks: { display: true },
      },
     y: {
  min: safeVal === 0 ? 50 : undefined,
  max: safeVal === 0 ? 110 : undefined,
  beginAtZero: false,
  grid: { display: false },
  ticks: { display: false },
},
    },

    layout: {
      padding: {
        left: 60,
        right: 0,
        bottom: 0,
        top: 40,
      },
    },
    onHover: (event, elements, chart) => {
      const box = chart.withMemateBox;
      const canvas = chart.canvas;

      if (!box) {
        canvas.style.cursor = "default";
        return;
      }

      const rect = canvas.getBoundingClientRect();
      const x = event.native.clientX - rect.left;
      const y = event.native.clientY - rect.top;

      if (
        x >= box.x &&
        x <= box.x + box.w &&
        y >= box.y &&
        y <= box.y + box.h
      ) {
        canvas.style.cursor = "pointer";
      } else {
        canvas.style.cursor = "default";
      }
    },
    onClick: (event, elements, chart) => {
      const box = chart.withMemateBox;
      if (!box) return;

      const rect = chart.canvas.getBoundingClientRect();
      const x = event.native.clientX - rect.left;
      const y = event.native.clientY - rect.top;

      if (
        x >= box.x &&
        x <= box.x + box.w &&
        y >= box.y &&
        y <= box.y + box.h
      ) {
        setShowModal(true);
      }
    },
  };

  return (
    <>
      <div
        className="mainChatWrapper"
        style={{ position: "relative", height: "400px", marginTop: "20px" }}
      >
        <div
          className="leftTextData"
          style={{
            position: "absolute",
            left: "-53px",
            top: "22%",
            transform: "translateY(-50%) rotate(-90deg)",
            fontSize: "15px",
            color: "rgba(136, 142, 158, 1)",
            whiteSpace: "nowrap",
            fontFamily: "sequel_sans_roman_head",
            zIndex: 10,
          }}
        >
          Business value
        </div>
        <div style={{ height: "390px", marginLeft: "-60px" }}>
        <Line
          key={tradingYears}
          data={data}
          options={options}
          plugins={[clipPlugin, customPlugin, projectedLabelPlugin]}
        />
        </div>
        {/* <div style={{
 position: "absolute",
 left: "10px",
 bottom: "0px",
 fontSize: "15px",
 color: "rgba(136, 142, 158, 1)",
 fontFamily: "sequel_sans_roman_head",
 zIndex: 10,
 }}>
 Today
 </div>
 <div style={{
 position: "absolute",
 right: "20px",
 bottom: "0px",
 fontSize: "15px",
 color: "rgba(136, 142, 158, 1)",
 fontFamily: "sequel_sans_roman_head",
 zIndex: 10,
 }}>
 5 years
 </div> */}
      </div>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        center
        closeIcon={<span style={{ fontSize: "22px" }}></span>}
        classNames={{
          modal: "customCalModal",
        }}
        styles={{
          modal: {
            borderRadius: "18px",
            padding: "40px 40px 15px 40px !important",
            maxWidth: "600px",
            width: "600px",
            background: "var(--Gray-25, rgba(252, 252, 253, 1))",
          },
        }}
      >
        <div className="customCalModalHeading">
          <h2>
            Based on observed improvements in documentation quality,
            traceability, and operational consistency.
          </h2>
          <p>
            The projected uplift shown reflects average improvements observed in
            businesses using structured job history, documented workflows and
            centralised business records.
          </p>
          <p>
            Individual results will vary depending on business type, usage,
            implementation and market conditions. No guarantee of increased
            valuation is provided.
          </p>
        </div>
        <div className="CustomModelCloseBut">
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      </Modal>
    </>
  );
}
