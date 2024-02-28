import React from "react";

const Note = ({ name, id, currentGroup, setCurrentGroup, color }) => {
  const avatarName = name.split(" ");
  let iconName;
  if (avatarName.length > 1) {
    iconName = avatarName[0][0] + avatarName[avatarName.length - 1][0];
  } else {
    iconName = avatarName[0][0];
  }
  return (
    <div
      onClick={() => setCurrentGroup(id)}
      style={{ backgroundColor: currentGroup == id ? "#2F2F2F2B" : "" }}
      className="flex gap-3 w-full p-2 rounded-xl items-center cursor-pointer "
      key={id}
    >
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

export default Note;
