const mongoose = require("mongoose");

const dataSchema = {
    title: String,
    content: String
}

// here is the name of the sub-db
const tries = mongoose.model("datas", dataSchema);

module.exports = tries;