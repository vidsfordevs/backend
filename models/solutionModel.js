const mongoose = require("../connection");

const schema = new mongoose.Schema({
  query: { type: mongoose.Types.ObjectId, ref: "query" },
  uploadedBy: { type: mongoose.Types.ObjectId, ref: "users" },
  comment: String,
  video: String,
  upvotes: { type: Number, default: 0 },
  comments: { type: Array, default: [] },
  createAt: { type: Date, default: new Date() },
});

const model = mongoose.model("solutions", schema);

module.exports = model;
