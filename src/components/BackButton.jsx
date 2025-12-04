//Component for back to top button

import React, {useState, useEffect} from "react";

//Component takes text (str) to display what text is on the button
function BackButton({text}){
    const [isVisible, setIsVisible] = useState(false);

    //Sets visibility of button to true if the user has scrolled down 200px, otherwise sets it to not visible
    const handleScroll = ()=>{
        if(window.pageYOffset > 200){
            setIsVisible(true);
        }
        else{
            setIsVisible(false);
        }
    };

    //scrolls user to top of the page when clicked
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    //adds an event listener for scroll and executes handleScroll to detect if user has scrolled down enough on scroll
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
                className="btn btn-primary back-button"
                onClick={scrollToTop}
            
            >{text}</button>
        )
    );
}

export default BackButton;