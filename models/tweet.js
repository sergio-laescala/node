const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const tweetSchema = new mongoose.Schema(
    {
        userId: {
            type: ObjectId,
        },
        message: {
            type: String,
            required: true,
            default: ""
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Tweet", tweetSchema);