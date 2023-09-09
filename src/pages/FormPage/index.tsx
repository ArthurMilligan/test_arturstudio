import React, { ChangeEvent, useState } from "react";
import { FC } from "react";
import { Button, Input } from "../../ui";
import inputValidator from "./utils/inputValidator";
import s from "./formPage.module.scss"

export interface IValidateDataArgs{
    name:"name"|"email"|"phone"|"login"|"password"|"confirmPassword"
}

const FormPage:FC = () => {
    const [state, setState] = useState({
        values: {
            name: "",
            email: "",
            phone: "",
            login: "",
            password: "",
            confirmPassword: "",
        },
        errors: {
            name: "",
            email: "",
            phone: "",
            login: "",
            password: "",
            confirmPassword: "",
        }
    });

    const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
        // if(name==='checked'){
        //     setState({
        //         ...state,
        //         values: {
        //             ...state.values,
        //             checked: !state.values.checked
        //         }
        //     });

        //     return;
        // }
        setState({
            ...state,
            values: {
                ...state.values,
                [name]: value
            }
        });
    }

    const validateData = ({ name }: IValidateDataArgs) => {
        setState({
            ...state,
            errors: {
                ...state.errors,
                [name]: inputValidator({ type: name, value: (state.values[name]), extraValue:name==='confirmPassword'
                    ?state.values.password
                    :'' 
                })
            }
        });
    }

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(state.values);
    }
    const hasError = Object.values(state.errors).some(Boolean) || Object.values(state.values).some((val)=>val.length===0)

    return(
        <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.form__element}>
                <Input 
                    value={state.values.name} 
                    onChange={handleChange} 
                    error={state.errors.name}
                    name="name"
                    placeholder="Имя"
                    onBlur={() => validateData({ name: "name" })}
                />
            </div>
            <div className={s.form__element}>
                <Input 
                    value={state.values.email} 
                    onChange={handleChange} 
                    error={state.errors.email}
                    name="email"
                    type="email"
                    placeholder="Почта"
                    onBlur={() => validateData({ name: "email" })}
                />
            </div>
            <div className={s.form__element}>
                <Input 
                    value={state.values.phone} 
                    onChange={handleChange} 
                    error={state.errors.phone}
                    name="phone"
                    type="tel"
                    placeholder="Телефон"
                    onBlur={() => validateData({ name: "phone" })}
                />
            </div>
            <div className={s.form__element}>
                <Input 
                    value={state.values.login} 
                    onChange={handleChange} 
                    error={state.errors.login}
                    name="login"
                    placeholder="Логин"
                    onBlur={() => validateData({ name: "login" })}
                />
            </div>
            <div className={s.form__element}>
                <Input 
                    value={state.values.password} 
                    onChange={handleChange} 
                    error={state.errors.password}
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    onBlur={() => validateData({ name: "password" })}
                />
            </div>
            <div className={s.form__element}>
                <Input 
                    value={state.values.confirmPassword} 
                    onChange={handleChange} 
                    error={state.errors.confirmPassword}
                    type="password"
                    name="confirmPassword"
                    placeholder="Повторите пароль"
                    onBlur={() => validateData({ name: "confirmPassword" })}
                />
            </div>
            <Button type="submit" disabled={hasError}>
                submit
            </Button>

        </form>
    )
}

export default FormPage;