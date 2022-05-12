import { Button } from "components/Button";
import { Input } from "components/Input";
import { useAuth } from "hooks/useAuth";
import { ChangeEvent, useState } from "react";
import { Section } from "./styles";

export function PersonInfo() {
  const { user } = useAuth();

  const [data, setData] = useState({
    FirstName: user.FirstName,
    LastName: user.LastName,
    bi: user.bi,
    telephone: user.telephone,
    email: user.email
  });

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  async function handleFormOnSubmit() {
    try {
      console.log(data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Section>
      <div className="profile-info-items mb-4">
        <div className="profile-header">
          <h2>Informações</h2>
        </div>
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
                name="bi"
                maxLength={14}
                minLength={14}
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
            <div className="form-group mb-4 col-lg-12">
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
          </div>

          <div className="form-group mb-4 col-lg-6">
            <Button>Actualizar</Button>
          </div>

        </form>
      </div>
      <div className="profile-info-items">
        <div className="profile-header">
          <h2>Endereço</h2>
        </div>
        <form>
          <div className="row">
            <div className="form-group mb-4 col-lg-12">
              <label className="form-label">Província </label>
              <select className="form-select" aria-label="Default select example">
                <option selected>Selecione a província</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="form-group mb-4 col-lg-12">
              <label className="form-label">Município </label>
              <Input type="text" placeholder="McQueen" name="email" required />
            </div>
          </div>

          <div className="form-group mb-4 col-lg-6">
            <Button>Actualizar</Button>
          </div>

        </form>
      </div>
    </Section>
  )
}