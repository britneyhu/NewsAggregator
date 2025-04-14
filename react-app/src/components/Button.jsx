function Button({Text, onSelect}){
    return(
    <button 
        type="button" 
        className="btn btn-primary"
        onClick={() =>{
            onSelect();
        }}
    
    >{Text}</button>
);
}

export default Button;