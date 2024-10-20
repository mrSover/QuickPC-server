import { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Catalog: FC = ({ }) => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false)
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Повернення на попередню сторінку
  };
  return (
    <div className='catalog' >
      <button onClick={handleGoBack}>
        {"<-"}
      </button>
      <button className='catalog__btn' onClick={() => setIsCatalogOpen(!isCatalogOpen)}>Каталог</button>
      <div className={['catalog__dropdown', isCatalogOpen ? " active" : ""].join("")} >
        <Link to={"/components"}>Компoненти</Link>

        <Link to={"/computers"}>Комп'ютери</Link>
      </div>
    </div>
  )
}

export default Catalog;