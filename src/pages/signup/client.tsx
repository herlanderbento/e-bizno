import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import { Input } from "components/Input";
import { Button } from "components/Button";

import api from 'axios'

interface ISignUp {
  FirstName: string,
  LastName: string,
  bi: string,
  telephone: string,
  email: string,
  password: string,
  roles: boolean
}
export function Client() {
  const router = useHistory();

  const [data, setData] = useState<ISignUp>({
    FirstName: '',
    LastName: '',
    bi: '',
    telephone: '',
    email: '',
    password: '',
    roles: true
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
      const response = await api.post(`${process.env.REACT_APP_URL_CLIENT}`, data);
      toast.success('Cliente cadastrado com sucesso👌');
      router.push('/login')
    } catch (err) {
      toast.error('Falha ao cadastrar cliente 🤯');
      console.error(err);
    }

  }

  return (
    <div className="body">
      <form onSubmit={handleFormOnSubmit}>
        <div className="row">
          <div className="form-group mb-4 col-lg-6">
            <label className="form-label">Primeiro Nome <span className="required">*</span></label>
            <Input
              type="text"
              placeholder="Joe"
              name="FirstName"
              value={data.FirstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group mb-4 col-lg-6">
            <label className="form-label">Último Nome <span className="required">*</span></label>
            <Input
              type="text"
              placeholder="McQueen"
              name="LastName"
              value={data.LastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="form-group mb-4 col-lg-6">
            <label className="form-label">Nº B.I <span className="required">*</span></label>
            <Input
              type="text"
              placeholder="000000000LA000"
              minLength={14}
              maxLength={14}
              name="bi"
              value={data.bi}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group mb-4 col-lg-6">
            <label className="form-label">Telefone<span className="required">*</span></label>
            <Input
              type="number"
              placeholder="(+244) 000 000 000"
              name="telephone"
              value={data.telephone}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="form-group mb-4 col-lg-6">
            <label className="form-label">Email <span className="required">*</span></label>
            <Input
              type="email"
              placeholder="email@site.com"
              name="email"
              value={data.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group mb-4 col-lg-6">
            <label className="form-label">Password<span className="required">*</span></label>
            <Input
              type="password"
              isPassword
              placeholder="8+ caracteres necessários"
              minLength={8}
              value={data.password}
              onChange={handleInputChange}
              name="password"
              required
            />
          </div>
        </div>

        <div className="form-check mb-4">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Ao enviar este formulário de cadastro de cliente, li e reconheço a <Link to="/" className="label-form-link">Política de Privacidade</Link>
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
  )
}