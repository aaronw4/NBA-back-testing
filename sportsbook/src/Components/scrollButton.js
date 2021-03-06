import React, {useState} from 'react';
  
const ScrollButton = () =>{ 
  const [position, setPosition] = useState(false)

  window.addEventListener("scroll", onScroll)

  function onScroll() {
      if (window.scrollY > 300) {
          setPosition(true)
      } else if (window.scrollY < 300) {
          setPosition(false)
      }
  }    

  function scrollToTop() {window.scrollTo({top: 0, behavior: 'smooth'})}
    
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