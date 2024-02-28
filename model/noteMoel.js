const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  color: {
    type: String,
    default: "darkgray",
  },
  notes: [
    {
      note: {
        type: String,
      },
      date : {
        type: String,
        default : Date.now()
      }
    },
  ],
});

const noteModel = mongoose.model("Notes", noteSchema);

module.exports = { noteModel };
