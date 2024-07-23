function Socials(props){
    const {l, img, a} = props;
    return (
        <a href={l} target="_blank" rel="noreferrer"><img src={img} alt={a} /></a>
    );
}

export default Socials;