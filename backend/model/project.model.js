const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    buildWith: {
      type: Array,
    },
    image: {
      type: String,
    },
    linkedInLink: {
      type: String,
    },
    link: {
      type: String,
    },
    buildYear: {
      type : Number
    }
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
