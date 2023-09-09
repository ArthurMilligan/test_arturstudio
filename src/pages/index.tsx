import React from "react";
import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import FormPage from "./FormPage";
import PicturePage from "./PicturePage";
import TodosPage from "./TodosPage";
import { Navigation } from "../components";
import s from './routing.module.scss'

const Routing:FC = () => {
    return(
        <div className={s.routing}>
            <Navigation/>
            <Routes>
                <Route
                    path='/form'
                    element={<FormPage/>}
                />
                <Route
                    path='/picture'
                    element={<PicturePage/>}
                />
                <Route
                    path='/todos'
                    element={<TodosPage/>}
                />
                <Route
                    path='/'
                    element={<Navigate to='form' />}
                />
            </Routes>
        </div>
    )
}

export default Routing;