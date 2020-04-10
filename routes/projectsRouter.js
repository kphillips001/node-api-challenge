const express = require('express');
const db = require('../data/helpers/projectModel')

const router = express.Router();

//GET the projects
router.get("/", (req, res) => {
  db.get()
    .then((proj) => {
      res.status(200).json(proj);
    })
    .catch(() => {
      res.status(500).json({ message: "unable to retrieve projects data" });
    });
});

//GET a project by /:id
router.get("/:id", validateProjectId, (req, res) => {
  db.get(req.params.id)
    .then((proj) => {
      res.status(200).json(proj);
    })
    .catch(() => {
      res.status(500).json({ message: "unable to retrieve project" });
    });
});

//POST a project
router.post("/", (req, res) => {
  if (req.body.name === "" || req.body.description === "") {
    res.status(200).json({
      message: "please provide a name and description for the project",
    });
  }

  db.insert(req.body)
    .then((proj) => {
      res.status(201).json({ message: "successfully added!", proj });
    })
    .catch(() => {
      res
        .status(500)
        .json({ message: "unable to add this project to the database" });
    });
});

//DELETE a project by /:id
router.delete("/:id", validateProjectId, (req, res) => {
  db.remove(req.params.id)
    .then(() => {
      res.status(200).json({ message: "successfully deleted, adios" });
    })
    .catch(() => {
      res.status(500).json({ message: "unable to delete" });
    });
});

//PUT a project by /:id
router.put("/:id", validateProjectId, (req, res) => {
  if (req.body.name === "" || req.body.description === "") {
    res.status(200).json({
      message: "please provide a name and description for the project",
    });
  }
  db.update(req.params.id, req.body)
    .then((proj) => {
      res.status(200).json({ message: "successfully updated!", proj });
    })
    .catch(() => {
      res.status(500).json({ message: "unable to update" });
    });
});

function validateProjectId(req, res, next) {
  db.get(req.params.id)
    .then((proj) => {
      proj ? next() : res.status(400).json({ message: "invalid project id" });
    })
    .catch(() => {
      res.status(500).json({ message: "invalid project id" });
    });
}

module.exports = router;
