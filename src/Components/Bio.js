import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import {
    Timeline, TimelineConnector,
    TimelineContent, TimelineDot, TimelineItem,
    TimelineSeparator
} from "@mui/lab";
import {
    Avatar, Box, Grid
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { LangContext } from "../LangContext";
import Skills from "./Skills";
import Socials from "./Socials";

export default function Bio(props) {
    const lang = useContext(LangContext).lang;
    function renderHtml(str) {
        return React.createElement("div", { dangerouslySetInnerHTML: { __html: str } });
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let arrow = document.getElementById("arrow");
            if (window.scrollY > 0) {
                arrow.style.visibility = "hidden";
            }
            else {
                arrow.style.visibility = "visible";
            }
        });
    }, []);

    return (
        <Box>
            <Grid container spacing={2} className="bio-wrapper">
                <Grid item xs={4} >
                    <Avatar className="portrait" sx={{ width: "300px", height: "300px", maxWidth: "600px", marginTop: "-5rem" }} alt="Jérémie Leymarie" src="/portrait.jpg" />
                </Grid>
                <Grid item xs={8} sx={{ textAlign: "right", display: "flex", alignItems: "center", }}>
                    <Box sx={{ display: "flex", alignItems: "flex-end", flexDirection: "column", marginTop: "-2rem" }}>
                        <Box sx={{ fontSize: "1.75rem", fontWeight: "500", color: "white" }}>Jérémie Leymarie</Box>
                        <Box sx={{ color: "#9388A2", fontSize: "1.15rem", fontWeight: "500", marginBottom: "2.5rem", marginTop: ".5rem" }}>{lang.developer}</Box>
                        <Box sx={{ color: "#21B6A8", fontSize: "1.15rem", fontWeight: "500", width: "70%" }}>{renderHtml(lang.desc)}</Box>
                        <Socials />
                    </Box>
                </Grid>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center", position: "absolute", bottom: "0px" }}>
                    <KeyboardArrowDownOutlinedIcon id="arrow" className="arrow" sx={{ color: "white", fontSize: "45px" }} />
                </Box>
            </Grid >

            <Box sx={{ display: "flex", width: "100%", justifyContent: "space-evenly" }}>
                <Formation />
                <Skills />
            </Box>
            <Experiences />
        </Box >

    );
}

function Formation() {
    const lang = useContext(LangContext).lang;

    return (
        <Box id="experience-wrapper">
            <Box className="title">{lang.education}</Box>
            <Timeline id="timeline" position="alternate" sx={{ color: "white", padding: "0px", width: "max-content" }}>
                <TimelineItem className="timeline-item">
                    <TimelineSeparator >
                        <TimelineDot variant="filled" sx={{ backgroundColor: "#21B6A8" }} />
                        <TimelineConnector sx={{ backgroundColor: "#21B6A8" }} />
                    </TimelineSeparator>
                    <TimelineContent >
                        <Box className="timeline-header">Web@cadémie by Epitech</Box>
                        <Box className="timeline-date">2021 - 2023</Box>
                        <Box className="timeline-desc">{lang.timelineDescWac}</Box>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem className="timeline-item">
                    <TimelineSeparator sx={{ color: "#21B6A8" }}>
                        <TimelineDot variant="outlined" sx={{ borderColor: "#21B6A8" }} />
                        <TimelineConnector sx={{ backgroundColor: "#21B6A8" }} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Box className="timeline-header">{lang.timelineHeaderFac}</Box>
                        <Box className="timeline-date">2017 - 2020</Box>
                        <Box className="timeline-desc">{lang.timelineDescFac}</Box>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem className="timeline-item">
                    <TimelineSeparator >
                        <TimelineDot variant="outlined" sx={{ borderColor: "#21B6A8" }} />
                        <TimelineConnector sx={{ backgroundColor: "#21B6A8" }} />
                    </TimelineSeparator>
                    <TimelineContent  >
                        <Box className="timeline-header">{lang.timelineHeaderCondo}</Box>
                        <Box className="timeline-date">2014 - 2017</Box>
                        <Box className="timeline-desc">{lang.timelineDescCondo}</Box>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>
    );
}

function Experiences() {
    const lang = useContext(LangContext).lang;

    return (
        <Box sx={{ marginBottom: "2rem", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <Box className="title">Experiences</Box>
            <Timeline className="experience-wrapper" id="timeline" position="alternate" sx={{ color: "white", padding: "0px", width: "max-content", display: "flex", justifyContent: "center", margin: "0px" }}>
                <TimelineItem className="timeline-item">
                    <TimelineSeparator >
                        <TimelineDot variant="outlined" sx={{ borderColor: "#21B6A8" }} />
                        <TimelineConnector sx={{ backgroundColor: "#21B6A8" }} />
                    </TimelineSeparator>
                    <TimelineContent >
                        <Box className="timeline-header">{lang.expHeaderISG}</Box>
                        <Box className="timeline-date">2021</Box>
                        <Box className="timeline-desc">{lang.expDescISG}</Box>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem className="timeline-item">
                    <TimelineSeparator sx={{ color: "#21B6A8" }}>
                        <TimelineDot variant="outlined" sx={{ borderColor: "#21B6A8" }} />
                        <TimelineConnector sx={{ backgroundColor: "#21B6A8" }} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Box className="timeline-header">{lang.expHeaderBabysitting}</Box>
                        <Box className="timeline-date">2015 - 2020</Box>
                        <Box className="timeline-desc">{lang.expDescBabysitting}</Box>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem className="timeline-item">
                    <TimelineSeparator >
                        <TimelineDot variant="outlined" sx={{ borderColor: "#21B6A8" }} />
                        <TimelineConnector sx={{ backgroundColor: "#21B6A8" }} />
                    </TimelineSeparator>
                    <TimelineContent  >
                        <Box className="timeline-header">{lang.expHeaderIcom}</Box>
                        <Box className="timeline-date">2014</Box>
                        <Box className="timeline-desc">{lang.expDescIcom}</Box>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem className="timeline-item">
                    <TimelineSeparator >
                        <TimelineDot variant="outlined" sx={{ borderColor: "#21B6A8" }} />
                        <TimelineConnector sx={{ backgroundColor: "#21B6A8" }} />
                    </TimelineSeparator>
                    <TimelineContent  >
                        <Box className="timeline-header">{lang.expHeaderTheater}</Box>
                        <Box className="timeline-date">2011</Box>
                        <Box className="timeline-desc">{lang.expDescTheater}</Box>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>
    );
}

