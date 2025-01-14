import { useEffect, useState } from "react"; // useState stocke les données des accordéons localement - useEffect remplit l'état accordions avec les données JSON (data)
import Accordion from '../Accordion/Accordion';
import data from '../../data/accordionsData.json';
import '../AccordionGroup/_accordionGroup.scss';


const AccordionGroup = () => {
    const [accordions, setAccordions] = useState([]);

    useEffect(() => { // met à jour l'état accordion avec les données importées depuis accordionsData
        setAccordions(data);
      }, []);
    
      return (
        <div className="accordion-group">
          {accordions.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
        </div>
      );
    };
    




export default AccordionGroup;
