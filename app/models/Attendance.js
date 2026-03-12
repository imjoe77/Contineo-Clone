import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const attendanceSchema = new Schema({
    name: { type: String, required: true },
    usn: { type: String, required: true },
    course: {type: String,required: true},
    paymentId: { type: String },
    markeddat: { type: Date, default: Date.now },
    done: { type: Boolean, default: false },
});

const Attendance= mongoose.models.Payment || model('Payment', attendanceSchema);
export default Attendance;