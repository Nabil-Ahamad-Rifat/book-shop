import React, { useEffect, useState } from 'react'
import BookCard from '../../component/BookCard';

function FavoriteBook() {
    const [books, setbooks]= useState([]);
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/getbooks`).then(res=>res.json()).then(data=> setbooks(data.slice(0,10)))
    },[])
  return (
    <div>
        <BookCard book={books} headline='Best Selling Book.. ' />
    </div>
  )
}

export default FavoriteBook