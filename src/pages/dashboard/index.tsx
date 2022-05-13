import Footer from "components/Footer";
import Header from "components/Header";
import { useAuth } from "hooks/useAuth";
import { Redirect } from "react-router-dom";
import { Section } from "./section";

export function Dashboard() {

  return (
    <>
      <Header />
      <Section />
    </>
  )
}