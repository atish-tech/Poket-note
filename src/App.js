import { useEffect, useState } from "react";
import { Welcome } from "./component/Welcome";
import AddIcon from "@mui/icons-material/Add";
import axios, { all } from "axios";
import { addNotesCategory, getAllNotesCategory } from "./apiRoutes";
import Note from "./component/Note";
import { Dialog, DialogTitle } from "@mui/material";
import { Color } from "./component/Color";
import { NoteText } from "./component/NoteText";

const App = () => {
  let [allNotes, setAllNotes] = useState(undefined);
  const [open, setOpen] = useState(false);
  const [selectColor, setSelectColor] = useState("");
  const [currentGroup , setCurrentGroup] = useState("");

  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];
  const [groupName, setGroupName] = useState("");
  const [loading , setLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fun = async () => {
    try {
      const response = await axios.get(getAllNotesCategory);
      // console.log(response.data);
      setAllNotes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addGroup = async () => {
    try {
      setLoading(true)
      if(groupName === "") {
        setLoading(false);
        return;
      }
      const body = {
        name: groupName,
        color: selectColor,
      };
      const response = await axios.post(addNotesCategory, body);
      setAllNotes([...allNotes, { name: groupName, color: selectColor , _id : response.data._id}]);
      handleClose();
      setLoading(false)
      setGroupName("")
      setSelectColor("")
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  useEffect(() => {
    fun();
  }, []);

  return (
    <div className="h-screen w-screen flex bg-white text-black ">
      <div className="flex-[0.2] w-full">
        <div className="flex flex-col py-4 h-[97%] w-full justify-between items-center p-5">
          <p className="text-[35px] font-medium">Poket Notes</p>
          <div className="flex flex-col items-start overflow-auto w-full h-full gap-2 mt-8 justify-start">
            {allNotes?.map((note) => (
              <div className="w-full" key={note._id}>
                <Note name={note.name} setCurrentGroup={setCurrentGroup} currentGroup={currentGroup} color={note.color} id={note._id} />
              </div>
            ))}
          </div>
          {/* Add new group */}
          <div className="flex justify-end w-full">
            <div
              onClick={handleClickOpen}
              className="bg-[#16008B] cursor-pointer mt-5 w-[90px] h-[90px] rounded-full flex items-center justify-center text-white"
            >
              <p className="text-[80px] pb-5">+</p>
            </div>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              maxWidth={"500px"}
            >
              <DialogTitle
                className="text-left text-[27px] font-medium"
                id="alert-dialog-title"
              >
                {"Create New group"}
              </DialogTitle>
              <div className="max-w[500px] p-10">
                <div className="flex items-center gap-3">
                  <p className="text-[27px] font-medium">Group Name</p>
                  <input
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    className="bg-transparent text-[#979797] border-2 px-5 py-2 rounded-3xl border-[#979797] focus:border-[#979797]"
                    placeholder="Enter group name"
                  />
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <p className="text-[27px] font-medium">Choose Color</p>
                  {colors?.map((color) => (
                    <div key={color}>
                      <Color
                        color={color}
                        setSelectColor={setSelectColor}
                        selectColor={selectColor}
                      />
                    </div>
                  ))}
                </div>
                <div className="w-full flex justify-end mt-8">
                  <button
                    onClick={addGroup}
                    disabled={loading}
                    className="bg-[#001F8B] px-7 py-2 rounded-lg text-white text-[20px]"
                  >
                    {loading ? "Adding..." : "Create"}
                  </button>
                </div>
              </div>
            </Dialog>
          </div>
        </div>
      </div>
      <div className="flex-[0.8] bg-[#DAE5F5]">
       {currentGroup == "" ? <Welcome /> : <NoteText currentGroup={currentGroup}  />}
       
      </div>
    </div>
  );
};

export default App;
