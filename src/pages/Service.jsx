
import React from 'react'



const Service = () => {
  return (
    <section id="sectionBody" style={{display:'flex',gap:'10px', justifyContent:'space-between', padding:'15px'}}>
    <div ClassName="App"> 
      <h2 style={{color:'blue',textDecoration:'underline'}}>Our Service</h2>
      <br/><br/>
     <img src="https://media.istockphoto.com/id/1365118618/photo/blue-fashion-purse-handbag-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=R6fr0o1pCkSFP8Q6q84M8NraLXXlMHtNG93fx8G_NYY=" alt="Hand bag" width="500px" height="400px" />
     <img src="https://media.istockphoto.com/id/1363767151/photo/yellow-leather-bag-of-isolated-woman-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=DOSdVtPF2BZzwYDVbjdEefSdYYJtH82e0ZUItYTMAis=" alt="another expensive bag" width="500px" height="400px"/>
     <p style={{fontSize:28}}></p>
      <form>
        
        
    <label for="condition">Condition</label> 
     <select id="condition">
       <option>Brand new</option>
       <option>Refurbished</option>
       <option>Used</option>
     </select>
    <p/>
    <h4 style={{backgroundColor:'orangered', padding:'10px' }}>Bag variants</h4>
    <input type='checkbox' id='skyblueleathershoulderbag' value='skyblueleathershoulderbag'>Sky Blue Leather Shoulder Bag</input>
    <p/>
    <input type='checkbox' id='siliconeyellowmediumshoulderbag' value='siliconeyellowmediumshoulderbag'>Silicone Yellow Medium Shoulder Bag</input>
    <p/>

    <section>
      <h5 style={{backgroundColor:'green', fontSize: '24px', color:'blanchedalmond',padding:'10px',marginBottom: '15px' }}
      >Delivery option</h5>
      <input type='radio' id='pickup' name='delivery' value='pickup'/>
      <label for='pickup'>Pick up</label>
      <input type='radio' id='house_delivery' name='delivery'/>
      <label for='house_delivery'>Home delivery</label>
      <input type='radio' id='express_house_delivery' name='delivery'/>
      <label for='express_house_delivery'>Express Home delivery</label>
    </section>

    <p>
      <span style={{color:'green',textDecoration:'underline'}}>Message:</span>
      <br/>
      <textarea name="message" id="" cols="30" rows="10"></textarea>
    </p>
    <input button type='reset' value='Reset'/>  <button type='submit'>Submit</button>


        </form>
        </div>
        </section>
    



  )
}

export default Service