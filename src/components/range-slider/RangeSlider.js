import React from "react";
import "./RangeSlider.css";

const RangeSlider = ({ value, onChange }) => {
  let progressBarWidth = "0";

  if (value === 1) {
    progressBarWidth = "33%";
  } else if (value === 2) {
    progressBarWidth = "66%";
  } else if (value === 3) {
    progressBarWidth = "100%";
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        height: "24px",
        width: "255px",
      }}
    >
      <input
        type="range"
        value={value}
        min={0}
        max={3}
        onChange={onChange}
        className="slider"
        style={{
          width: "255px",
          appearance: "none",
          height: "6px",
          background: "none",
          position: "absolute",
          zIndex: "1",
        }}
      />
      {/* Slider track */}
      <div
        style={{
          position: "absolute",
          background: "var(--dark)",
          height: "6px",
          width: "255px",
        }}
      ></div>
      {/* Progress track */}
      <div
        style={{
          position: "absolute",
          background: "var(--lime)",
          height: "6px",
          width: progressBarWidth,
        }}
      ></div>
      {/* Background circle 1 */}
      <div
        style={{
          position: "absolute",
          background: "var(--olive)",
          border: "6px solid var(--dark)",
          borderColor: value > 0 ? "var(--lime)" : "var(--dark)",
          top: "0",
          borderRadius: "50%",
          height: "24px",
          width: "24px",
        }}
      ></div>
      {/* Background circle 2 */}
      <div
        style={{
          position: "absolute",
          background: "var(--olive)",
          border: "6px solid var(--dark)",
          borderColor: value > 1 ? "var(--lime)" : "var(--dark)",
          top: "0",
          left: "calc(25% + 13px)",
          borderRadius: "50%",
          height: "24px",
          width: "24px",
        }}
      ></div>
      {/* Background circle 3 */}
      <div
        style={{
          position: "absolute",
          background: "var(--olive)",
          border: "6px solid var(--dark)",
          borderColor: value > 2 ? "var(--lime)" : "var(--dark)",
          top: "0",
          borderRadius: "50%",
          right: "calc(25% + 13px)",
          height: "24px",
          width: "24px",
        }}
      ></div>
      {/* Background circle 4 */}
      <div
        style={{
          position: "absolute",
          background: "var(--olive)",
          border: "6px solid var(--dark)",
          borderColor: value > 3 ? "var(--lime)" : "var(--dark)",
          top: "0",
          borderRadius: "50%",
          right: 0,
          height: "24px",
          width: "24px",
        }}
      ></div>
    </div>
  );
};

export default RangeSlider;
