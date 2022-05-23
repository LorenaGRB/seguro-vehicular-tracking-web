import React, { createContext, useState } from "react";
export const UseContext = createContext();

export const UseProvider = ({ children }) => {
    const [idHomeForm, setidHomeForm] = useState();
    const [idCarForm, setidCarForm] = useState();
    const [idArmaPlanForm, setidArmaPlanForm] = useState()
    const [userData, setUserData] = useState();
    const [carData, setCarData] = useState()
    return (
        <UseContext.Provider
        value={{
            idHomeForm: idHomeForm,
            idCarForm: idCarForm,
            idArmaPlanForm:idArmaPlanForm,
            setidHomeForm: setidHomeForm,
            setidCarForm: setidCarForm,
            setidArmaPlanForm:setidArmaPlanForm,
            userData: userData,
            setUserData: setUserData,
            carData:carData,
            setCarData: setCarData
        }}
        >
        {children}
        </UseContext.Provider>
    );
};