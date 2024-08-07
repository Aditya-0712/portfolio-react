import Topbar from "./Topbar";
import Socials from "./Socials";
import About from "./About";
import Resume from "./Resume";
import Heading from "./Heading";
import { Card1, Card2 } from "./Card";

import github from "../images/github.svg";
import linkedin from "../images/lnkedin.svg";
import codepen from "../images/codepen.svg";
import instagram from "../images/instagram.svg";
import x from "../images/x.svg";
import card from "../images/card.png";
import blogbase from "../images/blogbase.png";
import ecom from "../images/ecommerce.png";
import api from "../images/githubapi.png";
import form from "../images/multistep.png";
import agecalc from "../images/agecalc.png";
import chat from "../images/chat.png";
import resume from "../resume/Updated Resume Aditya.pdf";

import { c1, c2, c3, c4, c5, c6, c7, c8} from "./Content";

function Mobile(){
    let arr1=["HTML", "CSS", "JavaScript", "Node.js", "EJS", "Express.js", "Mongodb"];
    let arr2=["HTML", "CSS", "JavaScript"];
    let arr3=["HTML", "CSS", "JavaScript", "Node.js", "EJS", "Express.js", "Mongodb", "Mongoose", "MVC Model"]
    let arr4=["HTML", "CSS", "JavaScript", "JSON"]
    let arr5=["HTML", "CSS", "JavaScript", "Node.js", "Mongodb", "Express.js", "Mongoose", "EJS"]

    return (
        <div className="mobile">
            <Topbar />

            <p className="title">Aditya Batgeri</p>
			<p className="heading">Full Stack Developer</p>
			<p className="desc">I Design, Build and Manage Scalable Web Applications from Frontend to Backend.</p>

            <div className="socials">
                <Socials l="https://github.com/Aditya-0712" img={github} a="github" />
                <Socials l="https://www.linkedin.com/in/aditya-batgeri-00675122b/" img={linkedin} a="linkedin" />
                <Socials l="https://codepen.io/Aditya-0712" img={codepen} a="codepen" />
                <Socials l="https://www.instagram.com/aditya.batgeri/" img={instagram} a="instagram" />
                <Socials l="" img={x} a="x" />
            </div>

            <Resume path={resume} />
            <Heading title="ABOUT" />
            <About />

            <Heading title="EXPERIENCE" />
            <Card1 duration="2024 JANUARY - MARCH" topic="Intern at Next24 Technologies" content={c1} arr={arr1}/>

            <Heading title="PROJECTS" />

            <Card2 duration="2024 - PRESENT" topic="Interactive Card Details Form" content={c2} arr={arr2} img2={card} alternative="card" gitlink="https://github.com/Aditya-0712/Interactive-Card-Details-Form" />

            <Card2 duration="2024 - PRESENT" topic="Blogging Website (BlogBase)" content={c3} arr={arr3} img2={blogbase} alternative="blogbase" gitlink="https://github.com/Aditya-0712/BlogBase" />

            <Card2 duration="2024 - PRESENT" topic="Fully Operational E-Commerce Website" content={c4} arr={arr3} img2={ecom} alternative="ecommerce" gitlink="https://github.com/Aditya-0712/E-Commerce" />

            <Card2 duration="2024 - PRESENT" topic="Github API Clone" content={c5} arr={arr4} img2={api} alternative="githubapi" gitlink="https://github.com/Aditya-0712/Fyle-Internship-Assignment" />

            <Card2 duration="2024 - PRESENT" topic="Multi Step Form" content={c6} arr={arr5} img2={form} alternative="multi step form" gitlink="https://github.com/Aditya-0712/Multi-step-Form" />

            <Card2 duration="2024 - PRESENT" topic="Age Calculator" content={c7} arr={arr2} img2={agecalc} alternative="Age Calculator" gitlink="https://github.com/Aditya-0712/Age-Calculator" />

            <Card2 duration="2024 - PRESENT" topic="Chat App" content={c8} arr={arr5} img2={chat} alternative="Chat App" gitlink="https://github.com/Aditya-0712/ChatApp" />

            <p className="heading">Thank you!</p>
			<p className="desc">More incoming...</p>
        </div>
    );
}

export default Mobile;