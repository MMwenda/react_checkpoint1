const Hello = ({name}) => {
  if(!name){
    return <h1>Hello there!</h1>
  }
    return(
        <div> 
    <h1>Hello {name}!</h1>
    <img src="https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="pikachu" style={{  
            width: "100%",
            height: "300px",
            objectFit: "cover", 
            borderRadius: "10px" 
        }} />
</div>
    )
}

export default Hello;