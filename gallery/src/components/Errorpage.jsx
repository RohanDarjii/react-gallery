import React from 'react';

const Errorpage = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-[80vh]  px-4">

      {/* GIF */}
      <div className="w-72 md:w-96 mb-6">
        <img
          src="https://i.postimg.cc/2yrFyxKv/giphy.gif"
          alt="Error"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="text-center max-w-md">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          This page is gone.
        </h1>

        <p className="text-gray-600 mb-6">
          Maybe the page you're looking for was removed, renamed, or never existed.
        </p>

        <a
          href="/"
          className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg shadow transition"
        >
          Back to Home →
        </a>
      </div>

    </div>
  );
};

export default Errorpage;