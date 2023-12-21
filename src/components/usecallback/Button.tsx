import React from "react";

interface ButtonProps {
  handleClick: any;
  children: string;
}

function Button({ handleClick, children }: ButtonProps) {
  console.log("button is rendering", children);
  return <button onClick={handleClick}>{children}</button>;
}

export default React.memo(Button);
