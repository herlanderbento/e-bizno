import { Switch, Route } from 'react-router-dom'
import { About } from '../pages/about'
import { Auction } from '../pages/auction'
import { Contact } from '../pages/contact'
import { Home }  from '../pages/home'
import { Products } from '../pages/products'


 export default function routes(){
   return(
     <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/about" exact component={About}/>
       <Route path="/auction" exact component={Auction}/>
       <Route path="/property" exact component={Products}/>
       <Route path="/contacts" exact component={Contact}/>
     </Switch>
   )
 }