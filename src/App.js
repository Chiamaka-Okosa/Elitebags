
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layouts/Layout';
import Home from './pages/Home';
import ProductDisplay from './ProductDisplay';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';


//NPM: Node Package Manager

// JSX is a syntax expression for JavaScript. It was written to be used by React. following is a simple example of JSX:
 
//USE: Its used to write HTML in React. 

function App() {
  // The component name => App

  return (     
    // The component Body
   <BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout/>}>
       <Route index element={<Home />} />
       <Route path="products" element={<ProductDisplay />} />
       <Route path="*" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/service" element={<Service />} />
       <Route path="contact" element={<Contact />} />
     </Route>
     
   </Routes>
   </BrowserRouter>
  );
  
  // Pixels, Percentage %, em
}

export default App;
