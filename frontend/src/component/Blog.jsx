import React, { useState } from 'react';
import { Spinner } from 'flowbite-react';
import { BsSearch, BsArrowRight, BsCalendar, BsPerson } from 'react-icons/bs';

const Blog = () => {
  // Static Blog Data
  const allPosts = [
    {
      id: 1,
      title: "Top 10 Must-Read Books of 2025",
      excerpt: "Discover the literary gems that are taking the world by storm this year. From gripping thrillers to heartwarming memoirs.",
      category: "Recommendations",
      author: "Sarah J.",
      date: "Jan 10, 2026",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "The Art of Habit Building",
      excerpt: "Learn how small changes in your daily routine can lead to massive transformation over time. Based on Atomic Habits.",
      category: "Self-Help",
      author: "Mark Manson",
      date: "Jan 05, 2026",
      image: "https://images.unsplash.com/photo-1499750310159-5254f4cc1529?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "How Reading Improves Mental Health",
      excerpt: "Studies show that reading for just 6 minutes a day can reduce stress by up to 68%. Here is the science behind it.",
      category: "Wellness",
      author: "Dr. Emily",
      date: "Dec 28, 2025",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Exploring the World Through Fiction",
      excerpt: "Travel without moving. How international fiction opens doors to new cultures, perspectives, and histories.",
      category: "Fiction",
      author: "Alex R.",
      date: "Dec 15, 2025",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Coding & Coffee: A Developer's Reading List",
      excerpt: "Technical books don't have to be boring. Here are 5 engaging reads every programmer should have on their shelf.",
      category: "Tech",
      author: "Dev Nabil",
      date: "Nov 30, 2025",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Classic Literature: Why It Still Matters",
      excerpt: "Are the classics outdated? We argue that their themes of love, betrayal, and ambition are more relevant than ever.",
      category: "Classics",
      author: "Prof. Dumbledore",
      date: "Nov 20, 2025",
      image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtering Logic
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Extract unique categories
  const categories = ["All", ...new Set(allPosts.map(post => post.category))];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-900">

      {/* Header / Hero */}
      <div className="bg-teal-700 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
        <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto">
          Insights, reviews, and stories from the world of books.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">

        {/* Main Content: Blog Feed */}
        <div className="lg:w-2/3">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPosts.map(post => (
                <div key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col">
                  {/* Image */}
                  <div className="h-48 overflow-hidden relative group">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal-700 uppercase tracking-wide">
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                      <span className="flex items-center"><BsCalendar className="mr-1" /> {post.date}</span>
                      <span className="flex items-center"><BsPerson className="mr-1" /> {post.author}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-teal-600 transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 bg-transparent flex-grow">
                      {post.excerpt}
                    </p>
                    <button className="flex items-center text-teal-600 font-semibold text-sm hover:underline mt-auto">
                      Read Story <BsArrowRight className="ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-500">
              <p className="text-xl">No posts found matching your search.</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3 space-y-8">

          {/* Search Widget */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold mb-4">Search</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              />
              <BsSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Categories Widget */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <div className="flex flex-col space-y-2">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === cat ? 'bg-teal-50 text-teal-700' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  {cat} <span className="float-right text-gray-400 text-xs bg-gray-100 px-2 py-0.5 rounded-full">{cat === "All" ? allPosts.length : allPosts.filter(p => p.category === cat).length}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Recent Posts Widget */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
            <div className="space-y-4">
              {allPosts.slice(0, 3).map(post => (
                <div key={post.id} className="flex gap-4 group cursor-pointer">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-teal-600 leading-snug line-clamp-2">{post.title}</h4>
                    <span className="text-xs text-gray-400 mt-1 block">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tags Cloud */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {['#Books', '#Tech', '#Lifestyle', '#Habits', '#Reading', '#Future'].map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full cursor-pointer hover:bg-teal-100 hover:text-teal-700 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Blog;