import { useState } from "react";
import { NavLink, TabContent, TabPane } from "reactstrap";
import { SectionContent } from "./styles";
import { BsPersonBadge } from 'react-icons/bs'
import { RiHome4Line, RiLockPasswordLine, RiProductHuntLine } from 'react-icons/ri'
import { PersonInfo } from "../personInfo";
import { ChangePassword } from "../changePassword";
import { BiWallet } from "react-icons/bi";
import { Users } from "../users";
import { Container } from "styles/container";
import { Properties } from "../properties";
import { Dash } from "../dash";

import { useAuth } from "hooks/useAuth";


export function Section() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("1");

  function formatName() {
    const nameSplit = user.FirstName.split(" ");

    if (nameSplit.length > 1) {
      return `${nameSplit[0].charAt(0)}${nameSplit[1].charAt(0)}`.toUpperCase();
    }
    return nameSplit[0].charAt(0).toUpperCase();
  }

  return (
    <SectionContent>
      <div className="banner">
        <Container>
          <div className="info">
            <h2>Informações do perfil</h2>
            <span>Conta | Perfil</span>
          </div>
        </Container>
      </div>
      <div className="profile-info">
        <Container>
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-4">
              <div className="profile-info-items">
                <div className="profile-info-header">
                  <div className="avatar">
                    <h2>{formatName()}</h2>
                    {/* <img src="/assets/images/avatar/avatar-img-01.jpg" alt="" /> */}
                  </div>
                  <div className="description">
                    <h2>{user?.FirstName} {user?.LastName}</h2>
                    <p>{user?.email}</p>
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
                        <span>Dashboard</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={activeTab === "2" ? "active" : ""}
                        onClick={() => setActiveTab("2")}
                      >
                        <BsPersonBadge />
                        <span>Usuários</span>
                      </NavLink>                  
                  
                    </li>
                        <li className="nav-item">
                          <NavLink
                            className={activeTab === "3" ? "active" : ""}
                            onClick={() => setActiveTab("3")}
                          >
                            <RiHome4Line />
                            <span>Imóveis</span>
                          </NavLink>
                        </li>

                        <li className="nav-item">
                          <NavLink
                            className={activeTab === "4" ? "active" : ""}
                            onClick={() => setActiveTab("4")}
                          >
                            <BsPersonBadge />
                            <span>Dados da conta</span>
                          </NavLink>
                        </li>
                    <li className="nav-item">
                      <NavLink
                        className={activeTab === "5" ? "active" : ""}
                        onClick={() => setActiveTab("5")}
                      >
                        <RiLockPasswordLine />
                        <span>Segurança</span>
                      </NavLink>
                    </li>
                   
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-sm-6 col-md-8">
              <TabContent activeTab={activeTab} className="pb-5">
                <TabPane tabId="1">
                  <Dash />
                </TabPane>
                <TabPane tabId="2">
                  <Users/>
                </TabPane>
                <TabPane tabId="3">
                  <Properties />
                </TabPane>
                <TabPane tabId="4">
                  <PersonInfo />
                </TabPane>
                <TabPane tabId="5">
                  <ChangePassword />
                </TabPane>
                <TabPane tabId="5">
                </TabPane>
              </TabContent>
            </div>
          </div>
        </Container>
      </div>
    </SectionContent>
  )
}