import { useContext } from "react";
import { LangContext } from "../LangContext";
import { Box } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export default function Contact(props) {
    const lang = useContext(LangContext).lang;
    return (
        <Box className="contact-wrapper">
            <Box className="contact-header">{lang.contactMe}</Box>
            <Box className="contact-container">
                <Box sx={{ border: "2px solid #21B6A8", width: "max-content", height: "max-content", padding: "1.8rem 3rem", borderRadius: "1.5rem" }}>
                    <input type="mail" className="contact-input" placeholder="your email adress..." />
                </Box>
                <Box className="outer-rect-contact" >
                    <textarea className="email-input email-container" placeholder="Write your email here...">
                    </textarea>
                    <SendIcon contentEditable="false" className="bounce" sx={{ position: "absolute", bottom: "3rem", right: "3rem", cursor: "pointer", color: "#A3EBB1" }}></SendIcon>
                </Box>
            </Box>
        </Box >
    )
}