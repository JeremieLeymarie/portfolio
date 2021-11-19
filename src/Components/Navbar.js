import { useContext } from "react";
import { LangContext } from "../LangContext";
import { Box } from "@mui/material";
import LanguageSwitch from "./LanguageSwitch";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    const lang = useContext(LangContext).lang;
    console.log(props.click); 
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "1.5rem",
            color: "#9388A2",
        }}>
            <Box sx={{ display: "flex", gap: "1.5rem", }}>
                <Link to="/bio" id="bio" className="nav-item active-nav-item" onClick={()=>props.click("bio")}>
                    Bio
                </Link> -
                <Link to="/projects" id="projects" className="nav-item" onClick={()=>props.click("projects")}>
                    {lang.navProjects}
                </Link> -
                <Link to="/contact" id="contact" className="nav-item" onClick={()=>props.click("contact")}>
                    Contact
                </Link>
            </Box>
            <Box sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                <LanguageSwitch />
            </Box>
        </Box>
    );
}