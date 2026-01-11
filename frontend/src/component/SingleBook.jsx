import React from 'react';
import { useLoaderData } from 'react-router-dom';

function SingleBook() {
  const { _id, bookTitle, authorName, imagURL, bookDescription, category, price } = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-24 py-8">
      {/* Book Title and Author Name */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{bookTitle}</h1>
        <p className="text-xl text-gray-600">by <span className="font-semibold">{authorName}</span></p>
      </div>

      {/* Book Image */}
      <div className="mb-8 flex justify-center">
        <img src={imagURL} alt={bookTitle} className="h-96 w-auto object-cover rounded-xl shadow-lg" />
      </div>

      {/* Book Details */}
      <div className="space-y-4">
        <div className="flex justify-between text-lg">
          <span className="font-semibold text-gray-700">Category:</span>
          <span className="text-gray-600">{category}</span>
        </div>
        <div className="flex justify-between text-lg">
          <span className="font-semibold text-gray-700">Price:</span>
          <span className="text-gray-600">${price}</span>
        </div>
        <div className="space-y-2">
          <span className="font-semibold text-gray-700">Description:</span>
          <p className="text-gray-600">{bookDescription}</p>
        </div>
      </div>

      {/* Call to Action (e.g., Purchase button) */}
      <div className="mt-8 text-center">
        <button className="bg-blue-600 text-white py-2 px-8 rounded-full hover:bg-blue-700 transition duration-300">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default SingleBook;
