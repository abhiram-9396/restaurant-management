import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import '../App.css';

export default function Addmenu() {
    const [inputname, setinputname] = useState("");
    const [itemlist, setitemlist] = useState([]);
    const [inputRate, setinputRate] = useState(0);
    const [Category, setCategory] = useState("");
    const [Menu, setMenu] = useState([]);
  
      function handleChange(event) {
        var newvalue = event.target.value;
        setinputname(newvalue);
      }
  
      function handleChangeRate(event){
        var newvalue = event.target.value;
        setinputRate(newvalue);
      }
  
      function handleChangeCategory(event){
        var newvalue = event.target.value;
        setCategory(newvalue);
      }
  
      function saveitemrates(e)
      {
        e.preventDefault();
        if(inputname !== "" && inputRate!== 0)
        {
          setitemlist((previtems) => {
            return [...previtems, {"item":inputname , "rate": inputRate}];
          });
        }
        console.log(itemlist);
        setinputname("");
        setinputRate("");
  
      }
  
      function Addtomenu(e){
        e.preventDefault();
        setMenu((previtems) => {
          return [...previtems, {"Category":Category, "Menu":itemlist }];
        });
        console.log(Menu);
      }
  
    return (
      <div style={{ textAlign: 'center',justifyContent: 'center' }}>
          <div className="d-flex justify-content-center align-items-center" style={{width:'100vw'}}>
          <Card className='m-4' style={{ width: '20rem', padding: '20px'}}>
            <form onSubmit={Addtomenu}>
              <label className='m-4'>Add Category</label>
              <input className='homeinput' required placeholder="Category" type="text" onChange={handleChangeCategory} value={Category}/> <br/>
              <label className='mt-3'>Add Items</label>
  
              <Card className='m-3' style={{ padding: '20px'}}>
              {/* Adding items */}
                <div>
  
                  <input className='homeinput m-3' placeholder="Add Item" type="text" onChange={handleChange} value={inputname}/>
                  
                  <input className='homeinput m-3' placeholder="Add Item Rate" type="number" onChange={handleChangeRate} value={inputRate}/>
                  
                  <button type='submit' className='btn btn-primary m-2' onClick={saveitemrates}>
                    <span>+</span>
                  </button>
  
                </div>
              </Card>
  
              {/* Displaying items */}
              <div>
                <ul>
                  {/* <li>A Item </li> */}
                  {itemlist.map((element) => {
                    return {element} && <li>
                      <span>{element.item} -- </span>
                      <span>{element.rate}</span>$                  
                     </li>;
                  })}
                </ul>
              </div>
  
              <br/>
              <button className='btn btn-primary m-4' style={{width: '5rem'}}>Add</button>
            </form>
          </Card>
          </div>
        </div>
    )
}
