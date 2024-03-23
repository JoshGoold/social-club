import React, {useState} from 'react'
function Item(props){

    const [img, setImg] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");

    function handleCart(){
        setImg(props.img)
        setTitle(props.title)
        setPrice(props.price)
        
    }
    
    return(
        <div className="product">
            <img src={props.img}></img>
            <h2>{props.title}</h2>
            <p>{props.price}</p>
            <button onClick={handleCart}>Add to Cart</button>
        </div>
    );
}

export default Item