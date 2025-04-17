import React, {useState, useEffect} from "react";

function BackButton({text}){
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = ()=>{
        if(window.pageYOffset > 200){
            setIsVisible(true);
        }
        else{
            setIsVisible(false);
        }
    };

    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        isVisible && (
            <button 
                type="button" 
                className="btn btn-primary"
                onClick={scrollToTop}
            
            >{text}</button>
        )
    );
}

export default BackButton;