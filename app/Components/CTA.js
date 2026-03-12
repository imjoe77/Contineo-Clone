export default function CTA() {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">

      <h2 className="text-3xl font-bold">
        Register as Lecturer 
      </h2>

      <p className="mt-4 text-blue-100">
        Join the smart way of managing attendance today.
      </p>

      <div className="mt-8">

        <a
          href="/signup"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
        >
          Create Account
        </a>

      </div>

    </section>
  )
}