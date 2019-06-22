import React from "react";
import "../styles/Stattext.scss";

export default function Stattext(props) {
  const statuses = props.remarks.filter(remark => remark.type === "status");
  if (statuses.length > 0) {
    return (
      <div className="stattext">
        {statuses.map((status, index) => (
          <p key={index}>
            <span className="fas fa-times" />
            {status.text}
          </p>
        ))}
      </div>
    );
  }
  return null;
}
