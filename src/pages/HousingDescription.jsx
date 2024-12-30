import { useParams, Navigate } from 'react-router-dom';
import Carousel from '../components/Carousel/Carousel';
import data from '../../src/data/data.json';
import '../styles/main.css';


const HouseDescription = () => {
    const { id } = useParams();
    const accommodation = data.find((item) => item.id === id);
  
    if (!accommodation) {
      return <Navigate to="/404" />; // Redirection vers une route inexistante pour afficher page "notFound"
    }


    return (
    <div>
        <Carousel pictures={accommodation.pictures} />
    </div>
    );
};






export default HouseDescription;
