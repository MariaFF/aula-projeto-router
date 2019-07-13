import React from "react";

function Relogio(props) {
  return (
    <div className="relogio">
      <span>Hora atual</span>
      <span>{props.dateTime.toISOString()}</span>
    </div>
  );
}

export default Relogio;
