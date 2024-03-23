import shirt from '../assets/shirts.webp'

function Review(){
    
    const handleSubmit = () =>{
        alert("Success, Thanks for your review.")
    }

    return(
        <div className="review">
            <img src={shirt} />
            <h1>How did you enjoy your stay?<br></br> We'd love to know.</h1>
            <form>
                <input type="text" placeholder="Leave us a Review!"></input>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default Review