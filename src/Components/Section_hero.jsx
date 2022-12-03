import React, { useRef } from 'react'
import appStore from '../img/appstore.png'
import googlePlay from '../img/googleplay.png'
import hero from '../img/hero.png'

function Container() {
    return <>
        <section className="section__hero">
            <div className="hero__container">
                <div className="hero__body">
                    <h1 className="hero__title title">The crypto portfolio app that makes you smile. Every day.</h1>
                    <p className="hero__subtitle subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        varius
                        enim in eros
                        elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</p>
                    <div className="download__apps">
                        <a href="https://www.apple.com" className="download__app">
                            <picture>
                                <img src={appStore} alt="AppStore" />
                            </picture>
                        </a>
                        <a href="https://play.google.com" className="download__app">
                            <picture>
                                <img src={googlePlay} alt="Googleplay" />
                            </picture>
                        </a>
                    </div>
                </div>
                <div className="hero__img">
                    <picture>
                        <img src={hero} alt="img" />
                    </picture>
                </div>
            </div>

        </section>
    </>
}
export default Container;