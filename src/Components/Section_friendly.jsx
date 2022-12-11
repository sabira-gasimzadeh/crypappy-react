import React, { useRef } from 'react'
import benefit from '../img/benefit.png'
import friendly from '../img/friendly.png'
import mobile from '../img/mobile.png'
import barcode from '../img/barcode.png'

function Friendly(){
    return <>
    <section className="section__friendly">
        <div className="friendly__container">
          <div className="friendly__body">
            <p className="friendly__slogan slogan">mobile friendly</p>
            <h2 className="friendly__title title">Manage your money from anywhere</h2>
            <p className="friendly__subtitle subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius
              enim in
              eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
            <div className="benefits">
              <div className="benefit__item">
                <div className="benefit__icon">
                  <picture>
                    <img src={benefit} alt="img"/>
                  </picture>
                </div>
                <div className="benefit__title">Benefit description</div>
                <div className="benefit__text">Suspendisse varius enim in eros elementum tristique. Duis cursus.</div>
              </div>
              <div className="benefit__item">
                <div className="benefit__icon">
                  <picture>
                    <img src={benefit} alt="img"/>
                  </picture>
                </div>
                <div className="benefit__title">Benefit description</div>
                <div className="benefit__text">Suspendisse varius enim in eros elementum tristique. Duis cursus.</div>
              </div>
            </div>
            {/* <a href="" className="friendly__button button">Get CrypAppy </a> */}
            <a className="friendly__button button" to="/search" id='log' href="#">Get CrypAppy</a>
            <img src={barcode} alt="" />
          </div>
          <div className="friendly__img">
            <picture>
              <img className="image1" src={friendly} alt="img"/>
            </picture>
            <picture>
              <img className="image2" src={mobile} alt="img"/>
            </picture>
          </div>
        </div>
      </section>
    </>
}

export default Friendly