import React,{useState,useEffect} from 'react'
import Card from './Card';
import "./Products.css"
function Products() {
  const [products, setProducts ] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCat, setSearchCat] = useState('Home')
  useEffect(() => {
   fetch("http://localhost:9292/products")
   .then(resp=> resp.json())
   .then(data => {
    setProducts(data)
   })
  }, [])
  const itemsToDipslay = products.filter(item => item.category.toLowerCase() == searchCat.toLowerCase()).filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <>
        <div id="SearchContainer">
      <div className="items">
        <form>
        <label htmlFor="search">Search Products:    </label>
            <input 
              type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e)=> setSearchTerm(e.target.value)}
            />
        </form>
      </div>
      <div className="items">
        <select defaultValue={'Home'} onChange={(e)=> setSearchCat(e.target.value)}>
          <option value="Beauty">Beauty</option> 
          <option value="Home">Home</option>
          <option value="Furniture">Furniture</option>
          <option value="Kids">Kids</option>
          <option value="Toys">Toys</option>
          <option value="Shoes">Shoes</option>
          <option value="Jewelry">Jewelry</option>
          <option value="Gifts">Gifts</option>
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