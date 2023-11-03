const express = require("express");
const router = express.Router();

// GET all journals
router.get("/", (req, res, next) => {
  res.json({
    message: "GET all journals",
  });
});

// GET a single journal
router.get("/:id", (req, res, next) => {
  res.json({
    message: "GET a single journal",
  });
});

// POST a new journal
router.post("/", (req, res, next) => {
  res.json({
    message: "POST a new journal",
  });
});

// UPDATE a single journal
router.patch("/:id", (req, res, next) => {
  res.json({
    message: "UPDATE a journal",
  });
});

// DELETE a single journal
router.delete("/:id", (req, res, next) => {
  res.json({
    message: "DELETE a journal",
  });
});

// Comments for journal entries
router.post("/:id/comments", (req, res, next) => {
  res.json({
    message: "POST /api/journals/:id/comments",
  });
});

router.get("/:id/comments", (req, res, next) => {
  res.json({
    message: "GET /api/journals/:id/comments",
  });
});

router.get("/:id/comments/:comment_id", (req, res, next) => {
  res.json({
    message: "GET /api/journals/:id/comments/:comment_id",
  });
});

router.patch("/:id/comments/:comment_id", (req, res, next) => {
  res.json({
    message: "PATCH /api/journals/:id/comments/:comment_id",
  });
});

router.delete("/:id/comments/:comment_id", (req, res, next) => {
  res.json({
    message: "DELETE /api/journals/:id/comments/:comment_id",
  });
});

module.exports = router;

