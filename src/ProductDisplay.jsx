
import './css/product.css';
//Inline css styling
// External stylesheet
// 'Object' format {}
// Accessibility

const ProductDisplay = () => { // The name of the Component function
  return (
    <div>
        <div className='divHeader' style={{textAlign:'center',color:'green'}}>
            <h3>This is a catalog of all the products we sell on our website.</h3>
        </div>
        <section id="sectionBody" style={{display:'flex',gap:'10px', justifyContent:'space-between', padding:'15px'}}>
          <table className='tblProducts'>
            <thead>
              <tr style={{border:'1px solid green'}}>
                <th>Bag</th>
                <th>Price</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Sky blue Leather Shoulder Bag
                <img src="https://media.istockphoto.com/id/1365118618/photo/blue-fashion-purse-handbag-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=R6fr0o1pCkSFP8Q6q84M8NraLXXlMHtNG93fx8G_NYY=" alt="an expensive bag" height={350} width={400}/>
                </td>
                <td>
                  #45,000
                  </td>
                <td>
                  Handbag made of leather
                  </td>
              </tr>
              <tr>
                <td>
                Silicone yellow Medium Shoulder Bag
                <img src="https://media.istockphoto.com/id/1363767151/photo/yellow-leather-bag-of-isolated-woman-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=DOSdVtPF2BZzwYDVbjdEefSdYYJtH82e0ZUItYTMAis=" alt="another expensive bag" height={350} width={400}/>
                </td>
                <td>
                  #40,000
                  </td>
                <td>
                  Medium-sized leather handbag
                </td>
              </tr>
            </tbody>
          </table>
             
             
        </section>
    </div>
        

  );
};

export default ProductDisplay;