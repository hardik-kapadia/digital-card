import buttonDetails from "../resources/data/buttons.json"
import profile from "../resources/data/profile.json"
import footerSocials from "../resources/data/footer-socials.json"
import paragraphs from "../resources/data/paragraphs.json"


export function getButtonProperties(text: string): ButtonDetails {
    return buttonDetails.filter(button => button.text === text)[0];
}

export function readProfile(): Profile {
    return profile;
}

export function readFooterSocials(): FooterSocial[] {
    return footerSocials;
}

export function readParagraphs(): ParagraphDetails[] {
    return paragraphs;
}