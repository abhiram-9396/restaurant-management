import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

function Home(){
  return (
    <div>
      <div style={{ textAlign: 'center',justifyContent: 'center' }}>
      <h3 className='m-4'>Welcome to RESTRO</h3>
      {/* <Addmenu/> */}
      <Link to="/Addmenu">
        <button className='btn btn-primary'>Add Menu</button>
      </Link>
      </div>
    </div>
  )
}

export default Home;