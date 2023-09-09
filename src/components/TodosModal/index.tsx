import React, { ChangeEvent, FC, useState } from "react";
import { Button, Input, Modal } from "../../ui";
import s from './todosModal.module.scss';

interface ITodosModalProps{
    isShowing:boolean;
    toggle:()=>void;
    onSave:(text:string)=>void;
}

const TodosModal:FC<ITodosModalProps>=({isShowing, toggle, onSave})=>{
    const [value, setValue] = useState('');
    const handleChange =(e: ChangeEvent<HTMLInputElement>)=>{
        setValue(e.currentTarget.value);
    };
    const handleSubmit =(e: ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        onSave(value);
        toggle()
    }
    return(
        <Modal show={isShowing} onCloseButtonClick={toggle}>
            <form onSubmit={handleSubmit} className={s.modal__form}>
                <Input value={value} onChange={handleChange} placeholder="Новая задача"/>
                <Button variant="submit" type="submit">Сохранить</Button>
            </form>
        </Modal>
    )
}

export default TodosModal;