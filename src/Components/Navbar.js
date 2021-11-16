import { useContext } from "react";
import { LangContext } from "../LangContext";
import { Box } from "@mui/material";
import LanguageSwitch from "./LanguageSwitch";
import { Link, Router } from "react-router-dom";

export default function Navbar(props) {
    const lang = useContext(LangContext).lang;

    function changeActiveItem(e) {
        document.getElementsByClassName("active-nav-item")[0].classList.remove("active-nav-item");
        document.getElementById(e.target.id).classList.add("active-nav-item");
    }

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "1.5rem",
            color: "#9388A2",
        }}>
            <Box sx={{ display: "flex", gap: "1.5rem", }}>
                <Link to="/bio" id="bio" className="nav-item active-nav-item" onClick={(e) => changeActiveItem(e)}>
                    Bio
                </Link> -
                <Link to="/projects" id="projects" className="nav-item" onClick={(e) => changeActiveItem(e)}>
                    {lang.navProjects}
                </Link> -
                <Link to="/contact" id="contact" className="nav-item" onClick={(e) => changeActiveItem(e)}>
                    Contact
                </Link>
            </Box>
            <Box sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                <LanguageSwitch />
            </Box>
        </Box>
    );
}