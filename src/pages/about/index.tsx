import { Hero } from "components/Hero";
import { Section } from "./section";

import Header from "components/Header";
import Footer from "components/Footer";

export function About() {
  return (
    <>
      <Header />
      <Hero title="Sobre nós" page="Sobre-nós" />
      <Section />
      <Footer />
    </>
  );
}
