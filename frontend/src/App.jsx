
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import FooterHM from './component/FooterHM'

function App() {


  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>

    <Outlet/>
    </div>
    <FooterHM/>
    </>
  )
}

export default App