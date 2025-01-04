import { useParams, Navigate } from 'react-router-dom';
import Carousel from '../components/Carousel/Carousel';
import HousingDetails from '../components/HousingDetails/HousingDetails';
import data from '../../src/data/data.json';
import '../styles/main.css';


const HouseDescription = () => {
    const { id } = useParams();
    const accommodation = data.find((item) => item.id === id);
  
    if (!accommodation) {
      return <Navigate to="/404" />; // Redirection vers une route inexistante pour afficher page "notFound"
    }

    // console.log('Données trouvées pour id:', accommodation);

    return (
    <div>
        <Carousel pictures={accommodation.pictures} />
        <HousingDetails title={accommodation.title} location={accommodation.location} 
         host={accommodation.host} tags={accommodation.tags} rating={accommodation.rating}
         description={accommodation.description} equipments={accommodation.equipments} /> 
    </div>
    );
};






export default HouseDescription;
