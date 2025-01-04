import PropTypes from 'prop-types';
import '../../styles/main.css';
import emptyStar from '../../assets/icons/empty_star.png';
import redStar from '../../assets/icons/red_star.png';
import Accordion from '../Accordion/Accordion';



const HousingDetails = ({ title, location, host, tags, rating, description, equipments }) => {

    return (
        <div className='housing-details'>
            <div className='housing-header'>
                <div className='header-left'>
                    <h2 className='housing-title'>{title}</h2>
                    <p className='housing-location'>{location}</p>
                    <div className='tags'>
                        {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
                <div className='header-right'>
                    {host && (
                    <div className='host-info'>
                        <p className='host-name'>{host.name}</p>
                        <img className='host-picture' style={{ backgroundImage: `url(${host.picture})` }} />
                    </div>
                    )}
                    <div className='host-rating'>
                        {[...Array(5)].map((_, i) => (
                            <img
                                key={i}
                                src={i < parseInt(rating, 10) ? redStar : emptyStar}
                                alt={i < parseInt(rating, 10) ? 'Étoile rouge' : 'Étoile vide'}
                                className='star'
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='housing-accordions'>
                        <Accordion title='Description' content={description} />
                        <Accordion title='Equipements' content={ <ul>{equipments.map((item, index) => (
                            <li key={index}>{item}</li>
                        ) )}</ul> } />
            </div>
        </div>
    );
};




HousingDetails.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
        name: PropTypes.string,
        picture: PropTypes.string,
    }),
    rating: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
  };




export default HousingDetails
