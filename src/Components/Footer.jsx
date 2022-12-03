import React, { useRef } from 'react'
import logo from '../img/logo.png'
import facebook from '../img/facebook.png'
import twitter from '../img/twitter.png'
import instagram from '../img/instagram.png'

function Footer() {
  return <>
    <footer className="footer">
      <div className="footer__container">
        <a href="" className="footer__logo">
          <picture>
            <img src={logo} alt="logo" />
          </picture>
        </a>
        <h2 className="footer__title">Subscribe to our newsletter</h2>
        <div className="footer__social social">
          <a href="" className="social__item">
            <picture>
              <img src={facebook} alt="img" />
            </picture>
          </a>
          <a href="" className="social__item">
            <picture>
              <img src={twitter} alt="img" />
            </picture>
          </a>
          <a href="" className="social__item">
            <picture>
              <img src={instagram} alt="img" />
            </picture>
          </a>
        </div>
        <form className="footer__form" action="files/sendmail/sendmail.php" method="POST">
          <label className="footer__label">Enter your email...</label>
          <input className="footer__input input" type="text" />
          <button type="button" className="footer__button button">Send</button>
        </form>
      </div>
    </footer>
  </>
}

export default Footer