import { LangContext, lang } from "../LangContext";
import { useState } from "react";

export default function LanguageProvider(props) {
    const [state, setState] = useState(lang.eng);
    function switchLang(e) {
        e.target.id === "fr" ? setState(lang.fr) : setState(lang.eng);
        document.getElementsByClassName("active-lang")[0].classList.remove("active-lang");
        document.getElementById(e.target.id).classList.add("active-lang");
    }
    return (
        <LangContext.Provider value={{
            lang: state,
            switchLang: switchLang
        }}>
            {props.children}
        </LangContext.Provider>
    );
}