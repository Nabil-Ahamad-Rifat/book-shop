import React from "react";
import Favbookimg from "../../assets/favoritebook.jpg";
import { Link } from 'react-router-dom';
function FavBookBanner() {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12 shadow-2xs">
      <div className="md:w-1/2">
        <img
          src={Favbookimg}
          alt="img"
          className=" shadow-2xl roounded md:w-10/12"
        />
      </div>

      <div className="md:w-1/2 space-y-6">
        <h2 className="  text-5xl font-bold my-5 md:w-3/4 leading-snug ">
          Find your book here <span className="text-blue-700">book here!</span>{" "}
        </h2>
        <p className="mb-10 text-lg md:w-5/6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum eaque
          reprehenderit dolor numquam dolorum expedita laudantium quaerat omnis
          delectus quidem totam inventore repudiandae dolores, suscipit
          architecto officiis tempore ducimus vero.
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center md:items-center justify-between gap-6 md:w-3/4 my-14">
          <div className="">
            <h3 className="text-3xl font-bold">800+</h3>
            <p className="uppercase">Book Listing </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="uppercase">active user  </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">1200+</h3>
            <p className="uppercase">PDF Download  </p>
          </div>
        </div>
        <Link to="/shop"><button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">Explore more..</button></Link>
      </div>
    </div>
  );
}

export default FavBookBanner;
