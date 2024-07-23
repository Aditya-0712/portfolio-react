import Resume from "./Resume";
import Section from "./Section";
import Socials from "./Socials";

import resume from "../resume/Updated Resume Aditya.pdf";
import github from "../images/github.svg";
import linkedin from "../images/lnkedin.svg";
import codepen from "../images/codepen.svg";
import instagram from "../images/instagram.svg";
import x from "../images/x.svg";

function Left(){
    return (
        <div className="left">
            <p className="pc_title">Aditya Batgeri</p>
			<p className="pc_heading">Full Stack Developer</p>
			<p className="pc_desc">I Design, Build and Manage Scalable Web Applications from Frontend to Backend.</p>

            <Resume path={resume} />

            <div className="section">
                <Section sectName="ABOUT" />
                <Section sectName="EXPERIENCE" />
                <Section sectName="PROJECTS" />
            </div>

            <div className="socials">
                <Socials l="https://github.com/Aditya-0712" img={github} a="github" />
                <Socials l="https://www.linkedin.com/in/aditya-batgeri-00675122b/" img={linkedin} a="linkedin" />
                <Socials l="https://codepen.io/Aditya-0712" img={codepen} a="codepen" />
                <Socials l="https://www.instagram.com/aditya.batgeri/" img={instagram} a="instagram" />
                <Socials l="" img={x} a="x" />
            </div>
        </div>
    );
}

export default Left;