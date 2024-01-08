const express = require("express");
const projectModel = require("../model/project.model.js");

// GET || ALL PROJECTS
// @routes api/projects
const getAllProject = async (req, res) => {
  const findProjects = await projectModel.find();
  if (!findProjects) {
    return res.status(404).json({ message: "Projects Not Found" });
  }
  res.status(200).json(findProjects);
};

// CREATE || CREATE A PROJECT
// @route api/projects/
const createProject = async (req, res) => {
  const { title, description, image, linkedInLink } = req.body;

  if (!title || !description || !image || !linkedInLink) {
    throw new Error("All Fields are Mandatory.!!");
    res.status(400);
  } else {
    const createNewProject = await projectModel.create(req.body);
    res.status(201).json(createNewProject);
  }
};

// GET || GEt A PROJECT
// @route api/project/:id
const getOneProject = async (req, res) => {
  const findProject = await projectModel.findById({ _id: req.params.id });
  if (!findProject) {
    return res.status(400).json(`Project Not Found!!`);
  } else {
    return res.status(200).json(findProject);
  }
};

// PUT || UPDATE A PROJECT
// @route api/project/id
const updateProject = async (req, res) => {
  try {
    const findProject = await projectModel.findById({ _id: req.params.id });
    if (!findProject) {
      return res.status(400).json(`Project Not Found!!`);
    } else {
      const updateAProject = await projectModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true } // Options: new: true returns the modified document
      );
      return res.status(200).json(updateAProject);
    }
  } catch (error) {
    console.error("Error while updating Project:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// DELETE || DELETE A PROJECT
// @route api/routes/:id
const deleteProject = async (req, res) => {
  try {
    const findProject = await projectModel.findById({ _id: req.params.id });
    if (!findProject) {
      return res.status(400).json(`Project Not Found!!`);
    } else {
      const deleteProject = await projectModel.findByIdAndDelete(
        req.params.id,
        req.body,
        { new: true } // Options: new: true returns the modified document
      );
      return res.status(200).json(deleteProject);
    }
  } catch (error) {
    console.log("Error while deleting Project: ", error);
    res.status(500).json({ message: `Server Error! ${error}` });
  }
};
module.exports = {
  getAllProject,
  createProject,
  getOneProject,
  updateProject,
  deleteProject,
};
