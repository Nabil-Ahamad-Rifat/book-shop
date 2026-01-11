import React, { useEffect, useState } from 'react';
import { Card, Spinner } from "flowbite-react";
import { Link } from 'react-router-dom';
import { BsCartPlusFill } from 'react-icons/bs';

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching books data
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/getbooks`)
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []);

  // Loading State
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Spinner aria-label="Center-aligned spinner" size="xl" />
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 lg:px-24'>
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className='text-4xl font-bold text-gray-900 mb-4'>Explore Our Collection</h2>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          Find your next favorite read from our handpicked selection of titles.
        </p>
      </div>

      {/* Grid */}
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
        {
          books.map((book) => (
            <Card
              className='max-w-sm hover:shadow-xl transition-shadow duration-300 border-gray-200 bg-white'
              imgAlt={book.title}
              // Flowbite Card typically puts img in a specific slot, but custom img provides more control over aspect ratio
              renderImage={() => (
                <div className="h-96 w-full overflow-hidden rounded-t-lg bg-gray-100 relative group">
                  <img
                    src={book.imagURL}
                    alt={book.title}
                    className='h-full w-full object-cover group-hover:scale-105 transition-transform duration-500'
                  />
                  {/* Overlay / Badge could go here */}
                </div>
              )}
              key={book._id}
            >
              <div className="flex flex-col flex-grow">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 line-clamp-1 mb-2">
                  {book.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-3 mb-4 text-sm flex-grow">
                  {book.bookDescription || 'No description available for this book.'}
                </p>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-2xl font-bold text-blue-700">
                    ৳{book.price}
                  </span>
                  <Link to={`/book/${book._id}`}>
                    <button className='flex items-center gap-2 bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors'>
                      <BsCartPlusFill /> Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </Card>
          ))
        }
      </div>
    </div>
  );
}

export default Shop;
