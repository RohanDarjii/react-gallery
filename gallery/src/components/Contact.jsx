import React from "react";

const Contact = () => {
  return (
    <div className="  from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-12">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl text-black font-bold mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          We'd love to hear from you. Reach out anytime.
        </p>
      </div>

      {/* Main Layout */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE - INFO */}
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="text-gray-400">support@example.com</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold">Phone</h2>
            <p className="text-gray-400">+49 123 456 789</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold">Location</h2>
            <p className="text-gray-400">Koblenz, Germany</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">

          {/* FORM */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-xl">
            <form className="flex flex-col gap-5">

              <input
                type="text"
                placeholder="Full Name"
                className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="4"
                placeholder="Message"
                className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500"
              />

              <button className="bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold">
                Send Message
              </button>

            </form>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Contact;
