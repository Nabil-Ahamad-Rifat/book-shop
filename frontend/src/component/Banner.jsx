import React from "react";
import BannerCard from './../page/Home/BannerCard';

function Banner() {
  return (
    <div className="px-4 py-25 lg:px-24 bg-gradient-to-br from-[#5ab2f7] to-[#000000] items-center ">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-20">
      {/* left side */}
        <div className=" md:w-1/2 space-y-8">
            <h2 className="text-5xl font-bold leading-snug text-black">Buy and sell your books <span className="text-blue-700 text-3xl"> for the best prices</span> </h2>
            <p className="px-2 py-3 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, magnam? Et amet voluptate omnis esse neque, unde maiores ea distinctio perspiciatis veniam! Ad aut saepe officiis tempore iusto debitis possimus.</p>

            <div>
                <input className="py-0.5 px-1 rounded-s-sm outline-none bg-white rounded-2xl " type="text" name="search" id="search" placeholder="Search a book " />
                <button className=" bg-blue-700 px-3 py-0.5 rounded-2xl text-white items-center font-mediu hover:bg-black transition-all ease-in duration-100">Search</button>
            </div>


        </div>
        {/* Right side */}
        <div>
            <BannerCard/>
        </div>
      </div>
    </div>
  );
}

export default Banner;
