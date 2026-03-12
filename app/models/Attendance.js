import mongoose from "mongoose";
const { Schema, model } = mongoose;

const attendanceSchema = new Schema({

  studentId: {type: mongoose.Schema.Types.ObjectId,ref: "User",required: true},
  date: {  type: Date,default: Date.now},
  status: {  type: String, enum: ["present", "absent"],required: true}

}, { timestamps: true });

const Attendance = mongoose.models.Attendance || model("Attendance", attendanceSchema);
export default Attendance;