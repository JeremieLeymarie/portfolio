import { useContext, useState, useRef, useEffect } from "react";
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

    useEffect(()=>{
        props.click("contact"); 
    });

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
                                document.getElementById("email-adress").value = "";
                                document.getElementById("message-email").value = ""; 
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
            <Box className="contact-icons" sx={{ marginTop: "2rem", display: "flex", gap: "2rem", backgroundColor: "#001D3D", padding: "1rem 2rem", borderRadius: "1rem" }}>
                <a rel="noreferrer" href="https://github.com/JeremieLeymarie" title="GitHub" target="_blank" alt="GitHub Profile J??r??mie Leymarie web developper">
                    <svg
                        className="social-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="45"
                        height="45"
                        fill="#21B6A8"
                        viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                    </svg>
                </a>
                <a rel="noreferrer" title="LinkedIn" href="https://www.linkedin.com/in/jeremie-leymarie/" target="_blank" alt="LinkedIn Profile J??r??mie Leymarie web developper">
                    <svg
                        className="social-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="45"
                        height="45"
                        fill="#21B6A8"
                        viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                </a>
                <a rel="noreferrer" title="Codingame" href="https://www.codingame.com/profile/f5b7f2d325e69b084fd8cb41b641de440341234" target="_blank" alt="Codingame Profile J??r??mie Leymarie web developper">
                    <svg style={{ borderRadius: ".5rem" }} className="social-icon" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" width="45"
                        height="45" stroke-miterlimit="2" viewBox="0 0 2083 2083" xmlns="http://www.w3.org/2000/svg" ><path d="M0 0h2083v2083H0z" fill="#21B6A8" /><g fill="#001D3D"><path d="M0 1636c411.554-97.771 692.897-283.177 724-637 10.714-131.212 67.364-243.777 216-319 207.675-80.617 305.728-52.164 390-10 92.668 81.722 119.468 199.94 50 371.5-31.914 100.266-291.001 223.867-410 258.5-392.539 175.893-595.504 430.282-561 783H0z" /><ellipse cx="1666.5" cy="408" rx="196.5" ry="192" /></g></svg>
                </a>
                <a rel="noreferrer" title="Resume" href="CV_JeremieLeymarie.pdf" /* download="CV_JeremieLeymarie.pdf" */ target="_blank" alt="Resume J??r??mie Leymarie web developper">
                    <svg style={{ borderRadius: ".5rem" }} className="social-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        width="48px" height="48px" viewBox="0 0 43.916 43.916"
                        xmlSpace="preserve">
                        <g><path fill="#21B6A8" d="M34.395,0H9.522c-2.762,0-5,2.239-5,5v33.916c0,2.761,2.238,5,5,5h24.871c2.762,0,5-2.239,5-5V5
		C39.395,2.239,37.154,0,34.395,0z M9.208,16.855c0-1.172,0.951-2.121,2.121-2.121h0.742c-0.791-0.874-1.277-2.03-1.277-3.304
		c0-2.723,2.209-4.931,4.932-4.931c2.725,0,4.932,2.207,4.932,4.932c0,1.272-0.486,2.429-1.279,3.303h0.709
		c1.172,0,2.121,0.949,2.121,2.121v3.578c0,1.122-0.875,2.03-1.975,2.106h-9.051c-1.1-0.076-1.975-0.984-1.975-2.106V16.855
		L9.208,16.855z M32.708,37.416h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,37.416,32.708,37.416z
		 M32.708,29.916h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,29.916,32.708,29.916z M32.708,22.416
		h-6.5c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h6.5c1.104,0,2,0.896,2,2C34.708,21.52,33.812,22.416,32.708,22.416z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                    </svg>
                </a>
            </Box>
            <form ref={form} className="contact-container" onSubmit={sendEmail}>
                <Box className="email-wrapper" sx={{ border: "2px solid #21B6A8", width: "max-content", height: "max-content", padding: "1.8rem 3rem", borderRadius: "1.5rem" }}>
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
        </Box>
    )
}