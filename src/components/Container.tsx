import React from "react";

interface IContainer {
  children?: React.ReactNode;
}

/** 1440px Container */
const Container = ({ children }: IContainer) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "32px",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
