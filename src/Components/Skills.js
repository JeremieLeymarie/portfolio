import { LinearProgress, Box } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { LangContext } from "../LangContext";

export default function Skills() {
    const [htmlProgress, setHtmlProgress] = useState(0);
    const [jsProgress, setJsProgress] = useState(0);
    const [phpProgress, setPhpProgress] = useState(0);
    const [MERNProgress, setMERNProgress] = useState(0);
    const [symfonyProgress, setSymfonyProgress] = useState(0);
    const [gitProgress, setGitProgress] = useState(0);
    const [linuxProgress, setLinuxProgress] = useState(0);
    const [SQLProgress, setSQLProgress] = useState(0);

    const lang = useContext(LangContext).lang;

    useEffect(() => {
        window.addEventListener("scroll", () => {
            try {
                const offset = document.getElementById("skills-wrapper").getBoundingClientRect();

                //If the element is bigger than the viewport, we load it when the top is in the viewport. 
                if (window.innerHeight <= document.getElementById("skills-wrapper").offsetHeight && offset.bottom <= window.innerHeight) {
                    setValues();
                }
                if (offset.top >= 0 && offset.bottom <= window.innerHeight) {
                    setValues();
                }

            } catch (error) {
                // console.log(error)
            }
        });
    }, []);

    function setValues() {
        setHtmlProgress(90);
        setJsProgress(80);
        setPhpProgress(70);
        setMERNProgress(55);
        setSymfonyProgress(50);
        setGitProgress(65);
        setLinuxProgress(50);
        setSQLProgress(85);
    }

  

    return (
        <Box id="skills-wrapper">
            <Box className="title">{lang.skills}</Box>
            <Box className="skill">
                <Box sx={{ width: "150px" }}>HTML/CSS</Box>
                <LinearProgress variant="determinate" className="skill-bar" value={htmlProgress} sx={progressBarStyle} />
            </Box>
            <Box className="skill">
                <Box sx={{ width: "150px" }}>Javascript</Box>
                <LinearProgress variant="determinate" className="skill-bar" value={jsProgress} sx={progressBarStyle} />
            </Box>
            <Box className="skill">
                <Box sx={{ width: "150px" }}>PHP</Box>
                <LinearProgress variant="determinate" className="skill-bar" value={phpProgress} sx={progressBarStyle} />
            </Box>
            <Box className="skill">
                <Box sx={{ width: "150px" }}>MERN</Box>
                <LinearProgress variant="determinate" className="skill-bar" value={MERNProgress} sx={progressBarStyle} />
            </Box>
            {/* <Box className="skill">
                <Box sx={{ width: "150px" }}>HTML/CSS</Box>
                <LinearProgress variant="determinate" className="skill-bar" value={htmlProgress} sx={progressBarStyle} />
            </Box> */}
            <Box className="skill">
                <Box sx={{ width: "150px" }}>Symfony/Laravel</Box>
                <LinearProgress variant="determinate" className="skill-bar" value={symfonyProgress} sx={progressBarStyle} />
            </Box>
            <Box className="skill">
                <Box sx={{ width: "150px" }}>Git</Box>
                <LinearProgress variant="determinate" className="skill-bar" value={gitProgress} sx={progressBarStyle} />
            </Box>
            <Box className="skill">
                <Box sx={{ width: "150px" }}>Linux (WSL2)</Box>
                <LinearProgress variant="determinate" className="skill-bar" value={linuxProgress} sx={progressBarStyle} />
            </Box>
            <Box className="skill">
                <Box sx={{ width: "150px" }}>SQL</Box>
                <LinearProgress variant="determinate" className="skill-bar" value={SQLProgress} sx={progressBarStyle} />
            </Box>
        </Box>
    );
}

const progressBarStyle = {
    minWidth: "300px",
    height: "22px",
    backgroundColor: "",
    borderRadius: ".25rem",
    borderWidth: "1px",
    borderColor: "#21B6A8",
    borderStyle: "solid",
    color: "green",
};
