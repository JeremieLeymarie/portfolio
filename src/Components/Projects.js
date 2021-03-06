import React, { useContext, /*useState ,*/  useEffect } from "react";
import { LangContext } from "../LangContext";
import { Box } from "@mui/material";
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { duotoneSea, a11yDark, dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Projects(props) {
    const projects = useContext(LangContext).lang.projects;
    // const [filteredProjects, setProjects] = useState(projects);
    // const [searchValue, setSearch] = useState(null);

    useEffect(() => {
        props.click("projects"); 
    }, []);

    // function search(value) {
    //     let tmp = [];
    //     if (value !== null) {
    //         projects.forEach((e) => {
    //             e.tags.forEach((tag)=>{
    //                 if(tag.startsWith(value)){
    //                     tmp.push(e);
    //                 }
    //             });
    //         })
    //     }
    //     if (tmp.length === 0) {
    //         setProjects(projects);
    //     } else {
    //         setProjects(tmp);
    //     }
    // }
    return (
        <Box sx={{ fontWeight: 600, minHeight: "91vh" }}>
            {/* <input onChange={(e) => setSearch(e.target.value)} style={{ backgroundColor: "white" }} type="text" id="search" /> */}
            {
                projects.map((e) => {
                    return (
                        <Project data={e} />
                    )
                })
            }
        </Box>
    )
}

function Project({ data }) {
    const seeSource = useContext(LangContext).lang.seeSource;

    function renderHtml(str) {
        return React.createElement("div", { dangerouslySetInnerHTML: { __html: str } });
    }

    return (

        <Box className={"project-wrapper " + data.className}>
            <a rel="noreferrer" href={data.see ? data.see : data.source} target="_blank"
                className="project-img"
                style={{ backgroundImage: `url(${data.photo})` }}
            >
            </a>

            <Box className="project-text-wrapper">
                <Box className="project-header">
                    <Box className="project-title">{data.name}</Box>
                    <a rel="noreferrer" href={data.source} target="_blank" alt={data.name + " J??r??mie Leymarie"}><Box className="project-github">{seeSource}</Box></a>
                </Box>
                <Box className="project-duration">{renderHtml(data.duration)}</Box>
                <Box className="project-number">{renderHtml(data.number)}</Box>
                {data.run &&
                    <Box className="project-test">Test it <span className="underline">here</span></Box>
                }
                {data.see &&
                    <a rel="noreferrer" href={data.see} target="_blank"><Box className="project-test">See the project <span className="underline">here</span></Box></a>
                }
                <Box className="project-description">{data.desc}</Box>
                <Box sx={{ display: "flex", gap: "1rem", marginTop: "1rem", alignItems: "center", height: "max-content" }}>
                    {
                        data.techno.map((e) => {
                            return (
                                <Box key={Math.random()}>
                                    {renderHtml(e)}
                                </Box>
                            )
                        })
                    }
                </Box>
            </Box>
        </Box >
    );
}


// if (hovered) {
//     return (
//         <Box className="project-wrapper">
//             <Box
//                 className="project-img"
//                 sx={{ backgroundImage: `url(${data.photo})` }}
//                 onMouseEnter={() => setHovered(true)}
//                 onMouseLeave={() => setHovered(false)}
//             >
//             </Box>
//             <Box className="project-text-wrapper">
//                 <SyntaxHighlighter
//                     language="jsx"
//                     style={dracula}
//                     showLineNumbers
//                     wrapLines={true}
//                 >
//                     {`
// function playTrack(e) {

// if (!audioPlaying) {
//     let audio = document.getElementById("audio" + e.target.id);
//     audio.play();
//     setAudioPlaying(e.target.id);
// }
// else if (audioPlaying != false && audioPlaying != e.target.id) {
//     let audio = document.getElementById("audio" + audioPlaying);
//     audio.pause();
//     audio = document.getElementById("audio" + e.target.id);
//     audio.play();
//     setAudioPlaying(e.target.id);
// }
// else {
//     let audio = document.getElementById("audio" + audioPlaying);
//     audio.pause();
//     setAudioPlaying(false);
// }
// }
//                     `}
//                 </SyntaxHighlighter>
//             </Box>
//         </Box >
//     );
// }
// else {