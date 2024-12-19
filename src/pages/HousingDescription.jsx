import { useParams } from "react-router-dom";

const HouseDescription = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Logement ID: {id}</h1>
        </div>
    );
};






export default HouseDescription;