import { useState } from "react";
import { NavLink, TabContent, TabPane } from "reactstrap";
import { SectionContent } from "./styles";
import { BsPersonBadge } from 'react-icons/bs'
import { RiHome4Line, RiLockPasswordLine, RiProductHuntLine } from 'react-icons/ri'
import { PersonInfo } from "../personInfo";
import { ChangePassword } from "../changePassword";
import { RegisterProducts } from "../registerProducts";
import { BiWallet } from "react-icons/bi";
import { Wallet } from "../wallet";
import { Container } from "styles/container";
import { Properties } from "../properties";


export function Section() {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <SectionContent>
      <div className="banner">
        <div className="container">
          <div className="info">
            <h2>Informações do perfil</h2>
            <span>Conta | Perfil</span>
          </div>
        </div>
      </div>
      <div className="profile-info">
        <Container>
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-4">
              <div className="profile-info-items">
                <div className="profile-info-header">
                  <div className="avatar">
                    <img src="/assets/images/avatar/avatar-img-01.jpg" alt="" />
                  </div>
                  <div className="description">
                    <h2>Herlander Bento</h2>
                    <p>herlanderbento19@gmail.com</p>
                  </div>
                </div>
                <div className="profile-info-body">
                  <h3 className="title">Conta</h3>

                  <nav className="nav flex-column">
                    <li className="nav-item">
                      <NavLink
                        className={activeTab === "1" ? "active" : ""}
                        onClick={() => setActiveTab("1")}
                      >
                        <BsPersonBadge />
                        <span>Dados da conta</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={activeTab === "2" ? "active" : ""}
                        onClick={() => setActiveTab("2")}
                      >
                        <RiLockPasswordLine />
                        <span>Segurança</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={activeTab === "3" ? "active" : ""}
                        onClick={() => setActiveTab("3")}
                      >
                        <BiWallet />
                        <span>Carteira</span>
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        className={activeTab === "5" ? "active" : ""}
                        onClick={() => setActiveTab("5")}
                      >
                        <RiHome4Line />
                        <span>Meus Imóveis</span>
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        className={activeTab === "4" ? "active" : ""}
                        onClick={() => setActiveTab("4")}
                      >
                        <RiProductHuntLine />
                        <span>Cadastrar Imóveis</span>
                      </NavLink>
                    </li>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-sm-6 col-md-8">
              <TabContent activeTab={activeTab} className="pb-5">
                <TabPane tabId="1">
                  <PersonInfo />
                </TabPane>
                <TabPane tabId="2">
                  <ChangePassword />
                </TabPane>
                <TabPane tabId="3">
                  <Wallet />
                </TabPane>
                <TabPane tabId="4">
                  <RegisterProducts />
                </TabPane>
                <TabPane tabId="5">
                  <Properties />
                </TabPane>
              </TabContent>
            </div>
          </div>
        </Container>
      </div>
    </SectionContent>
  )
}