function Button({text, onSelect}){
    return(
    <button 
        type="button" 
        className="btn btn-primary"
        onClick={() =>{
            onSelect();
        }}
    
    >{text}</button>
);
}

export default Button;