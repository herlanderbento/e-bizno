import { Section } from "./Section";
import { RecentProperties } from "./RecentProperties";
import { Hero } from "components/Hero";

export function Property() {
  return (
    <>
      <Hero title="Imóvel" page="Imóvel" />
      <Section />
      <RecentProperties />
    </>
  );
}
