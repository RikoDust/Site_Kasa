import PropTypes from "prop-types";
import '../../styles/main.css';

const Banner = ({ image, text }) => { 
    return (
      <div className="banner">
        <img src={image} alt={text} className="banner-img"/>
        <h1>{text}</h1>
      </div>
    );
  };
  
  Banner.propTypes = {
    image: PropTypes.string.isRequired, // image doit être une chaîne de caractères
    text: PropTypes.string.isRequired,  // text doit être une chaîne de caractères
  };


export default Banner