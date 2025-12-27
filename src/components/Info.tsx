import {getButtonProperties, readProfile} from "../services/readResources.ts";
import handleClicks from "../scripts/handleClicks.ts";

function Button(props: ButtonDetails) {
    return (
        <span className="social-button"
              style={{backgroundColor: props.backgroundColor, color: props.textColor}}
              onClick={() => handleClicks(props.link)}>
            <img src={new URL(props.logo, import.meta.url).href} alt={props.text + "icon"} className="button-icon"/>
            <span className="button-text">{props.text}</span>
        </span>
    );
}

export default function Info() {

    const profile: Profile = readProfile();

    return (
        <div className="profile">
            <img className="profile-picture" src={new URL(profile.picture, import.meta.url).href}
                 alt="Hardik Kapadia picture"/>
            <span className="profile-name">{profile.name}</span>
            <span className="profile-job">{profile.job}</span>
            <span className="profile-website"><a href={profile.website} target="_blank">{profile.website}</a></span>
            <div className="social-buttons">
                <Button {...getButtonProperties(profile.socials[0])}></Button>
                <Button {...getButtonProperties(profile.socials[1])}></Button>
            </div>
        </div>
    );
}