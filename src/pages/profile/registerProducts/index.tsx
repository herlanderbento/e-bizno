import axios from "axios";
import FormData from 'form-data'
import { toast } from 'react-toastify';
import { Button } from "components/Button";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";
import { useAuth } from "hooks/useAuth";
import { ChangeEvent, FormEvent, useState } from "react";
import { Section } from "./styles";

interface IProductProps {
  name?: string;
  IdMerchant: string;
  localization: string;
  price: number;
  area: string;
  description: string;
}

export function RegisterProducts() {
  const { user } = useAuth();

  const [formData, setFormData] = useState<IProductProps>({
    IdMerchant: user.IdUser,
    name: "",
    localization: "",
    price: 0,
    area: "",
    description: "",
  });

  const [images, setImages] = useState("")

  function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  // function handleImageChange(e: ChangeEvent<any>){
  //   setPhoto(e.target.files[0])
  // }

  const onImageChange = (event: ChangeEvent<any>) => {
    if (event.target.files && event.target.files[0]) {
      setImages(URL.createObjectURL(event.target.files[0]));
    }
  };

  async function handleFormOnSubmit(e: FormEvent) {
    e.preventDefault();

    const datas = {
      IduMerchant: formData.IdMerchant,
      name: formData.name,
      localization: formData.localization,
      price: formData.price,
      area: formData.area,
      description: formData.description,
      file: images
    }

    // try {

    
    //   const response = await axios({
    //     method: 'post',
    //     url: `${process.env.REACT_APP_URL_PRODUCT}`,
    //     data: datas,
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //      }
    //   })
    //   toast.success('Cliente cadastrado com sucesso👌');

    //   console.log(response)

    // } catch (err) {
    //   toast.error('Falha ao cadastrar cliente 🤯');

    //   console.error(err)
    // }

    // console.log('teste', formData)
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
              <label className="form-label">Imóvel <span className="required">*</span></label>
              <Input
                type="text"
                placeholder="Digita o imóvel"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mb-4 col-lg-6">
              <label className="form-label">Localização</label>
              <Input
                type="text"
                placeholder="Digita a localização"
                name="localization"
                value={formData.localization}
                onChange={handleInputChange}
              />
            </div>

          </div>

          {/* <div className="row">
            <div className="form-group mb-4 col-lg-6">
              <label className="form-label">Província </label>
              <select className="form-select" name="province" value={formData.province}
                onChange={handleInputChange} aria-label="Default select example">
                <option selected>Selecione a província</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div> 
            <div className="form-group mb-4 col-lg-6">
              <label className="form-label">Município</label>
              <Input
                type="text"
                placeholder="Digita o município"
                name="municipe"
                value={formData.municipe}
                onChange={handleInputChange}
              />
            </div> 

          </div> */}

          <div className="row">
            <div className="form-group mb-4 col-lg-6">
              <label className="form-label">Preço <span className="required">*</span></label>
              <Input
                type="text"
                placeholder="Digita o preço"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mb-4 col-lg-6">
              <label className="form-label">Dimensão</label>
              <Input
                type="text"
                placeholder="Digita a dimensão do imóvel"
                name="area"
                value={formData.area}
                onChange={handleInputChange}
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
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mb-4 col-lg-12">
              <label className="form-label">Selecionar imagem</label>
              <Input
                type="file"
                name="file"
                onChange={onImageChange}
                accept="image/jpg,
                image/png,
                  image/jpeg,
                  image/svg,
                    image/gif"
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