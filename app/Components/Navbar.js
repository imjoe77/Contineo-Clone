// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow-md fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

//         <h1 className="text-2xl font-bold text-blue-600">
//           AttendTrack
//         </h1>

//         <div className="space-x-6 hidden md:flex text-gray-800 font-medium">

//           <a href="/" className="hover:text-blue-600 transition">
//             Home
//           </a>

//           <a href="#features" className="hover:text-blue-600 transition">
//             Student
//           </a>

//           <a href="/login" className="hover:text-blue-600 transition">
//             Lecturer
//           </a>
//           <a href="/login" className="hover:text-blue-600 transition">
//             About
//           </a>

          
//         </div>

//       </div>
//     </nav>
//   )
// }
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/80 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 tracking-wide">
          AttendTrack
        </h1>

        {/* Menu */}
        <div className="relative">

          <button
            onClick={() => setOpen(!open)}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium 
            hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Menu
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 mt-3 w-52 bg-white rounded-xl 
            shadow-xl border border-gray-100 overflow-hidden animate-fadeIn">

              <Link
                href="/"
                className="block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                Home
              </Link>

              <Link
                href="\StudentPage"
                className="block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                Student
              </Link>

              <Link
                href=""
                className="block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                Lecturer
              </Link>

              <Link
                href="\About"
                className="block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                About
              </Link>

            </div>
          )}

        </div>
      </div>
    </nav>
  );
}