"use client";
import React, { useState } from "react";

// --- Fragment 1: StudentRow ---
// Renders an individual row with checkbox and status icon
const StudentRow = ({ student, onCheck }) => (
  <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors">
    <td className="px-6 py-4 font-medium text-zinc-700 dark:text-zinc-300">
      {student.name}
    </td>
    <td className="px-6 py-4 text-center">
      <input
        type="checkbox"
        className="w-5 h-5 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer transition-all"
        checked={student.present}
        onChange={onCheck}
      />
    </td>
    <td className={`px-6 py-4 text-right font-bold ${student.present ? "text-emerald-500" : "text-rose-500"}`}>
      {student.present ? "✔" : "✕"}
    </td>
  </tr>
);

// --- Fragment 2: ClassSection ---
// Renders the table for a specific group of students
const ClassSection = ({ title, students, startIndex, handleCheck }) => (
  <div className="mb-8">
    <h2 className="text-xl font-serif italic mb-4 text-zinc-800 dark:text-zinc-200 border-l-4 border-indigo-500 pl-3">
      {title}
    </h2>
    <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-zinc-50 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400 text-xs uppercase tracking-wider">
            <th className="px-6 py-4 font-semibold">Student Name</th>
            <th className="px-6 py-4 font-semibold text-center">Attendance</th>
            <th className="px-6 py-4 font-semibold text-right">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
          {students.map((student, index) => (
            <StudentRow 
              key={startIndex + index} 
              student={student} 
              onCheck={() => handleCheck(startIndex + index)} 
            />
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// --- Main Page Component ---
export default function AttendancePage() {
  const [students, setStudents] = useState([
    { name: "Nikhil", present: false },
    { name: "Rahul", present: false },
    { name: "Anjali", present: false },
    { name: "Sneha", present: false },
    { name: "Arjun", present: false },
    { name: "Vikram", present: false },
  ]);

  const handleCheck = (index) => {
    const updated = [...students];
    updated[index].present = !updated[index].present;
    setStudents(updated);
  };

  const allChecked = students.every((s) => s.present);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 p-8 md:p-12 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-10 space-y-2 text-center md:text-left">
          <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold">Registry System</div>
          <h1 className="text-4xl font-light tracking-tight text-zinc-900 dark:text-white">
            Student <em className="serif italic font-medium text-indigo-600 dark:text-indigo-400">Attendance</em>
          </h1>
        </header>

        {/* Using the ClassSection Fragments */}
        <div className="grid gap-4">
          <ClassSection 
            title="Class A" 
            students={students.slice(0, 2)} 
            startIndex={0} 
            handleCheck={handleCheck} 
          />
          <ClassSection 
            title="Class B" 
            students={students.slice(2, 4)} 
            startIndex={2} 
            handleCheck={handleCheck} 
          />
          <ClassSection 
            title="Class C" 
            students={students.slice(4, 6)} 
            startIndex={4} 
            handleCheck={handleCheck} 
          />
        </div>

        {/* Submit Button Fragment Area */}
        <div className="mt-12 sticky bottom-8 flex justify-center">
          <button
            disabled={!allChecked}
            onClick={() => alert("Attendance Submitted Successfully ✅")}
            className={`px-10 py-4 rounded-full font-bold shadow-2xl transition-all transform active:scale-95 flex items-center gap-2 ${
              allChecked
                ? "bg-indigo-600 text-white hover:bg-indigo-700 hover:-translate-y-1"
                : "bg-zinc-300 dark:bg-zinc-800 text-zinc-500 cursor-not-allowed grayscale"
            }`}
          >
            {allChecked ? "Submit Attendance →" : "Please Complete All Fields"}
          </button>
        </div>

      </div>
    </div>
  );
}