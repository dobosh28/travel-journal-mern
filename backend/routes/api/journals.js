const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.json({
    message: "POST /api/journals",
  });
});

router.get("/", (req, res) => {
  res.json({
    message: "GET /api/journals",
  });
});

router.get("/:id", (req, res) => {
  res.json({
    message: "GET /api/journals/:id",
  });
});

router.patch("/:id", (req, res) => {
  res.json({
    message: "PATCH /api/journals/:id",
  });
});

router.delete("/:id", (req, res) => {
  res.json({
    message: "DELETE /api/journals/:id",
  });
});
