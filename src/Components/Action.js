import React from "react";

const Action = (props) => {
  const handlePick = () => {
    alert("action component");
  };
  return (
    <div>
      <button onClick={handlePick}>what to do</button>
    </div>
  );
};
export default Action;
