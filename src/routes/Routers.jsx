
import Home from '../pages/Doctors/Home'
import Login from '../pages/Doctors/Login'
import Contacts from '../pages/Doctors/Contact'
import Signup from '../pages/Doctors/Signup'
import {Routes,Route} from 'react-router-dom'
import Service from '../pages/Doctors/Service'
import Doctors from '../pages/Doctors/Doctors'
import DoctorsDetails from '../pages/Doctors/DoctorsDetails'




const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/doctors' element={<Doctors/>} />
      <Route path='/doctors/:id' element={<DoctorsDetails/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Signup/>} />
      <Route path='/contact' element={<Contacts/>} />
      <Route path='/services' element={<Service/>} />
 
    </Routes>
  )
}

export default Routers
