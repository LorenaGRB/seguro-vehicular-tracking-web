import React, { createContext, useState } from "react";
export const UseContext = createContext();

export const UseProvider = ({ children }) => {
    const [idHomeForm, setidHomeForm] = useState();
    const [idCarForm, setidCarForm] = useState();
const [idArmaPlanForm, setidArmaPlanForm] = useState()
    return (
        <UseContext.Provider
        value={{
            idHomeForm: idHomeForm,
            idCarForm: idCarForm,
            idArmaPlanForm:idArmaPlanForm,
            setidHomeForm: setidHomeForm,
            setidCarForm: setidCarForm,
            setidArmaPlanForm:setidArmaPlanForm
        }}
        >
        {children}
        </UseContext.Provider>
    );
};