import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLoaderData } from 'react-router-dom';
import { Button, Label, TextInput, Select, Textarea } from 'flowbite-react';

function Editebook() {
  const { id } = useParams();  // Get the book id from URL
  const { bookTitle, authorName, imagURL, category, bookDescription, bookURL, price } = useLoaderData();  // UseLoaderData to get book data
  const navigate = useNavigate();  // Navigate function to redirect user

  const [updatedBook, setUpdatedBook] = useState({
    bookTitle,
    authorName,
    imagURL,
    category,
    bookDescription,
    bookURL,
    price,
  });

  // Book categories list
  const bookCategories = [
    "Friction",
    "Non-Friction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Bibliography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children's Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];

  // Handle category change
  const handleChangeSelectValue = (event) => {
    setUpdatedBook((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  // Handle input field changes and update state
  const handleChangeInputValue = (e) => {
    const { name, value } = e.target;
    setUpdatedBook((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handelUpdate = (event) => {
    event.preventDefault();

    // Send updated book data to the backend (PATCH request)
    fetch(`${import.meta.env.VITE_API_URL}/book/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedBook), // Send updated book data
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Book updated successfully!');
        navigate(`/admin/dashboaed/manage`);  // Navigate to the manage page after update
      })
      .catch((err) => {
        console.error('Error updating book:', err);
        alert('Failed to update the book. Please try again.');
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Edit the Book Data</h2>

      <form onSubmit={handelUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* Book Title and Author Name */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <Label htmlFor="bookTitle" value="Book Name" className="mb-2 block" />
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book Name"
              value={updatedBook.bookTitle}  // Controlled input
              onChange={handleChangeInputValue}
            />
          </div>
          <div className="lg:w-1/2">
            <Label htmlFor="authorName" value="Author Name" className="mb-2 block" />
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author Name"
              value={updatedBook.authorName}  // Controlled input
              onChange={handleChangeInputValue}
            />
          </div>
        </div>

        {/* Book Image URL and Category */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <Label htmlFor="imagURL" value="Book Image URL" className="mb-2 block" />
            <TextInput
              id="imagURL"
              name="imagURL"
              type="text"
              placeholder="Book Image URL"
              value={updatedBook.imagURL}  // Controlled input
              onChange={handleChangeInputValue}
            />
          </div>
          <div className="lg:w-1/2">
            <Label htmlFor="CategoryName" value="Category" className="mb-2 block" />
            <Select
              name="CategoryName"
              id="inputState"
              className="w-full rounded"
              value={updatedBook.category}  // Controlled select
              onChange={handleChangeSelectValue}
            >
              {bookCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* Book Description */}
        <div>
          <Label htmlFor="bookDescription" value="Book Description" />
          <Textarea
            className="w-full"
            id="bookDescription"
            name="bookDescription"
            placeholder="Write your book description"
            rows={5}
            value={updatedBook.bookDescription}  // Controlled input
            onChange={handleChangeInputValue}
          />
        </div>

        {/* Book URL */}
        <div className="lg:w-1/2">
          <Label htmlFor="bookURL" value="Book URL" className="mb-2 block" />
          <TextInput
            id="bookURL"
            name="bookURL"
            type="text"
            placeholder="Book URL"
            value={updatedBook.bookURL}  // Controlled input
            onChange={handleChangeInputValue}
            required
          />
        </div>

        {/* Book Price */}
        <div className="lg:w-1/2">
          <Label htmlFor="price" value="Price" className="mb-2 block" />
          <TextInput
            id="price"
            name="price"
            type="text"
            placeholder="Book Price"
            value={updatedBook.price}  // Controlled input
            onChange={handleChangeInputValue}
            required
          />
        </div>

        <Button className="lg:w-1/2" type="submit">
          Update Book
        </Button>
      </form>
    </div>
  );
}

export default Editebook;
