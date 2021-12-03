import React from "react";
import "./Circles.css";

function Circles(props) {
  return (
    <div className="Circles">
      <div className={props.state.selected1 ? "selected" : null }>1</div>
      <div className={props.state.selected2 ? "selected" : null }>2</div>
      <div className={props.state.selected3 ? "selected" : null}>3</div>
      <div className={props.state.selected4 ? "selected" : null}>4</div>
    </div>
  );
}

export default Circles;
