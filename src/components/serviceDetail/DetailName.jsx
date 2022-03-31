import React from "react";

function DetailName(props) {
  //   console.log("props", props);
  return (
    <div style={{ marginBottom: "24px" }}>
      <h1>{props.services.name}</h1>
      <h2>฿ {props.services.price}</h2>
    </div>
  );
}

export default DetailName;
