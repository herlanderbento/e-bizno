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
       <Route path="/leilão" exact component={Auction}/>
       <Route path="/imóveis" exact component={Products}/>
       <Route path="/contactos" exact component={Contact}/>
     </Switch>
   )
 }