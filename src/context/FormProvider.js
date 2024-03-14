import { createContext, useContext, useState } from "react"


const FormContext = createContext();

const FormProvider = ({ children }) => {

    const [colorsArray, setColorsArray] = useState(['#123456', '#abcdef', '#789abc', '#fedcba', '#654321']);
    const [text, setText] = useState("");
    const [ctaText, setCtaText] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [selected, setSelected] = useState(0);

    


    return (
        <FormContext.Provider value={{
            colorsArray, setColorsArray, text, setText, selectedFile, setSelectedFile, text, setText, ctaText, setCtaText, selected, setSelected
        }}>
            {children}
        </FormContext.Provider>
    )
}

export const FormState = () => {
    return useContext(FormContext);
}

export default FormProvider;