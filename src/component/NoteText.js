import axios from "axios";
import React, { useEffect, useState } from "react";
import { getNote, addNote } from "../apiRoutes";
import { NoteHade } from "./NoteHade";
import SendIcon from "@mui/icons-material/Send";

export const NoteText = ({ currentGroup }) => {
  const [groupName, setGroupName] = useState("");
  const [color, setColor] = useState("");
  const [allNotes, setAllNotes] = useState(undefined);
  const [note, setNote] = useState("");

  const getAllnote = async () => {
    try {
      const body = { noteId: currentGroup };
      const response = await axios.get(
        `${getNote}/?noteId=${currentGroup}`,
        body
      );
      setColor(response.data.color);
      setGroupName(response.data.name);
      setAllNotes(response.data.notes);
    } catch (error) {
      console.log(error);
    }
  };

  const addNoteInDb = async () => {
    try {
      setNote("");
      const body = {
        noteId: currentGroup,
        note: note,
      };
      await axios.post(addNote, body);
      getAllnote();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllnote();
  }, [currentGroup]);
  return (
    <div className="flex flex-col h-full w-full justify-between">
      <div>
        {groupName != "" && <NoteHade name={groupName} color={color} />}
      </div>
      <div className="h-full overflow-auto">
        {allNotes?.map((note, index) => {
          return (
            <div key={index} className="bg-white p-2 m-2 shadow-md">
              {note.note}
              {/* <p>{note.date }</p> */}
            </div>
          );
        })}
      </div>
      <div className=" bg-[#001F8B] flex items-center justify-center">
        <div className="flex items-center justify-center bg-white w-full m-4 rounded-lg px-3">
          <input
            rows="4"
            cols="50"
            placeholder="Add Note"
            type="text"
            className="w-full h-[40px]  m-2"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <div onClick={addNoteInDb} className="text-[#001F8B] cursor-pointer">
            <SendIcon fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
};
