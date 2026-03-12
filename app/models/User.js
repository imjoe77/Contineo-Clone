import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema(
{
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  name: {
    type: String,
    default: "",
  },

  usn: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  role: {
    type: String,
    enum: ["student", "teacher"],
    default: "student",
  },

  profilePicture: {
    type: String,
    default: "",
  },
},
{
  timestamps: true,
}
);

const User = mongoose.models.User || model("User", UserSchema);

export default User;