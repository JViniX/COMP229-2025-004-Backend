const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
    {
        title: String,
        completion: Date,
        description: String
    },
    {
        collection: "projects"
    }
);

module.exports = mongoose.model("Project", ProjectSchema);