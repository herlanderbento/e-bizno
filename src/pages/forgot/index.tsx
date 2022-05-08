import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Section } from "./styles";
import { Input } from "components/Input";
import { Button } from "components/Button";


export function Forgot() {
  return (
    <Section>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="login-left-items">
            <div className="login-brand">
              <h1>
                eBizno<span>.</span>
              </h1>
            </div>
            <div className="login-content">
              <div className="description">
                <p>“Tem muitas variações de landing pages para escolher, qual delas é sempre uma grande vantagem.”</p>
              </div>
              <div className="login-profile">
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
          <div className="login-right-items">
            <div className="ms-auto">
              <Link to="/"><AiOutlineArrowLeft /> Volta para home</Link>
            </div>

            <div className="form-login col-lg-6">
              <div className="header">
                <h1>Esqueceu a senha?</h1>
                <p>Digite seu endereço de e-mail abaixo e nós o colocaremos de volta no caminho certo.</p>
              </div>
              <div className="body">
                <form>

                  <div className="form-group mb-4">
                    <div className="d-flex justify-content-between">
                      <label className="form-label">Seu email</label>
                      <Link className="form-label-link" to="/login"><AiOutlineArrowLeft /> Volta para login</Link>
                    </div>
                    <Input type="email"
                      placeholder="Digita seu email" name="email" required />
                  </div>
                  <div className="form-group mb-4">
                    <Button>Enviar</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Section>
  )
}