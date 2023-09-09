import React from "react";
import { FC } from "react";
import s from './text.module.scss'

interface ITextProps{
    children:string;
    type?: 'crossed' | 'default'
}
const Text:FC<ITextProps> = ({children, type='default'})=>{
    return <span className={`${s.text} ${s[type]}`}>{children}</span>
}
export default Text;
