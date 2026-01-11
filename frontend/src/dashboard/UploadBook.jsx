import React, { useState } from "react";
import { Button, Label, TextInput, Select, Textarea } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function UploadBook() {
   const navigate = useNavigate();
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

  const [selectedBookcategory, setSelectedBookcategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectValue = (event) => {
    console.log(event.target.value);
    setSelectedBookcategory(event.target.value);
  };
//   handel book submition 
const handelbookSubmit=(event)=>{
    event.preventDefault();
    const form = event.target;
    const bookTitle= form.bookTitle.value;
    const authorName= form.authorName.value;
    const imagURL= form.imagURL.value;
    const category= form.CategoryName.value;
    const bookDescription= form.bookDescription.value;
    const bookURL= form.bookURL.value;
    const price= form.price.value;
    const bookobj ={
           bookTitle,authorName,imagURL,category,bookDescription,bookURL,price
    }
    console.log(bookobj)
    fetch(`${import.meta.env.VITE_API_URL}/uploadBook`,
        {
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify(bookobj)
        }).then(res=>res.json()).then(data=>{alert("Book Upload successfully")})
        navigate(`/admin/dashboaed/manage`);
}

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload a Book</h2>

      <form onSubmit={handelbookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="bookTitle">
                Book Name
              </Label>
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book Name"
              required
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="authorName">
                Author Name
              </Label>
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author Name"
              required
            />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imagURL" value="Book Image URL">
                Image URL
              </Label>
            </div>
            <TextInput
              id="imagURL"
              name="imagURL"
              type="text"
              placeholder="Book Image URL"
              required
            />
          </div>

          {/* Category dropdown */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category">
                Category
              </Label>
            </div>
            <Select
              name="CategoryName"
              id="inputState"
              className="w-full rounded"
              value={selectedBookcategory}
              onChange={handleChangeSelectValue}
            >
              {/* Map over the categories and create option elements */}
              {bookCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* bookDescription */}
        <div>
          <div>
            <Label htmlFor="bookDescription" value="book Description" />
          </div>
          <Textarea
            className="w-full"
            id="bookDescription"
            name="bookDescription"
            placeholder=" write your book Description"
            rows={5}
            required
          />
        </div>
{/* bookURL */}
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="bookURL" value="bookURL">
              Book URL
            </Label>
          </div>
          <TextInput
            id="bookURL"
            name="bookURL"
            type="text"
            placeholder="Book URL"
            required
          />
        </div>
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="price" value="price">
              Book Price
            </Label>
          </div>
          <TextInput
            id="price"
            name="price"
            type="price"
            placeholder="Book price"
            required
          />
        </div>
        <Button className="lg:w-1/2" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default UploadBook;
