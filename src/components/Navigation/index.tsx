import React from "react";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import s from './navigation.module.scss'
import { Text } from "../../ui";

const Navigation:FC = ()=>{
    return(
        <div className={s.navigation}>
            <ul className={s.navigation__list}>
                <li className={s.navigation__element}>
                    <NavLink
                        to='/form'
                        className={({ isActive }) =>
                            `${s.navigation__link} ${isActive?s.navigation__link_active:''}`
                        }
                    >
                        <Text>
                            Form page
                        </Text> 
                    </NavLink>
                </li>
                <li className={s.navigation__element}>
                    <NavLink
                        to='/picture'
                        className={({ isActive }) =>
                            `${s.navigation__link} ${isActive?s.navigation__link_active:''}`
                        }
                    >
                        <Text>
                            Picture page
                        </Text>
                    </NavLink>
                </li>
                <li className={s.navigation__element}>
                    <NavLink
                        to='/todos'
                        className={({ isActive }) =>
                            `${s.navigation__link} ${isActive?s.navigation__link_active:''}`
                        }
                    >
                        <Text>
                            Todos page
                        </Text>
                    </NavLink> 
                </li>
            </ul>
        </div>
    )
}

export default Navigation;