import React from "react";
import data from "../data/ContactTimelineInformation.js";
import TimelineItem from "./TimelineItem.js";
import "./Timeline.css";

function Timeline() {
  const Data = data;
  return (
    <div className="wrap">
      <h1 className="timeline-title">Your Journey</h1>
      <div className="timeline-container">
        {Data.map((dataItem, index) => {
          return <TimelineItem data={dataItem} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Timeline;
