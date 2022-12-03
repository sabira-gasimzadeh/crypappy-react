import React, { useRef } from 'react'

function Pricing() {
  const ChooseClass = useRef()
  const ClickedButtonRef = useRef()
  const FirstChangeRef = useRef()
  const SecondChangeRef = useRef()
  const ThirdChangeRef = useRef()

  return <>
    <section className="section__pricing">
      <div className="pricing__container">
        <div className="pricing__body">
          <p className="pricing__slogan slogan">Our pricing</p>
          <h2 className="pricing__title title">Choose the plan that's right for your financial needs</h2>
          <p className="pricing__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
            eros
            elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
            tristique
            posuere.</p>
          <div className="billing">
            <div className="billing__item">
              <p>Billed monthly</p>
            </div>
            <label className="switch">
              <input type="checkbox" className="btn" onChange={() => {
                if (ClickedButtonRef.current.checked) {
                  FirstChangeRef.current.textContent = 10
                  SecondChangeRef.current.textContent = 49
                  ThirdChangeRef.current.textContent = 68
                }
                else {
                  FirstChangeRef.current.textContent = 12
                  SecondChangeRef.current.textContent = 56
                  ThirdChangeRef.current.textContent = 79
                }
              }} ref={ClickedButtonRef} />
              <span className="slider round"></span>
            </label>
            <div className="billing__item">
              <p>Billed annually</p>
              <span>Save 20%</span>
            </div>
          </div>
        </div>
        <div className="pricing__table">
          <div className="pricing__item" ref={ChooseClass}>
            <div className="pricing__item-name">Essentail</div>
            <div className="pricing__item-price price-1">$<span ref={FirstChangeRef}>12</span>/mo</div>
            <div className="pricing__item-desc">Lorem ipsum dolor sit amet suspendisse varius. Duis cursus, mi quis
              viverra
              ornare, eros dolor interdum</div>
            <div className="pricing__item-button">
              <a href="#" className="button button-outline">Start your free trial</a>
            </div>
          </div>
          <div className="pricing__item">
            <div className="pricing__item-name">Pro</div>
            <div className="pricing__item-price price-2">$<span ref={SecondChangeRef}>56</span>/mo</div>
            <div className="pricing__item-desc">Lorem ipsum dolor sit amet suspendisse varius. Duis cursus, mi quis
              viverra
              ornare, eros dolor interdum</div>
            <div className="pricing__item-button">
              <a href="#" className="button button-outline">Start your free trial</a>
            </div>
          </div>
          <div className="pricing__item">
            <div className="pricing__item-name">Premium</div>
            <div className="pricing__item-price price-3">$<span ref={ThirdChangeRef}>79</span>/mo</div>
            <div className="pricing__item-desc">Lorem ipsum dolor sit amet suspendisse varius. Duis cursus, mi quis
              viverra
              ornare, eros dolor interdum</div>
            <div className="pricing__item-button">
              <a href="#" className="button button-outline">Start your free trial</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default Pricing