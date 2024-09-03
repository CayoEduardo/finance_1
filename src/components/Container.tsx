import React from "react";

interface IContainer {
  children?: React.ReactNode;
}

/** 1440px Container */
const Container = ({ children }: IContainer) => {
  return <div style={{ maxWidth: "1440px", margin: "0 auto" }}>{children}</div>;
};

export default Container;
