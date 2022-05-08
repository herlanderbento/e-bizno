import Header from "components/Header";
import Footer from "components/Footer";

import { Auction } from "./Auction";
import { Hero } from "./Hero";
import { Info } from "./Info";
import { InfoAuction } from "./InfoAuction";
import { Looking } from "./Looking";
import { OtherInfo } from "./OtherInfo";
import { Section } from "./Section";
import { Subscribe } from "./Subscribe";

export function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Info />
      <Section />
      <OtherInfo />
      <InfoAuction />
      <Auction />
      <Looking />
      <Subscribe />
      <Footer />
    </>
  );
}
