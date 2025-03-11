import ProductObj from "./product";

function Image() {
    return (
        <img src={ProductObj.image} alt="product" className="w-100 rounded" style={{  
            height: "400px",
            objectFit: "cover",   
        }} />
    )
}

export default Image;