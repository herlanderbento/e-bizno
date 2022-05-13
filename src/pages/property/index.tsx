import Header from "components/Header";
import Footer from "components/Footer";

import { Hero } from "components/Hero";
import { Section } from "./Section";
import { RecentProperties } from "./RecentProperties";

export function Property() {
  return (
    <>
      <Header />
      <Hero title="Imóvel" page="Imóvel" />
      <Section />
      {/* <RecentProperties /> */}
      <Footer />
    </>
  );
}
