import React, { useRef } from 'react'
import benefit from '../img/benefit.png'
import arrow from '../img/arrow.png'

function About(){
    return <>
    <section className="section__about">
        <div className="about__container">
          <div className="about__body">
            <h2 className="about__title title">New crypto finance app</h2>
            <p className="about__text text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
              in
              eros
              elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero
              vitae
              erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
              posuere.
            </p>
          </div>
          <div className="benefits">
            <div className="benefit">
              <div className="benefit__icon">
                <picture>
                  <img src={benefit} alt="img"/>
                </picture>
              </div>
              <div className="benefit__title">Benefit description</div>
              <div className="benefit__text">Suspendisse varius enim in eros elementum tristique. Duis cursus.</div>
              <a href="#" className="benefit__button">Learn more <img src={arrow} alt="" /></a>
            </div>
            <div className="benefit">
              <div className="benefit__icon">
                <picture>
                  <img src={benefit} alt="img"/>
                </picture>
              </div>
              <div className="benefit__title">Benefit description</div>
              <div className="benefit__text">Suspendisse varius enim in eros elementum tristique. Duis cursus.</div>
              <a href="#" className="benefit__button">Learn more <img src={arrow} alt="" /></a>
            </div>
            <div className="benefit">
              <div className="benefit__icon">
                <picture>
                  <img src={benefit} alt="img"/>
                </picture>
              </div>
              <div className="benefit__title">Benefit description</div>
              <div className="benefit__text">Suspendisse varius enim in eros elementum tristique. Duis cursus.</div>
              <a href="#" className="benefit__button">Learn more <img src={arrow} alt="" /></a>
            </div>
          </div> 
        </div>
      </section>
    </>
}

export default About