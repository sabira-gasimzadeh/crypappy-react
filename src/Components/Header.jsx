import React, {useRef} from 'react'
import logo from '../img/logo.png'


const Header = () => {
  //  const overlayRef = useRef()
  //  const buttonRef = useRef()
  //  const closeOverlayMenuRef = useRef()
  //  const closeOverlayMenu = (e)=>{
  //   const clickedElement = e.target
  //   if(clickedElement.classList.contains('close')){
  //     overlayRef.current.classList.remove('active')
  //   }
  //  }
  //  const openOverLayMenu = (e) =>{
  //     const clickedElement = e.target

  //     if(clickedElement.classList.contains('view')){
  //        overlayRef.current.classList.add('active')
  //     }
  //  }


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
          <button type="button" data-da=".menu__body, 480" className="header__button button button-outline">Buy
            CrypAppy</button>
          <button type="button" className="menu__icon icon-menu"><span></span></button>
        </div>
      </div>
    </header>
 </>
  )
}

export default Header