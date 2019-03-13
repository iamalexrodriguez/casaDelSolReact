const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let childSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    profilePic: String,
    pictureGallery: [String],
    bio: String,
    interests: String,
    birthdate: Date,
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment"
      }
    ],
    sponsors: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model("Child", childSchema);
