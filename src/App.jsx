import {Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Doctors from './pages/Doctors'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Appointments from './pages/Appointments'
import Navbar from './Components/Navbar'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
    <Navbar/>
      <Routes>
      <Route>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/doctors/:speciality" element={<Doctors/>}/>
        <Route path="/my-appointments" element={<MyAppointments/>}/>
        <Route path="/my-profile" element={<MyProfile/>}/>
        <Route path="/appointments/:docId" element={<Appointments />}/>
      </Route>
    </Routes>
  
    </div>
  )
    
}

export default App
