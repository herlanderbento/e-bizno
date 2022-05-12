import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Routes from "routes";
import GlobalStyle from "styles/global";

import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "contexts/AuthContextProvider";

export default function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <ToastContainer />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </AuthContextProvider>
  );
}
