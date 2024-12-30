import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../../styles/main.css';


const Card = ({ id, title, cover }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/logement/${id}`);
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
