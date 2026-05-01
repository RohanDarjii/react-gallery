import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">

      {/* HERO */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Us
        </h1>
        <p className="text-gray-400">
          We build modern, scalable, and user-friendly digital experiences.
        </p>
      </div>

      {/* STORY */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-400 leading-relaxed">
            We started with a simple idea — to create high-quality digital
            products that solve real-world problems. Our journey has been
            driven by passion, continuous learning, and a commitment to
            excellence.
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="team"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* VALUES */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-center mb-10">
          What We Believe In
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Innovation", "Quality", "User Experience"].map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold mb-2">{item}</h3>
              <p className="text-gray-400">
                We focus on delivering the best solutions with modern tools
                and clean design.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* TEAM */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Meet the Team
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Rohan", "Ananya", "Amit"].map((name, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl text-center">
              <img
                src={`https://i.pravatar.cc/150?img=${index + 1}`}
                alt={name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="font-semibold">{name}</h3>
              <p className="text-gray-400 text-sm">Developer</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Want to work with us?
        </h2>
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg">
          Contact Us
        </button>
      </div>

    </div>
  );
};

export default About;