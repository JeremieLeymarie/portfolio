import TagCloud from "TagCloud";
import { LangContext } from "../LangContext";
import { useContext, useEffect } from "react";

export default function Cloud() {
    const lang = useContext(LangContext).lang;

    useEffect(() => {
        const container = "#word-cloud";
        const options = {radius : 180};
        TagCloud(container, lang.cloud, options);
    });


    return (
        <div className ="hobby-container">
            <div className="title hobbies">Hobbies</div>
            <div style={{ color: "white", fontFamily: "Raleway", fontSize: "1.1rem", width : "400px" }} id="word-cloud"></div>
        </div>
    );
}