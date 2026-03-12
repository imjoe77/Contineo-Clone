"use server";
import User from "../models/User";
import Attendance from "../models/Attendance";
import connectDB from "@/db/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";

//Function fetches student info from db
export async function getUserProfile() {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            throw new Error("Not authenticated");
        }
        await connectDB();

        const email = session.user.email.trim().toLowerCase();
        const currentUser = await User.findOne({ email });

        if (!currentUser) {
            throw new Error("User not found");
        }
        return JSON.parse(JSON.stringify(currentUser));
    } catch (error) {

        console.error("Error fetching user profile:", error);

        return null;
    }
}

//Function to fetch attendance reports
export async function getStudentAttendance() {

    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            throw new Error("Not authenticated");
        }

        await connectDB();
        const email = session.user.email.trim().toLowerCase();
        const student = await User.findOne({ email });
        if (!student) {
            throw new Error("Student not found");
        }

        const attendance = await Attendance.find({
            studentId: student._id
        }).sort({ date: -1 });

        return JSON.parse(JSON.stringify(attendance));

    } catch (error) {
        console.error("Error fetching attendance:", error);
        return null;
    }
}

//Function to mark attendance 
export async function markAttendance(studentId, status) {

    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            throw new Error("Not authenticated");
        }

        await connectDB();
        const teacher = await User.findOne({
            email: session.user.email.trim().toLowerCase()
        });

        if (!teacher || teacher.role !== "teacher") {
            throw new Error("Unauthorized: Only teachers can mark attendance");
        }

        // Prevent duplicate attendance for same day
        const todayStart = new Date();
        todayStart.setHours(0, 0, 0, 0);

        const todayEnd = new Date();
        todayEnd.setHours(23, 59, 59, 999);

        const existingAttendance = await Attendance.findOne({
            studentId,
            date: {
                $gte: todayStart,
                $lte: todayEnd
            }
        });

        if (existingAttendance) {
            throw new Error("Attendance already marked for today");
        }

        const attendance = await Attendance.create({
            studentId,
            status,
            date: new Date()
        });

        return JSON.parse(JSON.stringify(attendance));

    } catch (error) {
        console.error("Error marking attendance:", error);
        return null;
    }
}

//Function to fetch all students
export async function getAllStudents() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      throw new Error("Not authenticated");
    }

    await connectDB();
    const teacher = await User.findOne({
      email: session.user.email.trim().toLowerCase(),
    });

    if (!teacher || teacher.role !== "teacher") {
      throw new Error("Unauthorized");
    }
    const students = await User.find({ role: "student" })
      .select("name usn email profilePicture");

    return JSON.parse(JSON.stringify(students));

  } catch (error) {
    console.error("Error fetching students:", error);
    return null;
  }
}