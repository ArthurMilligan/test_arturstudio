import React from "react";
import { FC } from "react";
import s from "./radioItem.module.scss"
import { Icon, Text, Button } from "../../ui";

interface IRadioItemProps{
    isActive: boolean;
    text: string;
    name: string;
    onClick:(id:string)=>void
    onEdit:(id:string)=>void
}

const RadioItem: FC<IRadioItemProps> = ({isActive, text, name, onClick, onEdit}) => {
    const handleClick =()=>{
        onClick(name)
    }
    const handleEdit =()=>{
        onEdit(name)
    }

    return(
        <label htmlFor={name} className={s.radioItem}>
            <div className={s.radioItem__taskName}>
                {!isActive?<Icon name='checked' size={20}/>:<Icon name='unchecked' size={20}/>}
                <Text type={isActive?'default':'crossed'}>{text}</Text>
            </div>
            <Button type='button' onClick={handleEdit} ><Icon name="edit" size={20}/></Button>
            <Button className={s.radioItem__button} id={name} type='button' onClick={handleClick} />
        </label>
    )
}

export default RadioItem;