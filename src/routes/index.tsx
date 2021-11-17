import { Switch, Route } from 'react-router-dom'
import { About } from '../pages/About'
import { Auction } from '../pages/Auction'
import { Contact } from '../pages/Contact'
import { Home}  from '../pages/Home'
import { Products } from '../pages/Products'

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