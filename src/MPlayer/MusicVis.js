import React from "react";

export default function MusicVis(props) {
  return (
    <div>
      <svg>
        <circle r={props.size} cx="150" cy="100" fill="#555"></circle>

        <circle
          r={props.progress * props.size}
          cx="150"
          fill="#ffbd38"
          cy="100"
        ></circle>
      </svg>
    </div>
  );
}
