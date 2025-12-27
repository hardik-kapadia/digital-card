import {readFooterSocials} from "../services/readResources.ts";
import type {JSX} from "react";
import handleClicks from "../scripts/handleClicks.ts";

function FooterSocial(social: FooterSocial): JSX.Element {
    return (
        <img className="footer-icon" src={new URL(social.logo, import.meta.url).href} alt={social.name}
             onClick={() => handleClicks(social.url)}/>
    );
}

export default function Footer() {

    const socials: FooterSocial[] = readFooterSocials();

    return (
        <footer>
            {socials.map((social: FooterSocial, index: number) =>
                <FooterSocial key={social.name || index} {...social} />
            )}
        </footer>
    );
}