import { Switch, Route } from "react-router-dom";
import { About } from "pages/about";
import { Contacts } from "pages/contacts";
import { Home } from "pages/home";
import { Property } from "pages/property";
import { Properties } from "pages/properties";
import { Login } from "pages/login";
import { SignUp } from "pages/signup";
import { Forgot } from "pages/forgot";
import { Profile } from "pages/profile";
import { Dashboard } from "pages/dashboard";


export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sobre-nos" exact component={About} />
      {/* <Route path="/leilao" exact component={Auction} /> */}
      <Route path="/imoveis" exact component={Properties} />
      <Route path="/propriedades/id/:id" exact component={Property} />
      <Route path="/contactos" exact component={Contacts} />
      <Route path="/login" exact component={Login} />
      <Route path="/cadastrar" exact component={SignUp} />
      <Route path="/forgot" exact component={Forgot} />
      <Route path="/perfil" exact component={Profile} />
      <Route path="/admin" exact component={Dashboard} />
    </Switch>
  );
}
