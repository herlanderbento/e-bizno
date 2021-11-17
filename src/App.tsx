import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

import 'bootstrap/dist/css/bootstrap.css';
import  Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header/>
      <Routes />
    </BrowserRouter>
  );
}
