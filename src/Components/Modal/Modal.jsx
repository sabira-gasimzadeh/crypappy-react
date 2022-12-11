import React, { useState } from 'react';
import { ButtonStyled } from '../ButtonStyled';
import './Modal.css'

const Modal = ({closeModel}) => {
    // const [close, setClose] = useState(true)

    return ( 
        <div className='my-modal'>
            <div className='modal'>
            <ul className="menu__list">
              <li className="menu__item"><a href="#" className="menu__link">Benefits</a></li>
              <li className="menu__item"><a href="#" className="menu__link">Features</a></li>
              <li className="menu__item"><a href="#" className="menu__link">Reviews</a></li>
              <li className="menu__item"><a href="#" className="menu__link">Pricing</a></li>
              <li className="menu__item"><a href="#" className="menu__link">Contact</a></li>
            </ul>
                <ButtonStyled onClick={() => closeModel(false)}>close</ButtonStyled>
            </div>
        </div>
     );
}
 
export default Modal;