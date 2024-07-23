import tmp from "../images/link.svg";

function Card1(props){
    const {duration, topic, content, arr} = props;
    return (
        <div className="exp">
            <p className="date">{duration}</p>
			<p className="pos">{topic}</p>
			<p className="details">{content}</p>
			<div className="labels">
                {arr.length !== 0 && arr.map((item, index) => <p key={index}>{item}</p>)}
			</div>
        </div>
    );
}

function Card2(props){
	const {duration, topic, content, img2, alternative, gitlink, arr} = props;
    return (
        <div className="exp">
            <p className="date">{duration}</p>
			<p className="pos">{topic}</p>
			<p className="details">{content}</p>
			<div className="labels">
                {arr.length !== 0 && arr.map((item, index) => <p key={index}>{item}</p>)}
			</div>
			<img src={img2} alt={alternative} />
			<a className="view" href={gitlink} target="_blank" rel="noreferrer">
				<p>View Project</p>
				<img src={tmp} alt="github" />
			</a>
        </div>
    );
}

export {Card1, Card2};