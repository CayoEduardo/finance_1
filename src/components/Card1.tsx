import React from "react";
import Flag from "react-world-flags";

interface ICard1 {
  code: string;
  name: string;
  shortName: string;
  value: string;
  variance: string;
}

const Card1 = ({ code, name, shortName, value, variance }: ICard1) => {
  return (
    <div
      style={{
        border: "1px solid rgba(0,0,0,0.1)",
        display: "flex",
        alignItems: "center",
        maxWidth: "max-content",
        paddingInline: "24px",
        paddingBlock: "12px",
        borderRadius: "8px",
        minWidth: "360px",
        justifyContent: "space-between",
        boxShadow:
          "0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "16px" }}>
          <Flag code={code} style={{ width: "4rem", height: "4rem" }} />
        </div>
        <div style={{ marginRight: "48px" }}>
          <p style={{ fontSize: "18px", fontWeight: "600" }}>{name}</p>
          <p style={{ fontSize: "14px", marginTop: "4px" }}>{shortName}</p>
        </div>
      </div>
      <div>
        <p>R${value}</p>
        <p>{variance}</p>
      </div>
    </div>
  );
};

export default Card1;
