import { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/main.css';
import arrowLeft from '../../assets/icons/arrow_left.png';
import arrowRight from '../../assets/icons/arrow_right.png';


const Carousel = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImages = pictures.length;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
    };


    return (
        <div className='carousel'>
            <div className='carousel-container'>
                <button className='carousel-button left' onClick={handlePrev}>
                    <img src={arrowLeft} alt="Précédent" />
                </button>

                <img 
                    src={pictures[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="carousel-image" />

                <button className="carousel-button right" onClick={handleNext}>
                    <img src={arrowRight} alt="Suivant" />
                </button>

                <div className='carousel-indicator'>
                    {currentIndex + 1}/{totalImages}
                </div>
            </div>
        </div>
    );
};


Carousel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired, 
  };




export default Carousel;
