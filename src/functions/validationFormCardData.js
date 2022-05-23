
const validationFormCardData = (plate) => {
    const plateRegex=/^[0-9a-zA-Z]{6}$/g;

    let valPlate = false;

    if(plateRegex.test(plate) && plate !==''){
        valPlate = true;
    } else {
        valPlate = false;
    }

    return (
        { 
            valPlate :valPlate,
        }
    ) 
}




export default validationFormCardData
