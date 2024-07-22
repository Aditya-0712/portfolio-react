function Card(props){
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
			<a className="view" href={gitlink} target="_blank">
				<p>View Project</p>
				<img src="../images/link.svg" alt="github" />
			</a>
        </div>
    );
}

export default Card;