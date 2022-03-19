import { v4 as uuid } from "uuid";

export const allData = [
  {
    id: uuid(),
    menu: "Página inicial",
    route: "/",
    active: "is-Active",
  },
  {
    id: uuid(),
    menu: "Sobre nós",
    route: "/about",
    active: "is-Active",
  },
  {
    id: uuid(),
    menu: "Leilão",
    route: "/auction",
    active: "is-Active",
  },
  {
    id: uuid(),
    menu: "Imóveis",
    route: "/property",
    active: "is-Active",
  },
  {
    id: uuid(),
    menu: "Contacto",
    route: "/contact",
    active: "is-Active",
  },
];
