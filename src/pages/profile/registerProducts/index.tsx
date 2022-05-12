import { Button } from "components/Button";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";
import { useAuth } from "hooks/useAuth";
import { ChangeEvent, FormEvent, useState } from "react";
import { Section } from "./styles";

export function RegisterProducts() {
  const { user } = useAuth();

  const [data, setData] = useState({
    idmerchant: user.IdUser,
    name: "",
    province: "",
    municipe: "",
    localization: "",
    price: "",
    area: "",
    description: "",
    filesproduct: ""
  })

  const [images, setImages] = useState([]);

  function handleInputChange(e: ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  // function handleInputFileChange(e: ChangeEvent<HTMLInputElement>){
  //   setImages({
  //     ...images,
  //     [e.target.files] : e.target.value
  //   })
  // }

  async function handleFormOnSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(data)
  }
  return (
    <Section>
      <div className="profile-info-items mb-4">
        <div className="profile-header">
          <h2>Informações</h2>
        </div>
        <form onSubmit={handleFormOnSubmit} encType="multipart/form-data">
          <div className="row">
            <div className="form-group mb-4 col-lg-6">
              <label className="form-label">Nome do Produto <span className="required">*</span></label>
              <Input
                type="text"
                placeholder="Digita o nome do produto"
                name="name"
                value={data.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group mb-4 col-lg-6">
              <label className="form-label">Província </label>
              <select className="form-select" name="province" value={data.province}
                onChange={handleInputChange} aria-label="Default select example">
                <option selected>Selecione a província</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="form-group mb-4 col-lg-6">
              <label className="form-label">Município</label>
              <Input
                type="text"
                placeholder="Digita o município"
                name="municipe"
                value={data.municipe}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group mb-4 col-lg-6">
              <label className="form-label">Distrito</label>
              <Input
                type="text"
                placeholder="Digita a localização"
                name="localization"
                value={data.localization}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group mb-4 col-lg-6">
              <label className="form-label">Preço <span className="required">*</span></label>
              <Input
                type="text"
                placeholder="Digita o preço"
                name="price"
                value={data.price}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group mb-4 col-lg-6">
              <label className="form-label">Dimensão</label>
              <Input
                type="text"
                placeholder="Digita a dimensão do imóvel"
                name="area"
                value={data.area}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group mb-4 col-lg-12">
              <label className="form-label">Descrição <span className="required">*</span></label>
              <TextArea
                className="form-control"
                placeholder="Descreve o imóvel"
                name="description"
                value={data.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group mb-4 col-lg-12">
              <label className="form-label">Selecionar imagem</label>
              <Input
                type="file"
                name="filesproduct"
                value={data.filesproduct}
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
    </Section>
  )
}