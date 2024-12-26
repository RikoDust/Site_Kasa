import PropTypes from 'prop-types';
import '../../styles/main.css';

const Card = ({ id, title, cover }) => {
    const handleClick = () => {
        console.log(`Carte cliquée : ${id}`);
    };

    return (
        <div className='card' onClick={handleClick}>
            <img src={cover} alt={title} className='card-cover' />
            <div className='card-title'>{title}</div>
        </div>
    );
};



Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  };




export default Card
