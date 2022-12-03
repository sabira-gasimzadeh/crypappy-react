// import React, { useRef } from 'react'
import icon from '../img/icon.png'
import mobile from '../img/mobile.png'

function Mobile(){
    return <>
     <section className="section__mobile">
        <div className="mobile__container">
          <div className="mobile__header">
            <h2 className="mobile__title title">A perfect landing page to help launch your app</h2>
            <p className="mobile__subtitle subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius
              enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
          </div>
          <div className="mobile__body">
            <ul className="mobile__list list-mobile">
              <li className="list-mobile__item">
                <div className="list-mobile__img"><img src={icon} alt="img"/></div>
                <h3 className="list-mobile__title">Feature description</h3>
                <p className="list-mobile__text">Suspendisse varius enim in eros elementum tristique. Duis cursus.
                  Suspendisse
                  varius enim in eros elementum tristique. Duis cursus.</p>
              </li>
              <li className="list-mobile__item">
                <div className="list-mobile__img"><img src={icon} alt="img"/></div>
                <h3 className="list-mobile__title">Feature description</h3>
                <p className="list-mobile__text">Suspendisse varius enim in eros elementum tristique. Duis cursus.
                  Suspendisse
                  varius enim in eros elementum tristique. Duis cursus.</p>
              </li>
              <li className="list-mobile__item">
                <div className="list-mobile__img"><img src={icon} alt="img"/></div>
                <h3 className="list-mobile__title">Feature description</h3>
                <p className="list-mobile__text">Suspendisse varius enim in eros elementum tristique. Duis cursus.
                  Suspendisse
                  varius enim in eros elementum tristique. Duis cursus.</p>
              </li>
            </ul>
            <div className="mobile__image">
              <picture>
                <img src={mobile} alt="img"/>
              </picture>
            </div>
            <ul className="mobile__list list-mobile">
              <li className="list-mobile__item">
                <div className="list-mobile__img"><img src={icon} alt="img"/></div>
                <h3 className="list-mobile__title">Feature description</h3>
                <p className="list-mobile__text">Suspendisse varius enim in eros elementum tristique. Duis cursus.
                  Suspendisse
                  varius enim in eros elementum tristique. Duis cursus.</p>
              </li>
              <li className="list-mobile__item">
                <div className="list-mobile__img"><img src={icon} alt="img"/></div>
                <h3 className="list-mobile__title">Feature description</h3>
                <p className="list-mobile__text">Suspendisse varius enim in eros elementum tristique. Duis cursus.
                  Suspendisse
                  varius enim in eros elementum tristique. Duis cursus.</p>
              </li>
              <li className="list-mobile__item">
                <div className="list-mobile__img"><img src={icon} alt="img"/></div>
                <h3 className="list-mobile__title">Feature description</h3>
                <p className="list-mobile__text">Suspendisse varius enim in eros elementum tristique. Duis cursus.
                  Suspendisse
                  varius enim in eros elementum tristique. Duis cursus.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
}

export default Mobile