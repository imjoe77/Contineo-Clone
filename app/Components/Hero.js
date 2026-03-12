export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">

      <div className="max-w-6xl mx-auto text-center px-6">

        <h1 className="text-5xl font-bold leading-tight">
          Smart Student Attendance Tracker
        </h1>

        <p className="mt-6 text-lg text-blue-100">
          A simple and efficient system for students and lecturers 
          to manage attendance digitally.
        </p>

        {/* <div className="mt-10 flex justify-center gap-6 flex-wrap">

          <a
            href="/student/login"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
          >
           Login
          </a>

          <a
            href="/lecturer/login"
            className="bg-black bg-opacity-30 px-6 py-3 rounded-lg hover:bg-opacity-40"
          >
            SignUp
          </a>

        </div> */}

      </div>

    </section>
  )
}