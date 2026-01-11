import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsBook, BsPeople, BsUpload, BsGear, BsHouseDoorFill } from 'react-icons/bs';
import { Card } from 'flowbite-react';

function Dashboard() {
  const [bookCount, setBookCount] = useState(0);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/getbooks`)
      .then(res => res.json())
      .then(data => setBookCount(data.length))
      .catch(err => console.error("Failed to fetch stats", err));
  }, []);

  const stats = [
    { title: 'Total Books', count: bookCount, icon: BsBook, color: 'text-blue-600', bg: 'bg-blue-100' },
    { title: 'Registered Users', count: '10+', icon: BsPeople, color: 'text-green-600', bg: 'bg-green-100' }, // Placeholder
    { title: 'Total Orders', count: '25', icon: BsGear, color: 'text-purple-600', bg: 'bg-purple-100' }, // Placeholder
  ];

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      {/* Header with Home Link */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <Link to="/" className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors font-medium">
          <BsHouseDoorFill /> Back to Home
        </Link>
      </div>

      {/* 1. Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className={`p-4 rounded-full ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-8 h-8" />
            </div>
            <div>
              <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
              <h3 className="text-3xl font-bold text-gray-900">{stat.count}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* 2. Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Upload Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <BsUpload className="text-blue-600" /> Quick Upload
          </h3>
          <p className="text-gray-500 mb-6">Add a new book to the inventory instantly.</p>
          <Link to="/admin/dashboaed/upload">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
              <BsUpload /> Upload Book
            </button>
          </Link>
        </div>

        {/* Management Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <BsGear className="text-gray-600" /> Inventory Management
          </h3>
          <p className="text-gray-500 mb-6">Edit or delete existing books from your collection.</p>
          <Link to="/admin/dashboaed/manage">
            <button className="w-full bg-gray-900 hover:bg-black text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
              Manage Books
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-12 bg-blue-50 p-6 rounded-xl border border-blue-100">
        <h4 className="font-bold text-blue-800 mb-2">💡 Admin Tip</h4>
        <p className="text-blue-700 text-sm">Make sure to check the "Manage Books" section regularly to update stock levels and prices.</p>
      </div>

    </div>
  );
}

export default Dashboard;
