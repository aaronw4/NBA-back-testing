import React, {useState, useEffect} from 'react';
  
const ScrollButton = () =>{ 
  const [position, setPosition] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", onScroll)

    function onScroll() {
        if (window.scrollY > 300) {
            setPosition(true)
        } else if (window.scrollY < 300) {
            setPosition(false)
        }
    }
  })

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
    
  return (
    position === true ? 
      <button class='topButton' onClick={scrollToTop}>
        &#10142;
      </button>
      :
      null       
  );
}
  
export default ScrollButton;