import axios from "axios";
import { toast } from 'react-toastify';
import { Button } from "components/Button";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";
import { useAuth } from "hooks/useAuth";
import { ChangeEvent, FormEvent, useState } from "react";
import { Section } from "./styles";

interface IProductProps {
  name: string;
  IdMerchant: string;
  localization: string;
  price: string;
  area: string;
  description: string;
}

export function RegisterProducts() {
  const { user } = useAuth();

  const [data, setData] = useState<IProductProps>({
    IdMerchant: user.IdUser,
    name: "",
    localization: "",
    price: '',
    area: "",
    description: "",
  });

  const [image, setImage] = useState<File | any>();
  const [isSelected, setIsSelected] = useState(false);


  function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  function handleInputFileChange(e: ChangeEvent<File | any>) {
    setImage(e.target.files[0]);
    setIsSelected(true)
  }

  // const onImageChange = (event: ChangeEvent<any>) => {
  //   if (event.target.files && event.target.files[0]) {
  //     setImage(URL.createObjectURL(event.target.files[0]));
  //   }
  // };

  async function handleFormOnSubmit(e: FormEvent) {
    e.preventDefault();

    const formData = new FormData();

    formData.append('IdMerchant', data.IdMerchant);
    formData.append('name', data.name);
    formData.append('localization', data.localization);
    formData.append('price', data.price);
    formData.append('area', data.area);
    formData.append('description', data.description);
    formData.append('file', image);

    try {
      const response = await axios.post(`${process.env.REACT_APP_URL_PRODUCT}`, formData)
      console.log(response)
      toast.success('Cliente cadastrado com sucesso👌');
    } catch (err) {
      console.error(err)
      toast.error('Falha ao cadastrar cliente 🤯');
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
              <label className="form-label">Imóvel <span className="required">*</span></label>
              <Input
                type="text"
                placeholder="Digita o imóvel"
                name="name"
                value={data.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mb-4 col-lg-6">
              <label className="form-label">Localização</label>
              <Input
                type="text"
                placeholder="Digita a localização"
                name="localization"
                value={data.localization}
                onChange={handleInputChange}
              />
            </div>

          </div>

          {/* <div className="row">
            <div className="form-group mb-4 col-lg-6">
              <label className="form-label">Província </label>
              <select className="form-select" name="province" value={Data.province}
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
                value={Data.municipe}
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
                value={data.price}
                onChange={handleInputChange}
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
              />
            </div>
            <div className="form-group mb-4 col-lg-12">
              <label className="form-label">Selecionar imagem</label>
              <Input
                type="file"
                name="file"
                onChange={handleInputFileChange}
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