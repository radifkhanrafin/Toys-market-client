import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Component/Header/Navbar'
import Footer from './Component/Footer/Footer'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <div className='container mx-auto'>
      <Navbar></Navbar>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      ></ToastContainer>
      <div className='min-h-[calc(100vh-60px)]'>
        <Outlet></Outlet>

      </div>
      <Footer></Footer>

    </div>
  )
}

export default App
