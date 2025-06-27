import { useState } from 'react'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Filter from './Filter.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  
  <div className="bg-gray-100 flex flex-col gap-15 justify-center items-center">
    <Navbar/>
    <Hero/>
  <Filter/>
  </div>
  </>
  )
}
export default App
