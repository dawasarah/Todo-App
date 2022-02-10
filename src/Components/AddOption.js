import React from "react";

const AddOption = () => {
  const handlePick = () => {
    alert("Beryl");
  };
  return (
    <div>
      <button onClick={handlePick}>add-option</button>
    </div>
  );
};

export default AddOption;
