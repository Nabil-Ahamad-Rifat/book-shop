import React, { useEffect, useState } from 'react'
import BookCard from '../../component/BookCard';
import FavoriteBook from './FavoriteBook';

function OtherBook() {
  const[book , setbooks]= useState([]);

  
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/getbooks`).then(res=>res.json()).then(data=>setbooks(data.slice(4,100)));
  },[])
  return (
    <div>

      <BookCard book={book} headline='Other Book.. ' />
    </div>

  )
}

export default OtherBook