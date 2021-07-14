
    const validationFormHome = (dataV) => {
        const dniRegex=/^[0-9]{8}$/g;   
        const rucRegex=/^[0-9]{11}$/g;
        const phoneRegex=/^[0-9]{9}$/g;  
        const plateRegex=/^[0-9a-zA-Z]{6}$/g;

        let isValid = true;
        let valDocument = false;
        let valPhone = false;
        let valPlate = false;
        let valTyc = false;

        if((dataV.documentType==='DNI' && dniRegex.test(dataV.document))||(dataV.documentType==='RUC' && rucRegex.test(dataV.document))) {
            valDocument = true;
        }else {
            valDocument = false; 
            isValid = false;
        }

        if(phoneRegex.test(dataV.phone)){
            valPhone = true;
        }else {
            valPhone = false; 
            isValid = false;
        }

        if(plateRegex.test(dataV.plate)){
            valPlate = true;
        } else {
            valPlate = false;
            isValid = false;
        }

        if(dataV.tyc){
            valTyc = true;
        } else {
            valTyc = false; 
            isValid = false;
        }
        return (
            { 
                isValid: isValid,
                valDocument: valDocument,
                valPhone: valPhone,
                valPlate: valPlate,
                valTyc: valTyc
            }
        ) 
    }


    

export default validationFormHome
