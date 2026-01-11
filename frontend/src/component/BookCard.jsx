import React from "react";
// import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCartShopping } from "react-icons/fa6"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function BookCard({ headline, book }) {
    // console.log(book);
  if (!Array.isArray(book) || book.length === 0) {
    return <div className="text-center py-10">📚 Loading books...</div>;
  }

  return (
    <div className="my-16 px-4 lg:px-24">
      <h1 className="text-3xl font-bold text-center my-10">{headline}</h1>
      <div className="mt-12">
              <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 40 },
          1024: { slidesPerView: 5, spaceBetween: 50 },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        {book.map((item,index) => (
          <SwiperSlide key={item._id || item.id || index}>
            <Link to={`/book/${item._id}`}>
              <div className="relative h-75 hover:scale-105 transition-transform duration-300 hover:opacity-80">
                <img
                  src={item.imagURL}
                  alt={item.imagURL}
                  className=" h-50 w-full object-cover  rounded-xl hover:opacity-80 "
                />
                <div className=" absolute top-3 right-3 bg-blue-600 p-2 rounded hover:opacity-100 hover:bg-black ">
                  <FaCartShopping className="text-xl text-white  rounded-xl"/>
                </div>
                {/* <FontAwesomeIcon icon={byPrefixAndName.far['cart-shopping']} /> */}
                <div className="px-5">
                  <div>
                  <h3 className="text-lg font-semibold">{item.bookTitle}</h3>
                  <p className="text-sm text-gray-600">{item.authorName}</p>
                  {/* <p>id{item._id}</p> */}
                  </div>
                  <div>
                    <p>Price: {item.price} ৳</p>
                  </div>


                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>

    </div>
  );
}


export default BookCard;
