
import { Swiper, SwiperSlide } from "swiper/react";
import { Avatar } from "flowbite-react";

// react icon
import { FaStar } from "react-icons/fa6";
import Profilpic from "../../assets/profile.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function Review() {
  return (
    <div className="my-10 px-4 lg:px-24">
      <h2 className="text-5xl text-bold text-center font-bold mb-10 leading-snug ">
        Our customers{" "}
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 nd:m-5 rounded border ">
            <div className="space-y-6 ">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7">
                <p className="mb-4 mt-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  consectetur possimus, quaerat adipisci dolores odio voluptatem
                  debitis porro eaque id eos placeat dolorum ipsam eius
                  deleniti, enim nam ab dolorem.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Avatar
                    img={Profilpic}
                    rounded
                    bordered
                  />
                  {/* <Avatar img={Profilpic} bordered /> */}
                    <h5 className="text-lg font-medium" >Mark Ping</h5>
                    <p className="text-base ">CEO ,ABC Company </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 nd:m-5 rounded border ">
            <div className="space-y-6 ">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7">
                <p className="mb-4 mt-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  consectetur possimus, quaerat adipisci dolores odio voluptatem
                  debitis porro eaque id eos placeat dolorum ipsam eius
                  deleniti, enim nam ab dolorem.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Avatar
                    img={Profilpic}
                    rounded
                    bordered
                  />
                  {/* <Avatar img={Profilpic} bordered /> */}
                    <h5 className="text-lg font-medium" >Mark Ping</h5>
                    <p className="text-base ">CEO ,ABC Company </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 nd:m-5 rounded border ">
            <div className="space-y-6 ">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7">
                <p className="mb-4 mt-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  consectetur possimus, quaerat adipisci dolores odio voluptatem
                  debitis porro eaque id eos placeat dolorum ipsam eius
                  deleniti, enim nam ab dolorem.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Avatar
                    img={Profilpic}
                    rounded
                    bordered
                  />
                  {/* <Avatar img={Profilpic} bordered /> */}
                    <h5 className="text-lg font-medium" >Mark Ping</h5>
                    <p className="text-base ">CEO ,ABC Company </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 nd:m-5 rounded border ">
            <div className="space-y-6 ">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7">
                <p className="mb-4 mt-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  consectetur possimus, quaerat adipisci dolores odio voluptatem
                  debitis porro eaque id eos placeat dolorum ipsam eius
                  deleniti, enim nam ab dolorem.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Avatar
                    img={Profilpic}
                    rounded
                    bordered
                  />
                  {/* <Avatar img={Profilpic} bordered /> */}
                    <h5 className="text-lg font-medium" >Mark Ping</h5>
                    <p className="text-base ">CEO ,ABC Company </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 nd:m-5 rounded border ">
            <div className="space-y-6 ">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7">
                <p className="mb-4 mt-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  consectetur possimus, quaerat adipisci dolores odio voluptatem
                  debitis porro eaque id eos placeat dolorum ipsam eius
                  deleniti, enim nam ab dolorem.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Avatar
                    img={Profilpic}
                    rounded
                    bordered
                  />
                  {/* <Avatar img={Profilpic} bordered /> */}
                    <h5 className="text-lg font-medium" >Mark Ping</h5>
                    <p className="text-base ">CEO ,ABC Company </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 nd:m-5 rounded border ">
            <div className="space-y-6 ">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7">
                <p className="mb-4 mt-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  consectetur possimus, quaerat adipisci dolores odio voluptatem
                  debitis porro eaque id eos placeat dolorum ipsam eius
                  deleniti, enim nam ab dolorem.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Avatar
                    img={Profilpic}
                    rounded
                    bordered
                  />
                  {/* <Avatar img={Profilpic} bordered /> */}
                    <h5 className="text-lg font-medium" >Mark Ping</h5>
                    <p className="text-base ">CEO ,ABC Company </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 nd:m-5 rounded border ">
            <div className="space-y-6 ">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7">
                <p className="mb-4 mt-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  consectetur possimus, quaerat adipisci dolores odio voluptatem
                  debitis porro eaque id eos placeat dolorum ipsam eius
                  deleniti, enim nam ab dolorem.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Avatar
                    img={Profilpic}
                    rounded
                    bordered
                  />
                  {/* <Avatar img={Profilpic} bordered /> */}
                    <h5 className="text-lg font-medium" >Mark Ping</h5>
                    <p className="text-base ">CEO ,ABC Company </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 nd:m-5 rounded border ">
            <div className="space-y-6 ">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7">
                <p className="mb-4 mt-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  consectetur possimus, quaerat adipisci dolores odio voluptatem
                  debitis porro eaque id eos placeat dolorum ipsam eius
                  deleniti, enim nam ab dolorem.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Avatar
                    img={Profilpic}
                    rounded
                    bordered
                  />
                  {/* <Avatar img={Profilpic} bordered /> */}
                    <h5 className="text-lg font-medium" >Mark Ping</h5>
                    <p className="text-base ">CEO ,ABC Company </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 nd:m-5 rounded border ">
            <div className="space-y-6 ">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7">
                <p className="mb-4 mt-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  consectetur possimus, quaerat adipisci dolores odio voluptatem
                  debitis porro eaque id eos placeat dolorum ipsam eius
                  deleniti, enim nam ab dolorem.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Avatar
                    img={Profilpic}
                    rounded
                    bordered
                  />
                  {/* <Avatar img={Profilpic} bordered /> */}
                    <h5 className="text-lg font-medium" >Mark Ping</h5>
                    <p className="text-base ">CEO ,ABC Company </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
         

        </Swiper>
      </div>
    </div>
  );
}

export default Review;
