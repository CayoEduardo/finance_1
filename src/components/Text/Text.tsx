import React, { CSSProperties } from "react";
import "./Text.scss";

interface IText {
  className?: string;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  children?: React.ReactNode;
  style?: CSSProperties;
}

const Text = ({
  className,
  style = {},
  children,
  as: Element = "p",
}: IText) => {
  return (
    <Element className={className} style={style}>
      {children}
    </Element>
  );
};

export default Text;
