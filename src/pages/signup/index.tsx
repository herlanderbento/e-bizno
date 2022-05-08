import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Section } from "./styles";
import { Input } from "components/Input";
import { Button } from "components/Button";


export function SignUp() {
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
              <div className="body">
                <form>
                  <div className="row">
                    <div className="form-group mb-4 col-lg-6">
                      <label className="form-label">Primeiro Nome <span className="required">*</span></label>
                      <Input type="text" placeholder="Joe" name="email" required />
                    </div>
                    <div className="form-group mb-4 col-lg-6">
                      <label className="form-label">Último Nome <span className="required">*</span></label>
                      <Input type="text" placeholder="McQueen" name="email" required />
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group mb-4 col-lg-6">
                      <label className="form-label">Nº B.I <span className="required">*</span></label>
                      <Input type="email" placeholder="000000000LA000" name="email" required />
                    </div>
                    <div className="form-group mb-4 col-lg-6">
                      <label className="form-label">Telefone<span className="required">*</span></label>
                      <Input type="email" placeholder="(+244) 000 000 000" name="email" required />
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group mb-4 col-lg-6">
                      <label className="form-label">Email <span className="required">*</span></label>
                      <Input type="email" placeholder="email@site.com" name="email" required />
                    </div>
                    <div className="form-group mb-4 col-lg-6">
                      <label className="form-label">Password<span className="required">*</span></label>
                      <Input type="password" isPassword
                        placeholder="8+ caracteres necessários" name="password" required />
                    </div>
                  </div>
                  <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                      Ao enviar este formulário, li e reconheço a <Link to="/" className="label-form-link">Política de Privacidade</Link>
                    </label>
                  </div>
                  <div className="row justify-content-center">
                    <div className="form-group mb-4 col-lg-8">
                      <Button>Cadastrar</Button>
                    </div>
                  </div>
                  <div className="form-group text-center">
                    <p>Já tem uma conta? <Link to="/login" className="form-label-link">Login</Link></p>
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