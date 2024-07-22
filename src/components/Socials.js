function Socials(props){
    const {l, img, a} = props;
    return (
        <a href={l} target="_blank"><img src={img} alt={a} /></a>
    );
}

export default Socials;