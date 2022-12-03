import React, { useRef } from 'react'

function Banner(){
    return <>
    <section className="section__banner">
        <div className="banner__container">
          <div className="banner__body">
            <h2 className="banner__title title">Buy CrypAppy today</h2>
            <p className="banner__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros
              elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero
              vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem.</p>
            <div className="banner__buttons">
              <a href="#" className="banner__button button">Buy CrypAppy</a>
              <a href="#" className="banner__button button button-outline">View in designer</a>
            </div>
          </div>
          <div className="box box-1"></div>
          <div className="box box-2"></div>
        </div>
      </section>
    </>
}


export default Banner