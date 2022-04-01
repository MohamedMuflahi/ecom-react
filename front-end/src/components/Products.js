import React,{useState,useEffect} from 'react'
import Card from './Card';

import "./Products.css"
function Products() {
  const [products, setProducts ] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCat, setSearchCat] = useState("men's clothing")

  useEffect(() => {
   fetch("http://localhost:9292/products")
   .then(resp=> resp.json())
   .then(data => {
     console.log(data)
    setProducts(data)
   })
  }, [])
  const itemsToDipslay = products.filter(item => item.category.toLowerCase() == searchCat.toLowerCase()).filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <>
      <h1 id="productheader">Our Products</h1>
        <div id="SearchContainer">
      <div className="items">
        <form>
            <input 
              type="text"
        id="search"
        placeholder="Type a product to search..."
        value={searchTerm}
        onChange={(e)=> setSearchTerm(e.target.value)}
            />
        </form>
      </div>
      <div className="items" >
        <select id="downbar" defaultValue={"men's clothing"} onChange={(e)=> setSearchCat(e.target.value)}>
          <option value="men's clothing">men's clothing</option> 
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
          <option value="women's clothing">women's clothing</option>
        </select>
      </div>
    </div>
    <ul className='cards'>
    {itemsToDipslay.map(e=>{
      return(
        <Card key={e.id} item={e}></Card>
      )
    })}
    </ul>
    </>
  );
}

export default Products