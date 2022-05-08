import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul{
    list-style-type: none;
  }

  a{
    text-decoration: none;
  }

  :root{
    --dark: #2e3746;
    --primary: #7c6ee4;
    --dark-blue: #2c3746;
    --light-blue: #272b38;
    --light: #f1f6f7;
    --light-primary: #f8f9fa;
    --secondary: #6d7175;
    --dark-secondary: #181d24;
    --text: #62606c;
    --text-dark: #677788;

    --font-primary: 'Jost', sans-serif !important;
    --font-secondary: 'Inter', sans-serif !important;
    --font-tertiary: 'Roboto', sans-serif !important;
    --font-logo: "Pacifico", sans-serif !important;
  }

  html, body{
    font-size: 14px;
    font-family: 'Jost', sans-serif;
    color: var(--dark);
  }

  /* Start adding margin */

.my-0,
.m-0,
.mt-0 {
    margin-top: 0px !important;
}

.my-10,
.m-10,
.mt-10 {
    margin-top: 10px !important;
}

.my-20,
.m-20,
.mt-20 {
    margin-top: 20px !important;
}

.my-30,
.m-30,
.mt-30 {
    margin-top: 30px !important;
}

.my-40,
.m-40,
.mt-40 {
    margin-top: 40px !important;
}

.my-50,
.m-50,
.mt-50 {
    margin-top: 50px !important;
}

.my-auto,
.m-auto,
.mt-auto {
    margin-top: auto !important;
}

.mx-0,
.m-0,
.mr-0 {
    margin-right: 0px !important;
}

.mx-10,
.m-10,
.mr-10 {
    margin-right: 10px !important;
}

.mx-20,
.m-20,
.mr-20 {
    margin-right: 20px !important;
}

.mx-30,
.m-30,
.mr-30 {
    margin-right: 30px !important;
}

.mx-40,
.m-40,
.mr-40 {
    margin-right: 40px !important;
}

.mx-50,
.m-50,
.mr-50 {
    margin-right: 50px !important;
}

.mx-auto,
.m-auto,
.mr-auto {
    margin-right: auto !important;
}

.my-0,
.m-0,
.mb-0 {
    margin-bottom: 0px !important;
}

.my-10,
.m-10,
.mb-10 {
    margin-bottom: 10px !important;
}

.my-20,
.m-20,
.mb-20 {
    margin-bottom: 20px !important;
}

.my-30,
.m-30,
.mb-30 {
    margin-bottom: 30px !important;
}

.my-40,
.m-40,
.mb-40 {
    margin-bottom: 40px !important;
}

.my-50,
.m-50,
.mb-50 {
    margin-bottom: 50px !important;
}

.my-auto,
.m-auto,
.mb-auto {
    margin-bottom: auto !important;
}

.mx-0,
.m-0,
.ml-0 {
    margin-left: 0px !important;
}

.mx-10,
.m-10,
.ml-10 {
    margin-left: 10px !important;
}

.mx-20,
.m-20,
.ml-20 {
    margin-left: 20px !important;
}

.mx-30,
.m-30,
.ml-30 {
    margin-left: 30px !important;
}

.mx-40,
.m-40,
.ml-40 {
    margin-left: 40px !important;
}

.mx-50,
.m-50,
.ml-50 {
    margin-left: 50px !important;
}

.mx-auto,
.m-auto,
.ml-auto {
    margin-left: auto !important;
}


/* end adding margin */


/* Start adding padding */

.py-0,
.p-0,
.pt-0 {
    padding-top: 0px !important;
}

.py-10,
.p-10,
.pt-10 {
    padding-top: 10px !important;
}

.py-20,
.p-20,
.pt-20 {
    padding-top: 20px !important;
}

.py-30,
.p-30,
.pt-30 {
    padding-top: 30px !important;
}

.py-40,
.p-40,
.pt-40 {
    padding-top: 40px !important;
}

.py-50,
.p-50,
.pt-50 {
    padding-top: 50px !important;
}

.py-auto,
.p-auto,
.pt-auto {
    padding-top: auto !important;
}

.px-0,
.p-0,
.pr-0 {
    padding-right: 0px !important;
}

.px-10,
.p-10,
.pr-10 {
    padding-right: 10px !important;
}

.px-20,
.p-20,
.pr-20 {
    padding-right: 20px !important;
}

.px-30,
.p-30,
.pr-30 {
    padding-right: 30px !important;
}

.px-40,
.p-40,
.pr-40 {
    padding-right: 40px !important;
}

.px-50,
.p-50,
.pr-50 {
    padding-right: 50px !important;
}

.px-auto,
.p-auto,
.pr-auto {
    padding-right: auto !important;
}

.py-0,
.p-0,
.pb-0 {
    padding-bottom: 0px !important;
}

.py-10,
.p-10,
.pb-10 {
    padding-bottom: 10px !important;
}

.py-20,
.p-20,
.pb-20 {
    padding-bottom: 20px !important;
}

.py-30,
.p-30,
.pb-30 {
    padding-bottom: 30px !important;
}

.py-40,
.p-40,
.pb-40 {
    padding-bottom: 40px !important;
}

.py-50,
.p-50,
.pb-50 {
    padding-bottom: 50px !important;
}

.py-auto,
.p-auto,
.pb-auto {
    padding-bottom: auto !important;
}

.px-0,
.p-0,
.pl-0 {
    padding-left: 0px !important;
}

.px-10,
.p-10,
.pl-10 {
    padding-left: 10px !important;
}

.px-20,
.p-20,
.pl-20 {
    padding-left: 20px !important;
}

.px-30,
.p-30,
.pl-30 {
    padding-left: 30px !important;
}

.px-40,
.p-40,
.pl-40 {
    padding-left: 40px !important;
}

.px-50,
.p-50,
.pl-50 {
    padding-left: 50px !important;
}

.px-auto,
.p-auto,
.pl-auto {
    padding-left: auto !important;
}

 
`;
