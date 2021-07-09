import React from "react";

function TimelineItem({ data }) {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <h3 className="timeline-head">{data.head}</h3>
        <p className="timeline-body">{data.body}</p>
        {data.link && <a className='timeline-link' href={data.link.url}>{data.link.text}</a>}
        <span className="circle">{data.step}</span>
      </div>
    </div>
  );
}

export default TimelineItem;
