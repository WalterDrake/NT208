
import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'

import { UserProfile } from './components/UserProfile'

function App() {


  return (
    <div className='h-screen bg-[#F0F7FF]'>
      <Sidebar />
      <Navbar />
      <Dashboard />


    </div>



  )
}

export default App
