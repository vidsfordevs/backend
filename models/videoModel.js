const mongoose = require('../connection');



const schema = new mongoose.Schema({

    author: { type : String, ref: "" },
    title: String,
    description: String,
    upvotes: Number,
    comments: Array,
    createAt : {type: Date, default : new Date()}
})


const model = mongoose.model("videos", schema);

module.exports = model;