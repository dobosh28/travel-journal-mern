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

// Comments for journal entries
router.post("/:id/comments", (req, res) => {
  res.json({
    message: "POST /api/journals/:id/comments",
  });
});

router.get("/:id/comments", (req, res) => {
  res.json({
    message: "GET /api/journals/:id/comments",
  });
});

router.get("/:id/comments/:comment_id", (req, res) => {
  res.json({
    message: "GET /api/journals/:id/comments/:comment_id",
  });
});

router.patch("/:id/comments/:comment_id", (req, res) => {
  res.json({
    message: "PATCH /api/journals/:id/comments/:comment_id",
  });
});

router.delete("/:id/comments/:comment_id", (req, res) => {
  res.json({
    message: "DELETE /api/journals/:id/comments/:comment_id",
  });
});

module.exports = router;

