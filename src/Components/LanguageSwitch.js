import { Box } from "@mui/material";
import { LangContext } from "../LangContext";

export default function Language(props) {
    return (
        <LangContext.Consumer>
            {({ switchLang }) => (
                <Box className="language-switch">
                    <span className="lang" id="fr" onClick={switchLang}>FR</span> - <span className="lang active-lang" id="eng" onClick={switchLang}>ENG</span>
                </Box>
            )}
        </LangContext.Consumer>
    );
}
