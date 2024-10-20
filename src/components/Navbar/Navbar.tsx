import { FC } from 'react'
import { Link } from 'react-router-dom';
import "../../styles/Navbar.scss"
import MyInput from '../../UI/input/MyInput';
import Container from '../../UI/container/Container';
import Catalog from './Catalog';
import React from 'react'
import { useAppSelector } from '../../hooks/redux';


const Navbar: FC = () => {
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)
  console.log("🚀 ~ isAuthenticated:", isAuthenticated)

  return (
    <Container>
      <div className='navbar'>
        <div className='navbar__search'>
          <div className='navbar__logo'></div>

          <Link to={"/main"}>Головна</Link>
          <Link to={"/main"}>Контакти</Link>
          <Link to={"/main"}>О нас</Link>
          <Link to={"/main"}>Traid-in</Link>
          <button>🔍︎</button>
          <div>🛒</div>
          {
            !isAuthenticated &&
            <Link to={"/auth"}>{isAuthenticated ? "Вийти" : "Зареєструватись"}</Link>
          }
        </div>

        <Catalog />
      </div>
    </Container>
  )
}

export default Navbar;