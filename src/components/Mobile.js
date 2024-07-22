import Topbar from "./Topbar";
import Socials from "./Socials";
import Resume from "./Resume";
import Heading from "./Heading";
import Card from "./Card";

import github from "../images/github.svg";
import linkedin from "../images/lnkedin.svg";
import codepen from "../images/codepen.svg";
import instagram from "../images/instagram.svg";
import x from "../images/x.svg";

function Mobile(){
    let arr1=[];

    const c1= 'I was thrilled to be selected as a Web Development intern at Next24 Technologies, a dynamic startup based in Noida. This opportunity came through the government internship portal AICTE and spanned two months in an online format. Each week, I received various tasks that I needed to complete before their respective deadlines and present during our weekly meetings. My responsibilities ranged from creating Figma designs and implementing frontend features to handling backend operations like authentication, validation, and session management. Additionally, I worked on developing parody websites and continually expanded my knowledge by learning new concepts.';

    return (
        <div style={{flexDirection:"column"}}>
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

            <Resume path="../resume/Updated Resume Aditya.pdf" />
            <Heading title="ABOUT" />
            <p className="me">
				I am Aditya Batgeri, a third-year B.Tech student majoring in <span class="span1">Computer Science</span> at Pune Vidyarthi Griha College of Engineering and Technology, affiliated with Savitribai Phule Pune University. With a strong foundation in both <span class="span1">front-end</span> and <span class="span1">back-end web development</span>, I have developed a particular affinity for managing backend operations, including authentication, validation, and database management.Over the past two years, I have honed my skills in various programming languages such as C++, Python, Java, and JavaScript.<br></br><br></br>My web development expertise includes proficiency in <span class="span1">modern frameworks</span> and technologies like React.js, Node.js, MongoDB, and MySQL.In addition to web development, I have also delved into <span class="span1">data science</span> and data <span class="span1">visualization</span>, acquiring skills in pandas, NLTK, scikit-learn, Matplotlib, and Seaborn. <br></br><br></br>These tools enable me to effectively analyze and visualize data, enhancing my ability to derive insights and build data-driven applications.As a dedicated and passionate developer, I continually strive to expand my knowledge and take on new challenges in the ever-evolving fields of web development and data science.I have participated in numerous projects and competitions, including the Smart India Hackathon, Google Developers Club Ideathon, and various project-based learning initiatives.
			</p>

            <Heading title="EXPERIENCE" />
            <Card duration="2024 JANUARY - MARCH" topic="Intern at Next24 Technologies" content={c1} arr={arr1}/>
        </div>
    );
}

export default Mobile;