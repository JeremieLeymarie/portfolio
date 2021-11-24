import TagCloud from "TagCloud";
import { LangContext } from "../LangContext";
import { useContext, useEffect, useState } from "react";

export default function Cloud() {
    const lang = useContext(LangContext).lang;
    const mediaQuery = window.matchMedia("(max-width : 400px)");
    const container = "#word-cloud";
    // const options = { radius: 180 };
    const [radius, setRadius] = useState(180);
    let cloud;

    useEffect(() => {
        responsive();
        mediaQuery.addEventListener("change", responsive);
        console.log(lang)
        cloud = TagCloud(container, lang.cloud, { radius });
        return function cleanup() {
            cloud.destroy();
        }
    }, [radius, lang]);

    function responsive() {

        if (mediaQuery.matches) {
            setRadius(100);
        }
        else {
            setRadius(180);
        }
    }


    return (
        <div className="hobby-container">
            <div className="title hobbies">Hobbies</div>
            <div style={{ color: "white", fontFamily: "Raleway", fontSize: "1.1rem", width: "400px" }} id="word-cloud"></div>
        </div>
    );
}