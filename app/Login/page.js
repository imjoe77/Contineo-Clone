import React from 'react'

export default function Page() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl p-10">

          {/* Heading */}
          <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-6">
            Student Attendance Tracker
          </h1>

          <p className="text-center text-gray-600 mb-10">
            A modern solution to manage and monitor student attendance efficiently.
          </p>

          {/* About Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
              About the Application
            </h2>

            <p className="text-gray-600 leading-relaxed">
              The Student Attendance Tracker is designed to simplify attendance
              management for teachers and institutions. Instead of maintaining
              manual records, this system allows educators to digitally mark and
              track student attendance with accuracy and convenience.
            </p>

            <p className="text-gray-600 mt-3 leading-relaxed">
              The application provides a clean interface where teachers can view
              attendance records, update student status, and maintain organized
              academic data for better classroom management.
            </p>
          </div>

          {/* Features */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-6">
              Key Features
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-lg text-gray-700 mb-2">
                  Easy Attendance
                </h3>
                <p className="text-gray-600 text-sm">
                  Quickly mark students as present or absent with a simple interface.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-lg text-gray-700 mb-2">
                  Organized Records
                </h3>
                <p className="text-gray-600 text-sm">
                  Maintain structured attendance data for every class and student.
                </p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-lg text-gray-700 mb-2">
                  Fast & Responsive
                </h3>
                <p className="text-gray-600 text-sm">
                  Built using Next.js and Tailwind CSS for speed and responsiveness.
                </p>
              </div>

            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
              Technology Used
            </h2>

            <div className="flex flex-wrap gap-3 mt-3">
              <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
                Next.js
              </span>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
                React
              </span>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
                Tailwind CSS
              </span>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
                JavaScript
              </span>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t pt-6 text-center text-gray-500 text-sm">
            <p>Version 1.0</p>
            <p>Developed for educational purposes</p>
          </div>

        </div>
      </div>
    </>
  );
}