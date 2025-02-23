const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
  email: {
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true,
  },
  isAdmin: Boolean,
  isPrivate: Boolean,
  isMain:Boolean, 
  },
  {
  timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
