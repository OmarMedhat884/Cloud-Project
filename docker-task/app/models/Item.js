const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

});

module.exports = mongoose.model("Item", itemSchema);