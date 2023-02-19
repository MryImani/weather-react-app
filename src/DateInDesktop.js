import React from "react";
export default function DateInDesktop(props) {
  return (
    <h5 className="date">
      {props.day}, {props.date} {props.month} {props.year}
    </h5>
  );
}
