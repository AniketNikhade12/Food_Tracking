// src/Clock.js
import React, { useEffect, useState } from "react";
import "./Clock.css";
import moment from "moment";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(moment());
  const targetTime = moment().subtract(120, "minutes");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime((prevTime) => {
        const newTime = moment(prevTime).subtract(1, "second");
        if (newTime.isBefore(targetTime)) {
          clearInterval(intervalId);
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetTime]);

  const getHandStyles = (degree) => ({
    transform: `rotate(${-degree}deg)`, // negative to rotate anticlockwise
  });

  const secondDegree = (currentTime.seconds() / 60) * 360;
  const minuteDegree =
    (currentTime.minutes() / 60) * 360 + (currentTime.seconds() / 60) * 6;
  const hourDegree =
    (currentTime.hours() / 12) * 360 + (currentTime.minutes() / 60) * 30;

  return (
    <div className="clock" style={{ marginTop: "0px" }}>
      <div className="hand hour" style={getHandStyles(hourDegree)} />
      <div className="hand minute" style={getHandStyles(minuteDegree)} />
      <div className="hand second" style={getHandStyles(secondDegree)} />
      <div className="center" />
    </div>
  );
};

export default Clock;
