import { v4 as uuid } from 'uuid'
import img01 from '../../../assets/images/city/img01.png'
import img02 from '../../../assets/images/city/img02.jpg'
import img03 from '../../../assets/images/city/img03.png'
import img04 from '../../../assets/images/city/img04.jpg'


export const allData = [
  {
    id: uuid(),
    img: img01,
    title: 'Luanda',
    amount: '57 imóveis'
  },
  {
    id: uuid(),
    img: img02,
    title: 'Bengo',
    amount: '27 imóveis'
  },
  {
    id: uuid(),
    img: img03,
    title: 'Benguela',
    amount: '14 imóveis'
  },
  {
    id: uuid(),
    img: img04,
    title: 'Huíla',
    amount: '10 imóveis'
  }
]