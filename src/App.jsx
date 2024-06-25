import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Navbar from './navbar/Navbar'
import { Route, Routes } from 'react-router-dom'

import Detective from './pages/Detective'
import Love from './pages/Love'
import Novel from './pages/Novel'
import History from './pages/History'
import ScienceFiction from './pages/ScienceFiction'
import More from './pages/More'
import Home from './pages/Home'

const menu = [
  { id: crypto.randomUUID(), name: "Home", adress: "/e-commerce/" },
  { id: crypto.randomUUID(), name: "Detective", adress: "/Detective" },
  { id: crypto.randomUUID(), name: "Love", adress: "/Love" },
  { id: crypto.randomUUID(), name: "Novel", adress: "/Novel" },
  { id: crypto.randomUUID(), name: "History", adress: "/History" },
  { id: crypto.randomUUID(), name: "Science Fiction", adress: "/ScienceFiction" },
  { id: crypto.randomUUID(), name: "More", adress: "/More" }];
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar menu={menu} />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Detective' element={<Detective />} />
        <Route path='/Love' element={<Love />} />
        <Route path='/Novel' element={<Novel />} />
        <Route path='/History' element={<History />} />
        <Route path='/ScienceFiction' element={<ScienceFiction />} />
        <Route path='/More' element={<More />} />


      </Routes>
      {/* <Routes>
        {
          menu.map((p)=>{
            <Route path={'/home'} element={<Home/>}/>

          })
        }
        
      </Routes> */}

    </>
  )
}

export default App
