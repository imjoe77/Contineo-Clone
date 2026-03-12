export default function StudentPage() {

  const student = {
    name: "Muhammad Ansar",
    id: "BCA102",
    email: "ansar@email.com",
    course: "BCA"
  };

  const attendance = [
    { subject: "Database Management", present: 18, total: 22 },
    { subject: "Data Structures", present: 20, total: 24 },
    { subject: "Operating System", present: 15, total: 20 },
    { subject: "Python Programming", present: 19, total: 21 }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-3xl font-bold text-center mb-10 text-blue-600">
        Student Dashboard
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Student Details */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold border-b pb-2 mb-4">
            Student Details
          </h2>

          <p className="mb-2"><span className="font-semibold">Name:</span> {student.name}</p>
          <p className="mb-2"><span className="font-semibold">ID:</span> {student.id}</p>
          <p className="mb-2"><span className="font-semibold">Email:</span> {student.email}</p>
          <p className="mb-2"><span className="font-semibold">Course:</span> {student.course}</p>
        </div>


        {/* Attendance Cards */}
        <div className="bg-white p-6 rounded-xl shadow-lg">

          <h2 className="text-xl font-semibold border-b pb-2 mb-6">
            Subject Attendance
          </h2>

          <div className="grid gap-5">

            {attendance.map((sub, index) => {

              const percent = Math.round((sub.present / sub.total) * 100);

              return (
                <div key={index} className="p-4 rounded-lg border shadow-sm hover:shadow-md transition">

                  <div className="flex justify-between mb-2">
                    <h3 className="font-semibold">{sub.subject}</h3>
                    <span className={`font-semibold ${percent < 75 ? "text-red-500" : "text-green-600"}`}>
                      {percent}%
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 mb-2">
                    {sub.present} / {sub.total} classes attended
                  </p>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full ${percent < 75 ? "bg-red-500" : "bg-blue-500"}`}
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </div>
  );
}