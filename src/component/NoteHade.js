import React from "react";

export const NoteHade = ({ name, color }) => {
  const avatarName = name.split(" ");
  let iconName;
  if (avatarName.length > 1) {
    iconName = avatarName[0][0] + avatarName[avatarName.length - 1][0];
  } else {
    iconName = avatarName[0][0];
  }
  return (
    <div className="flex gap-3 w-full bg-[#001F8B] p-4 items-center cursor-pointer ">
      <div>
        <p
          style={{ backgroundColor: color }}
          className="h-[60px] w-[60px] flex justify-center items-center text-[25px] rounded-full font-medium text-white"
        >
          {iconName.toUpperCase()}
        </p>
      </div>
      <p>{name}</p>
    </div>
  );
};
