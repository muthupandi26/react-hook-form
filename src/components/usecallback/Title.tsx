import React from "react";

function Title() {
  console.log("Title rendering");
  return <div>Title component</div>;
}

export default React.memo(Title);
