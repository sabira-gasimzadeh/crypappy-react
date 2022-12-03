// import React, { useRef } from 'react'
import lightai from '../img/lightai.png'
import foxhub from '../img/foxhub.png'
import hexlab from '../img/hexlab.png'
import codelab from '../img/codelab.png'
import zootv from '../img/zootv.png'
import rating from '../img/rating.png'
import jason from '../img/jason.png'
import sarah from '../img/sarah.png'
import lori from '../img/lori.png'
import james from '../img/james.png'

function Reviews(){
    return <>
    <section className="section__reviews">
        <div className="reviews__container">
          <div className="reviews__body">
            <p className="reviews__slogan slogan">the best crypto App</p>
            <h2 className="reviews__title title">Backed by the biggest names in the industry</h2>
          </div>
          <div className="reviews__list">
            <div className="reviews__item">
              <picture>
                <img src={lightai} alt="img"/>
              </picture>
            </div>
            <div className="reviews__item">
              <picture>
                <img src={foxhub} alt="img"/>
              </picture>
            </div>
            <div className="reviews__item">
              <picture>
                <img src={hexlab} alt="img"/>
              </picture>
            </div>
            <div className="reviews__item">
              <picture>
                <img src={codelab} alt="img"/>
              </picture>
            </div>
            <div className="reviews__item">
              <picture>
                <img src={zootv} alt="img"/>
              </picture>
            </div>
          </div>
          <div className="reviews__slider swiper">
            <div className="reviews__wrapper swiper-wrapper">
              <div className="reviews__slide swiper-slide">
                <div className="reviews__slide-rating">
                  <picture>
                    <img src={rating} alt="rating"/>
                  </picture>
                </div>
                <div className="reviews__slide-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  varius
                  enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo
                  diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem
                  vitae
                  risus tristique posuere.</div>
                <div className="reviews__slide-author author">
                  <div className="author__img">
                    <picture>
                      <img src={jason} alt="Verified Customer"/>
                    </picture>
                  </div>
                  <div className="author__info">
                    <div className="author__name">Jason Renolds</div>
                    <div className="author__desc">Verified Customer</div>
                  </div>
                </div>
              </div>
              <div className="reviews__slide swiper-slide">
                <div className="reviews__slide-rating">
                  <picture>
                    <img src={rating} alt="rating"/>
                  </picture>
                </div>
                <div className="reviews__slide-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  varius
                  enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo
                  diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem
                  vitae
                  risus tristique posuere.</div>
                <div className="reviews__slide-author author">
                  <div className="author__img">
                    <picture>
                      <img src={sarah} alt="Verified Customer"/>
                    </picture>
                  </div>
                  <div className="author__info">
                    <div className="author__name">Sarah Genning</div>
                    <div className="author__desc">Verified Customer</div>
                  </div>
                </div>
              </div>
              <div className="reviews__slide swiper-slide">
                <div className="reviews__slide-rating">
                  <picture>
                    <img src={rating} alt="rating"/>
                  </picture>
                </div>
                <div className="reviews__slide-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  varius
                  enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo
                  diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem
                  vitae
                  risus tristique posuere.</div>
                <div className="reviews__slide-author author">
                  <div className="author__img">
                    <picture>
                      <img src={lori} alt="Verified Customer"/>
                    </picture>
                  </div>
                  <div className="author__info">
                    <div className="author__name">Lori Basic</div>
                    <div className="author__desc">Verified Customer</div>
                  </div>
                </div>
              </div>
              <div className="reviews__slide swiper-slide">
                <div className="reviews__slide-rating">
                  <picture>
                    <img src={rating} alt="rating"/>
                  </picture>
                </div>
                <div className="reviews__slide-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  varius
                  enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo
                  diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem
                  vitae
                  risus tristique posuere.</div>
                <div className="reviews__slide-author author">
                  <div className="author__img">
                    <picture>
                      <img src={james} alt="Verified Customer"/>
                    </picture>
                  </div>
                  <div className="author__info">
                    <div className="author__name">James Razz</div>
                    <div className="author__desc">Verified Customer</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </>
}

export default Reviews