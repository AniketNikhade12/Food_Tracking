import React, { useState } from "react";
import Clock from "./Clock";
import Quote from "./Quote";
import "./Tracking.css";

const Tracking = () => {
  const [speed, setSpeed] = useState(1);

  const handleShare = () => {
    const url = `${window.location.origin}/tracking?speed=${speed}`;
    navigator.clipboard.writeText(url);
    alert("URL copied to clipboard: " + url);
  };

  return (
    <div>
      <h2>Tracking Screen</h2>
      <div>
        <div className="time">
          <Clock speed={speed} />
        </div>
        <div>
          <input
            type="range"
            min="1"
            max="10"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
        </div>
      </div>
      <div></div>
      <button onClick={handleShare} className="share">
        Share
      </button>

      <div className="quote">
        <Quote />
      </div>
    </div>
  );
};

export default Tracking;
