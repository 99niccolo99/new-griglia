import React from "react";

const widgetNames = {
  a: "A",
  b: "B",
  c: "C",
  d: "D"
};
export default function Widget({ id, onRemoveItem }) {
  return (
    <div style={{ background: "white" }}>
      <div>
        {widgetNames[id]}
        123
      </div>
      <button aria-label="delete" onClick={() => onRemoveItem(id)}>
        close
      </button>
    </div>
  );
}
