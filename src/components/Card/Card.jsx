import PropTypes from 'prop-types'; // sert a valider les types de propriétés que le composant recoit
import { useNavigate } from 'react-router-dom'; // permet la navigation programmatique d'une page à une autre
import '../Card/_card.scss';


const Card = ({ id, title, cover }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/logement/${id}`); // structure de l'URL avec l'ID passé en prop
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
