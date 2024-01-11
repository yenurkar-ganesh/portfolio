const express = require("express");
const projectModel = require("../model/project.model.js");

// GET || ALL PROJECTS
// @routes api/projects
const getAllProject = async (req, res) => {
  try {
    // limiting the project to show
    let limit = parseInt(req.query.limit, 20); // Parse limit as an integer

    // checking the limit is number or not if not then set default value
    if (isNaN(limit) || limit <= 0) {
      limit = 20;
    }
    const findProjects = await projectModel.find().limit(limit);

    if (!findProjects || findProjects.length === 0) {
      return res.status(404).json({ message: "Projects Not Found" });
    }
    res.status(200).json(findProjects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// CREATE || CREATE A PROJECT
// @route api/projects/
const createProject = async (req, res) => {
  try {
    console.log("Request body:", req.body); // Check the request body
    console.log("File:", req.file); // Check the uploaded file details

    const {
      title,
      description,
      image,
      linkedInLink,
      link,
      buildYear,
      buildWith,
    } = req.body;
    const { filename } = req.file;

    const parsedArray = JSON.parse(buildWith);
    console.log("Creating new project with image:", filename);
    const createNewProject = await projectModel.create({
      title,
      image: req.file.filename,
      description,
      linkedInLink,
      buildYear: new Date(buildYear),
      buildWith: parsedArray,
    });
    const responseProject = {
      ...createNewProject.toJSON(),
      buildYear: new Date(buildYear).getFullYear().toString(),
    };

    // console.log("New project created:", createNewProject);
    res.status(201).json(createNewProject);
    // }
  } catch (error) {
    console.error(`Error while Processing a Data!! ${error} `);
    res.status(500).json({ error: "Internal Server Error" });
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
