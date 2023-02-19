import React from "react";
export default function CurrentStatusLogo(props) {
  return (
    <div className="col-sm-1 col-6 currentStatusLogo pt-3">
      <img className="" src={props.src} alt="weather status logo" />
    </div>
  );
}
