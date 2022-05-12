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
    route: "/sobre-nos",
    active: "is-Active",
  },
  // {
  //   id: uuid(),
  //   menu: "Leilão",
  //   route: "/leilao",
  //   active: "is-Active",
  // },
  {
    id: uuid(),
    menu: "Imóveis",
    route: "/imoveis",
    active: "is-Active",
  },
  {
    id: uuid(),
    menu: "Contactos",
    route: "/contactos",
    active: "is-Active",
  },
];
