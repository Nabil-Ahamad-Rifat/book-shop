import React from 'react';
import { Link } from 'react-router-dom';
import { BsBookHalf, BsPeopleFill, BsAward, BsLightbulb, BsArrowRight } from 'react-icons/bs';

const About = () => {
  return (
    <div className="bg-white font-sans text-gray-900">

      {/* 1. Hero Section - Minimal & Clean */}
      <div className="relative overflow-hidden bg-gradient-to-b from-teal-50 to-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center z-10 relative">
          <p className="text-teal-600 font-semibold tracking-wide uppercase mb-4">Our Story</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-8 leading-tight">
            We Building a Home <br /> for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Book Lovers.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
            Connecting readers with stories that matter. We believe every book finds its reader, and we are here to bridge that gap.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-12 mt-12 border-t border-gray-100 pt-10">
            {[
              { label: 'Books Available', value: '10k+' },
              { label: 'Active Readers', value: '5k+' },
              { label: 'Happy Customers', value: '99%' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Mission & Values - Asymmetrical Layout */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold leading-snug">Our Mission is to Make <br /> Knowledge Accessible.</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We’re more than just an online bookstore. We are a community-driven platform designed to spark curiosity. Whether you are hunting for a rare classic or the latest bestseller, our goal is to provide a seamless discovery experience.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Reading connects us. It opens doors to new worlds, ideas, and perspectives. We are committed to fostering that connection for everyone, everywhere.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-teal-700 font-semibold">
                <BsBookHalf className="w-5 h-5" /> <span>Curated Collections</span>
              </div>
              <div className="flex items-center gap-2 text-blue-700 font-semibold">
                <BsPeopleFill className="w-5 h-5" /> <span>Community First</span>
              </div>
            </div>
          </div>

          {/* Visual/Decorative Block instead of image */}
          <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl p-10 h-full flex flex-col justify-center relative overflow-hidden shadow-lg border border-white/50">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <h3 className="text-2xl font-bold text-gray-800 relative z-10 mb-6">"A reader lives a thousand lives before he dies."</h3>
            <p className="text-gray-600 relative z-10 italic">— George R.R. Martin</p>
          </div>
        </div>
      </div>

      {/* 3. Offerings - Grid with Icons */}
      <div className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">What We Bring to Your Shelf</h2>
            <p className="text-gray-500 mt-4">Everything you need to fuel your reading habit.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BsBookHalf, title: 'Vast Library', desc: 'From timeless classics to modern hits.', color: 'text-blue-600' },
              { icon: BsLightbulb, title: 'Curated Ideas', desc: 'Handpicked lists for every mood.', color: 'text-yellow-500' },
              { icon: BsAward, title: 'Quality Reviews', desc: 'Honest, in-depth critiques.', color: 'text-teal-600' },
              { icon: BsPeopleFill, title: 'Community', desc: 'Join discussions and book clubs.', color: 'text-purple-600' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <item.icon className={`w-10 h-10 mb-6 ${item.color}`} />
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. CTA - Simple & Direct */}
      <div className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-blue-600 rounded-3xl p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
          {/* Abstract Circles Background */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
            <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-white/20 rounded-full transform rotate-12"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Start Your Next Chapter Today</h2>
          <p className="text-blue-100 mb-10 text-lg relative z-10">Whether you're looking for inspiration, knowledge, or escape, we have the perfect book waiting for you.</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Link to="/shop" className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-gray-50 transition-colors">
              Browse Books <BsArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;