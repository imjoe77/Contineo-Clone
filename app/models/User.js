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
      default: "", // ✅ IMPORTANT: do NOT require this
    },

    usn: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    profilePicture: {
      type: String,
      default: "",
    },
},
  {
    timestamps: true, // ✅ auto handles createdAt & updatedAt
  }
);

// Prevent model overwrite in Next.js
const User = mongoose.models.User || model("User", UserSchema);

export default User;
