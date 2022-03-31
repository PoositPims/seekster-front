import React from "react";

function DetailService(props) {
  return (
    <div style={{ marginBottom: "24px", width: "779px" }}>
      <p>{props.services.description}</p>
    </div>
  );
}

export default DetailService;
