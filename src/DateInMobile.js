import React from "react";
export default function DateInMobile(props) {
  return (
    <span className="date">
      {props.day} {props.time}, {props.date} {props.month} {props.year}
    </span>
  );
}
