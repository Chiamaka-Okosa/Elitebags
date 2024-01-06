import {useRef} from 'react'


const Contact = () => {
  const form = useRef()
  const sendEmail = () => {};
  return (
  <section id="sectionBody" style={{display:'flex',gap:'10px', justifyContent:'space-between', padding:'15px'}}>
    <div className="container">
      <h2 style={{color:'blue',textDecoration:'underline'}}>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail}
      className="--form-control--card --flex-center --dir-column">
        <br/><br/>
     <img src="https://media.istockphoto.com/id/1441262452/photo/communication-and-technology-concept-hand-putting-wooden-block-cube-symbol-telephone-email.webp?b=1&s=170667a&w=0&k=20&c=FtxQlZeGn__5ZHpc5zi9tx0GVTDZuZQoQcHT7mxDY4Q="
  alt="Contact Page" width="700px" height="150px" />
     
     <p style={{fontSize:28}}></p>
        <a href="mailto:elitebags@egroup.com">elitebags@egroup.com</a><br/>"
    <a href="tel:+1255-333-444"> Call us</a><br/>
        <p><input type="text" placeholder='Full Name' name='user_name' required/></p>
        <p><input type="email" placeholder='Email' name='user_email' required/></p>
        <p><input type="text" placeholder='Subject' name='subject' required/></p>

        <textarea name="message" id="" cols="30" rows="10"></textarea>
        <p><button type='submit' className="--btn--btn-primary">Send Message</button></p>
      </form>
    </div>
  
  </section>

    
  
   
    
    
  )
}

export default Contact
