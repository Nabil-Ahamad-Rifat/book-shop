import React from 'react'
import Banner from '../../component/Banner'
import FavoriteBook from './FavoriteBook'
import FavBookBanner from './FavBookBanner'
import PromoBanner from './PromoBanner'
import OtherBook from './OtherBook'
import Review from './Review'
// import app.css

function Home() {
  return (
    <div>
      {/* <h1>Welcome to the Home Page</h1> */}
      <Banner/>
      <FavoriteBook/>
      <FavBookBanner/>
      <PromoBanner/>
      <OtherBook/>
      <Review/>
    </div>
  )
}

export default Home