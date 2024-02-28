import React from "react";

export const Color = ({ color, selectColor, setSelectColor }) => {

  return (
    <div
      onClick={() => setSelectColor(color)}
      style={{
        backgroundColor: color,
        border: selectColor == color ? "3px solid" : "0px solid",
        borderColor: "black"
      }}
      className={`h-[40px] w-[40px] rounded-full cursor-pointer`}
    ></div>
  );
};
