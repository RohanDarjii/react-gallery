import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);

    const fetchImages = async () => {
    try {
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=8`
      );

      // replace images (pagination style)
      setImages(res.data);

      // 👉 OR for infinite scroll:
      // setImages(prev => [...prev, ...res.data]);

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold  mb-4">Image Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {images.length === 0 ? (
          <p>No images to display</p>
        ) : (
          images.map((image) => (
            <div key={image.id} className="bg-white rounded shadow p-4">
              <img
                src={image.download_url}
                alt={image.author}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-lg font-semibold">{image.author}</h2>
            </div>
          ))
        )}

      </div>

      <div className="flex justify-between mt-5">

        {/* PREVIOUS */}
        <button
          onClick={() => {
            if (page > 1) setPage(page - 1);
          }}
          className="bg-blue-500 px-4 py-2 rounded text-white"
        >
          Previous
        </button>
          <p className="mt-3">Page: {page}</p>
        {/* NEXT */}
        <button
          onClick={() => setPage(page + 1)}
          className="bg-blue-500 px-4 py-2 rounded text-white"
        >
          Next
        </button>

      </div>


    </div>
  );
}

export default Home;
