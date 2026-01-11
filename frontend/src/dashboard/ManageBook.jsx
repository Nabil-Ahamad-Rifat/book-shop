import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Badge } from "flowbite-react";
import { Link } from "react-router-dom";
import { HiPencil, HiTrash, HiSearch, HiPlus, HiOutlineExclamationCircle } from 'react-icons/hi';

function ManageBook() {
  const [allbooks, setAllBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch books initially and after a delete/edit
  const fetchBooks = () => {
    fetch(`${import.meta.env.VITE_API_URL}/getbooks`)
      .then((res) => res.json())
      .then((data) => setAllBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = (id, name) => {
    if (!window.confirm(`Are you sure you want to delete "${name}"?`)) return;

    fetch(`/book/delete/${id}`, { method: "DELETE" })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete the book");
        return res.json();
      })
      .then(() => {
        fetchBooks();
      })
      .catch((error) => console.error("Error:", error));
  };

  const filteredBooks = allbooks.filter(book =>
    book.bookTitle?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 transition-all duration-300">

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Manage Books</h2>
          <p className="text-gray-400 mt-1 text-sm">Overview of your entire book inventory</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <HiSearch className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 placeholder-gray-400 transition-colors"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Link to="/admin/dashboard/upload" className="w-full md:w-auto">
            <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2.5 px-5 rounded-lg shadow-lg shadow-blue-500/30 transition-all transform hover:scale-105 active:scale-95">
              <HiPlus className="w-5 h-5" />
              Add Book
            </button>
          </Link>
        </div>
      </div>

      {/* 1. DESKTOP VIEW: Table (Hidden on Mobile) */}
      <div className="hidden md:block bg-gray-800 rounded-xl shadow-2xl border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <Table hoverable className="text-left text-sm text-gray-400 min-w-full">
            <TableHead className="text-xs uppercase bg-gray-900 text-gray-300">
              <TableRow className="bg-gray-900 border-b border-gray-700">
                <TableHeadCell className="py-4 bg-gray-900">No.</TableHeadCell>
                <TableHeadCell className="py-4 bg-gray-900">Book Title</TableHeadCell>
                <TableHeadCell className="py-4 bg-gray-900">Author</TableHeadCell>
                <TableHeadCell className="py-4 bg-gray-900">Category</TableHeadCell>
                <TableHeadCell className="py-4 bg-gray-900">Price</TableHeadCell>
                <TableHeadCell className="py-4 bg-gray-900 text-center">Actions</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody className="divide-y divide-gray-700">
              {filteredBooks.map((book, index) => (
                <TableRow key={book._id} className="bg-gray-800 hover:bg-gray-700/50 transition-colors duration-200 border-gray-700">
                  <TableCell className="whitespace-nowrap font-medium text-white px-6 py-4">
                    {index + 1}
                  </TableCell>
                  <TableCell className="whitespace-nowrap font-medium text-white px-6 py-4">
                    {book.bookTitle}
                  </TableCell>
                  <TableCell className="px-6 py-4">{book.authorName}</TableCell>
                  <TableCell className="px-6 py-4">
                    <Badge color="gray" className="w-max bg-gray-700 text-gray-300 border border-gray-600">
                      {book.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-6 py-4 font-bold text-emerald-400">৳{book.price}</TableCell>
                  <TableCell className="px-6 py-4">
                    <div className="flex justify-center gap-4">
                      <Link
                        to={`/admin/dashboard/edit/${book._id}`}
                        className="font-medium text-cyan-400 hover:text-cyan-300 transition-colors p-2 hover:bg-gray-700 rounded-full"
                        title="Edit Book"
                      >
                        <HiPencil size={20} />
                      </Link>
                      <button
                        onClick={() => handleDelete(book._id, book.bookTitle)}
                        className="font-medium text-red-400 hover:text-red-300 transition-colors p-2 hover:bg-gray-700 rounded-full"
                        title="Delete Book"
                      >
                        <HiTrash size={20} />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* 2. MOBILE VIEW: Cards (Hidden on Desktop) */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {filteredBooks.map((book) => (
          <div key={book._id} className="bg-gray-800 p-5 rounded-xl shadow-lg border border-gray-700 flex flex-col gap-3">
            {/* Card Header: Title & Price */}
            <div className="flex justify-between items-start gap-4">
              <h3 className="text-xl font-bold text-white leading-tight">{book.bookTitle}</h3>
              <span className="text-emerald-400 font-bold text-lg whitespace-nowrap">৳{book.price}</span>
            </div>

            {/* Meta: Author & Category */}
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <p>By <span className="text-gray-300">{book.authorName}</span></p>
              <span className="text-gray-600">•</span>
              <Badge color="gray" className="bg-gray-700 text-gray-300 border border-gray-600 px-2 py-0.5">
                {book.category}
              </Badge>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-700 my-2"></div>

            {/* Actions */}
            <div className="flex gap-3">
              <Link
                to={`/admin/dashboard/edit/${book._id}`}
                className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-cyan-400 py-2 rounded-lg transition-colors font-medium text-sm"
              >
                <HiPencil size={18} /> Edit
              </Link>
              <button
                onClick={() => handleDelete(book._id, book.bookTitle)}
                className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-red-400 py-2 rounded-lg transition-colors font-medium text-sm"
              >
                <HiTrash size={18} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredBooks.length === 0 && (
        <div className="p-12 text-center text-gray-500">
          <HiOutlineExclamationCircle className="mx-auto h-12 w-12 mb-4 opacity-20" />
          <p className="text-lg">No books found matching your search.</p>
        </div>
      )}

      {/* Footer Stats */}
      <div className="mt-4 text-right text-xs text-gray-500">
        Showing {filteredBooks.length} of {allbooks.length} total books
      </div>
    </div>
  );
}

export default ManageBook;
