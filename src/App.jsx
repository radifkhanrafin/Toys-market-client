import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Component/Header/Navbar'
import Footer from './Component/Footer/Footer'

function App() {

  return (
    <div className='container mx-auto'>
      <Navbar></Navbar>
      <div className='min-h-[calc(100vh-60px)]'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
