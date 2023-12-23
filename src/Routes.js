import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Bag} from './pages/Bag';
import {About} from './pages/About';
import {Service} from './pages/Service';
import {Contact} from './pages/Contact';

export const Routes = () =>{
  return{
    <Router>
        <Switch>
            <Route path="/">
                <Bag/>
            </Route>
            <Route path=/bag/:bagId">
                <About/>
            </Route>
            <Route>
                <Service/>
            </Route>
            <Route>
                <Contact/>
            </Route>
        </Switch>
    </Router>
  }  
    }