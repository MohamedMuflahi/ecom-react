import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Products from '../components/Products';

function Home() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div>
      <Navbar/>
      <Hero />
      <hr id="pagebreak"></hr>
      <Products />
    </div>
  )
}

export default Home