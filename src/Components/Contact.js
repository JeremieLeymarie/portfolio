import { useContext, useState, useRef } from "react";
import { LangContext } from "../LangContext";
import { Box, CircularProgress, Snackbar } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';
import apiKeys from "../.env.js";



export default function Contact(props) {
    const lang = useContext(LangContext).lang;
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [open, setOpen] = useState(false);

    function sendEmail(e) {
        e.preventDefault();
        setLoading(true);
        let email = document.getElementById("email-adress").value;
        let msg = document.getElementById("message-email").value;
        if (email === "" | email === undefined) {
            setError(lang.emailError);
            setLoading(false);
        }
        else {
            if (msg === "" | msg === undefined) {
                setError(lang.msgError);
                setLoading(false);
            }
            else {
                if (document.getElementById("message-email").value !== "")
                    emailjs.sendForm(apiKeys.SERVICE_ID, apiKeys.TEMPLATE_ID, form.current, apiKeys.USER_ID)
                        .then((res) => {
                            if (res.text === "OK") {
                                setLoading(false);
                                setSuccess(lang.emailSuccess);
                            }
                        }).catch((err) => {
                            console.log(err)
                            setError(lang.error);
                        });
            }
        }
        setOpen(true);
    }


    return (
        <Box className="contact-wrapper">
            <Box className="contact-header">{lang.contactMe}</Box>
            <form ref={form} className="contact-container" onSubmit={sendEmail}>
                <Box sx={{ border: "2px solid #21B6A8", width: "max-content", height: "max-content", padding: "1.8rem 3rem", borderRadius: "1.5rem" }}>
                    <input name="address" type="email" id="email-adress" className="contact-input" placeholder={lang.emailPlaceholder} />
                </Box>
                <Box className="outer-rect-contact" >
                    <textarea name="message" id="message-email" className="email-input email-container" placeholder={lang.messagePlaceholder}>
                    </textarea>
                    {loading
                        ? <CircularProgress sx={{ position: "absolute", bottom: "3rem", right: "3rem", cursor: "pointer", color: "#A3EBB1" }} />
                        : <SendIcon onClick={sendEmail} className="bounce" sx={{ position: "absolute", bottom: "3rem", right: "3rem", cursor: "pointer", color: "#A3EBB1" }}></SendIcon>
                    }
                </Box>
            </form>
            {error &&
                <Snackbar sx={{ backgroundColor: "#EF476F", borderRadius: ".5rem" }}
                    open={open}
                    onClose={() => { setOpen(false); setSuccess(null); setError(null) }}
                    autoHideDuration={6000}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                >
                    <Box sx={{ backgroundColor: "#EF476F", color: "white", padding: ".8rem 1.5rem", borderRadius: ".5rem" }}>{error}</Box>
                </Snackbar>
            }
            {success &&
                <Snackbar sx={{ backgroundColor: "#21B6A8", borderRadius: ".5rem" }}
                    open={open}
                    onClose={() => { setOpen(false); setSuccess(null); setError(null) }}
                    message={success}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    autoHideDuration={6000}
                >
                    <Box sx={{ backgroundColor: "#21B6A8", color: "white", padding: ".8rem 1.5rem", borderRadius: ".5rem" }}>{success}</Box>
                </Snackbar>
            }
        </Box >
    )
}