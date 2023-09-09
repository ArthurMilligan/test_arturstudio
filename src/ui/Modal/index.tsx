import React, { ReactNode } from "react";
import { FC } from "react";
import s from './modal.module.scss';

interface IModalProps{
    show:boolean;
    onCloseButtonClick:()=>void,
    children:ReactNode;
}

const Modal:FC<IModalProps> = ({ show, onCloseButtonClick, children }) => {
    if (!show) {
      return null;
    }
  
    return (
      <div className={s.modal__wrapper}>
        <div className={s.modal}>
            <button onClick={onCloseButtonClick} className={s.modal__button}>x</button>
            <div className={s.modal__body}>
                {children}
            </div>
        </div>
      </div>
    );
  };
  
  export default Modal;
  