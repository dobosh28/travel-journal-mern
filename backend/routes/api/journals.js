const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const Journal = mongoose.model("Journal");
const { requireUser } = require("../../config/passport");
const validateJournalInput = require("../../validations/journals");

// GET all journals
router.get("/", async (req, res) => {
  try {
    const journals = await Journal.find()
      .populate("author", "_id username")
      .sort({ createdAt: -1 });
    return res.json(journals);
  } catch (err) {
    return res.json([]);
  }
});

router.get("/user/:userId", async (req, res, next) => {
  let user;
  try {
    user = await User.findById(req.params.userId);
  } catch (err) {
    const error = new Error("User not found");
    error.statusCode = 404;
    error.errors = { message: "No user found with that id" };
    return next(error);
  }
  try {
    const tweets = await Tweet.find({ author: user._id })
      .sort({ createdAt: -1 })
      .populate("author", "_id username");
    return res.json(tweets);
  } catch (err) {
    return res.json([]);
  }
});

// GET a single journal
router.get("/:id", async (req, res, next) => {
  try {
    const journal = await Journal.findById(req.params.id).populate(
      "author",
      "_id username"
    );
    return res.json(journal);
  } catch (err) {
    const error = new Error("Journal not found");
    error.statusCode = 404;
    error.errors = { message: "No journal found with that id" };
    return next(error);
  }
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
