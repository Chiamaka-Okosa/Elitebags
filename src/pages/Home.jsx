import React from 'react';
import '../css/homepage.css';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className ="App">
     <span style={{color:'green',textDecoration:'underline'}}>Elite Bags</span>,
    <br/><br/>
    
    <div id="home-display">
      <Link to='/products'>
      <img src="https://media.istockphoto.com/id/1365118618/photo/blue-fashion-purse-handbag-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=R6fr0o1pCkSFP8Q6q84M8NraLXXlMHtNG93fx8G_NYY=" alt="Hand bag" width="500px" height="400px" />
      </Link>
      <img src="https://media.istockphoto.com/id/1363767151/photo/yellow-leather-bag-of-isolated-woman-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=DOSdVtPF2BZzwYDVbjdEefSdYYJtH82e0ZUItYTMAis=" alt="another expensive bag" width="500px" height="400px"/>

     </div>
     <p style={{fontSize:28}}>
     Let your bag speak for you.
    </p>
    <div style={{backgroundColor:'red', border:'2px solid gray', minHeight:7}}>
    </div>
  </div>
  )
}

export default Home