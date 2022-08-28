import React from "react";
import "../styles/screenshot.css";

export const Screenshot: React.FC<{
  src: string;
  size: "small" | "medium" | "large";
}> = ({ size = "medium", src }) => {
  return (
    <div className={"screenshot-container"}>
      <div className={"notch"} />
      <div className="btn-left" style={{ top: "120px" }} />
      <div className="btn-left" style={{ top: "170px" }} />
      <div className="btn-right" style={{ top: "120px" }} />
      <img className={"img " + size} src={src} alt={"Screenshot"} />
    </div>
  )
}
