import React, { useContext } from "react";
import { LangContext } from "../LangContext";
import { Box, SvgIcon } from "@mui/material";

export default function Projects(props) {
    const projects = useContext(LangContext).lang.projects;
    return (
        <Box sx={{fontWeight : 600}}>
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

    function renderHtml(str) {
        return React.createElement("div", { dangerouslySetInnerHTML: { __html: str } });
    }

    return (
        <Box className="project-wrapper">
            <Box className="project-img" sx={{ backgroundImage: `url(${data.photo})` }}>
            </Box>
            <Box className="project-text-wrapper">
                <Box className="project-title">{data.name}</Box>
                <Box className="project-duration">{renderHtml(data.duration)}</Box>
                <Box className="project-number">{renderHtml(data.number)}</Box>
                <Box className="project-description">{data.desc}</Box>
                <Box>
                    {
                        data.techno.map((e) => {
                            return (
                                <SvgIcon >
                                    <path d={e} />
                                </SvgIcon>
                            )
                        })
                    }
                </Box>
            </Box>
        </Box>
    );
}
