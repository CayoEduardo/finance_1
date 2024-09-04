import React from "react";

const Card = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid rgba(0,0,0,0.1)",
        display: "flex",
        alignItems: "center",
        paddingInline: "24px",
        width: "100%",
        paddingBlock: "12px",
        borderRadius: "8px",
        minWidth: "360px",
        justifyContent: "space-between",
        boxShadow:
          "0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
