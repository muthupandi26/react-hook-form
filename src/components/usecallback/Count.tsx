import React from "react";

interface CountProps {
  text: string;
  count: number;
}

function Count({ text, count }: CountProps) {
  console.log("Count is rendering", text);
  return (
    <div>
      count - {text}, and the age - {count}
    </div>
  );
}

export default React.memo(Count);
