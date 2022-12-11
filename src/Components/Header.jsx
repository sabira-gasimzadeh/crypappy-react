import React, {useState} from 'react'
import logo from '../img/logo.png'
import {ButtonStyled} from './ButtonStyled'
import Modal from './Modal/Modal'


const Header = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
   <>
    <header className="header">
      <div className="header__wrapper">
        <a href="" className="header__logo">
          <picture>
            <img src={logo} alt="logo"/>
          </picture>
        </a>
        <div className="header__menu menu">
          <nav className="menu__body">
            <ul className="menu__list">
              <li className="menu__item"><a href="#" className="menu__link">Benefits</a></li>
              <li className="menu__item"><a href="#" className="menu__link">Features</a></li>
              <li className="menu__item"><a href="#" className="menu__link">Reviews</a></li>
              <li className="menu__item"><a href="#" className="menu__link">Pricing</a></li>
              <li className="menu__item"><a href="#" className="menu__link">Contact</a></li>
            </ul>
          </nav>
          <ButtonStyled onClick={() => {setOpenModal(true);}}>Buy CrypAppy</ButtonStyled>
        </div>
      </div>
      {openModal && <Modal closeModel = {setOpenModal}/> }
    </header>
 </>
  )
}

export default Header