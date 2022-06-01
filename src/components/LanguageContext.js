import { createContext, useState, useEffect} from "react";
import jsonData from '../info.json'


export const LangContext = createContext("en");

const Language = ({children}) => {
    const [lang, setLang] = useState("en")
    const [data, setData] = useState(jsonData.en)


    const GITHUB = "https://github.com/Eze-Alarcon"
    const LINKEDIN = "https://www.linkedin.com/in/ezequiel-alarcon-3745b0170/"

    useEffect(() => {
        if (lang === "en") {
            setData(() => jsonData.en)
        } else if (lang === "es") {
            setData(() => jsonData.es)
        }
    }, [lang])

    return (  
        <LangContext.Provider value={{
            lang, 
            setLang, 
            data, 
            GITHUB, 
            LINKEDIN}
        }>
            {children}
        </LangContext.Provider>
    )
}

export default Language