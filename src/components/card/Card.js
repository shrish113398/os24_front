import React, { useEffect, useState } from 'react'
import './Card.css'


const Card = () => {

  const [hovered, setHovered] = useState(false);
  const toggleHover = (e) => { setHovered(!hovered); console.log(e.target) };

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX } = event;
      const screenWidth = window.innerWidth;
      const cursorPositionPercentage = (clientX / screenWidth) * 100;

      const card = document.querySelector('.cards'); // Select the card element
      if (card) {
        if (cursorPositionPercentage <= 15) {
          card.style.transformOrigin = 'left';
        } else if (cursorPositionPercentage >= 85) {
          card.style.transformOrigin = 'right';
          console.log("right")
        } else {
          card.style.transformOrigin = 'center';
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  // const []
  const currDate = new Date();
  return (
    <>

      <div
        className="cards"
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <div className="cards__overlay ">
          <div className="card__title">Title</div>
          <div className="card__runtime">
            {currDate.getFullYear()}-{currDate.getMonth() + 1}-{currDate.getDate()}
            <span className="card__rating"><i class="fab fa-imdb" ></i>:9.5<i className="fas fa-star" /></span>
          </div>
          <div className="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo nihil aliquam maxime!</div>
          
        </div>
        <img src="https://i.etsystatic.com/18242346/r/il/fd61f8/2933715225/il_570xN.2933715225_a913.jpg" className='cards_img' alt="" />
      </div>
    </>
  )
}

export default Card
