import ProductObj from "./product";

export function Rate() {

    return <p>{ProductObj.rating}</p>
}

export function Material(){
    return <p>{ProductObj.material}</p>
}

export function Button () {
    return( 
    <button style={{
        borderRadius:"10px",
        backgroundColor:"brown",
        fontSize:"27px",
        fontStyle:"italic"
    }}> Add to cart </button>
)}

