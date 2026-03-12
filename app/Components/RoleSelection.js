export default function RoleSelection() {
  return (
    <section className="py-20">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-12">
          Choose Your Role
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="border p-10 rounded-xl hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Student Portal
            </h3>

            <p className="text-gray-600 mb-6">
              Check attendance, view records and monitor progress.
            </p>

            <a
              href="/StudentPage"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Login as Student
            </a>
          </div>

          <div className="border p-10 rounded-xl hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Lecturer Portal
            </h3>

            <p className="text-gray-600 mb-6">
              Mark attendance and manage students easily.
            </p>

            <a
              href="/lecturer/login"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Login as Lecturer
            </a>
          </div>

        </div>

      </div>

    </section>
  )
}