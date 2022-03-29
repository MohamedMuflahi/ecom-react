import React from 'react'
import Card from './Card';
import "./Products.css"
function Products() {
  return (
    <>
        <div id="SearchContainer">
      <div className="items">
        <form>
          <label>
            ItemName: 
            <input type="text" name="name" />
          </label>
        </form>
      </div>
      <div className="items">
        <select>
          <option value=""></option>
          <option value=""></option>
          <option selected value=""></option>
          <option value=""></option>
        </select>
      </div>
    </div>
    <ul className='cards'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </ul>
    </>
  );
}

export default Products