import { Link, useHistory } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Section } from "./styles";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "hooks/useAuth";

type LoginProps = {
  email: string,
  password: string,
};

export function Login() {
  const router = useHistory()
  const { signIn, user } = useAuth()

  const [data, setData] = useState<LoginProps>({
    email: '',
    password: ''
  })

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    try {
      await signIn(data);
      toast.success("Login efectuado com sucesso👌");

      setData({
        email: "",
        password: "",
      });

      router.push('/perfil')

    } catch (err) {
      toast.error("Email ou senha inválida 🤯");
      console.log(err);
    }
  }

  useEffect(() => {
  }, [user]);


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
              <a href="/"><AiOutlineArrowLeft /> Volta para home</a>
            </div>

            <div className="form-login col-lg-6">
              <div className="header">
                <h1>Bem-vindo ao eBizno</h1>
                <p>Faça login para gerenciar sua conta.</p>
              </div>
              <div className="body">
                <form onSubmit={handleSignIn}>
                  <div className="form-group mb-4">
                    <label className="form-label">Seu email</label>
                    <Input
                      type="email"
                      placeholder="email@site.com"
                      name="email"
                      value={data.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <div className="d-flex justify-content-between">
                      <label className="form-label">Password</label>
                      <Link to="/forgot" className="form-label-link">Esqueceu a senha?</Link>
                    </div>
                    <Input
                      type="password"
                      isPassword
                      placeholder="8+ caracteres necessários"
                      name="password"
                      value={data.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <Button>Log in</Button>
                  </div>
                  <div className="form-group text-center">
                    <p>Não tem uma conta ainda? <Link to="/cadastrar" className="form-label-link">Cadastra-se</Link></p>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Section >
  )
}