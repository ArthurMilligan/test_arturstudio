import React, { HTMLProps, ReactNode } from "react";
import { FC } from "react";
import s from './button.module.scss'

interface IButtonProps extends HTMLProps<HTMLButtonElement>{
    variant?:'submit' | 'clear';
    type?: 'button' | 'submit' | 'reset';
    children?: ReactNode;
}

const Button:FC<IButtonProps> =({variant, children, ...rest})=>{
    return(
        <button className={`${s.button} ${s[variant]}`} {...rest}>
            {children}
        </button>
    )
}

export default Button;
