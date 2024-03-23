
function Info(props){
    return(

        <div className="info">
            <img src={props.img}></img>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    );
}
export default Info