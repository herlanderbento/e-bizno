import { ChangeEvent, FormEvent, useState } from "react";
import { Link, Router, useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Section } from "./styles";

import api, { AxiosResponse } from 'axios'
import { Nav, NavItem, TabContent, TabPane, NavLink } from "reactstrap";
import { Client } from "./client";
import { Merchant } from "./merchant";
import { BsPersonBadge } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";

interface ISignUp {
  FirstName: string,
  LastName: string,
  bi: string,
  telephone: string,
  email: string,
  password: string,
  roles: boolean
}
export function SignUp() {
  const router = useHistory();
  const [activeTab, setActiveTab] = useState("1");

  const [data, setData] = useState<ISignUp>({
    FirstName: '',
    LastName: '',
    bi: '',
    telephone: '',
    email: '',
    password: '',
    roles: false
  })

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  async function handleFormOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await api.post("http://192.168.188.80:2005/merchant", data);
      toast.success('Usuário cadastrado com sucesso👌');
      router.push('/login')
    } catch (err) {
      toast.error('Falha ao cadastrar usuário 🤯');
      console.error(err);
    }

  }

  return (
    <Section>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="signup-left-items">
            <div className="signup-brand">
              <h1>
                eBizno<span>.</span>
              </h1>
            </div>
            <div className="signup-content">
              <div className="description">
                <p>“Tem muitas variações de landing pages para escolher, qual delas é sempre uma grande vantagem.”</p>
              </div>
              <div className="signup-profile">
                <div className="avatar">
                  <img src="/assets/images/avatar/avatar-img-01.jpg" alt="avatar" />
                </div>
                <div className="profile-desc">
                  <h2>Herlander Bento</h2>
                  <span>Software Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-8 col-md-8 col-sm-6">
          <div className="signup-right-items">
            <div className="ms-auto">
              <Link to="/"><AiOutlineArrowLeft /> Volta para home</Link>
            </div>

            <div className="form-signup col-lg-9">
              <div className="header">
                <h1>Bem-vindo ao eBizno</h1>
                <p>Faça signup para gerenciar sua conta.</p>
              </div>
              <div className="separator">
                <nav className="nav">
                  <li className="nav-item">
                    <NavLink
                      className={activeTab === "1" ? "active" : ""}
                      onClick={() => setActiveTab("1")}
                    >
                      <span>Cliente</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={activeTab === "2" ? "active" : ""}
                      onClick={() => setActiveTab("2")}
                    >
                      <span>Vendedor</span>
                    </NavLink>
                  </li>
                </nav>

              </div>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <Client />
                </TabPane>
                <TabPane tabId="2">
                  <Merchant />
                </TabPane>
              </TabContent>
            </div>
          </div>

        </div>
      </div>
    </Section>
  )
}