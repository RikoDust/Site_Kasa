import { useEffect, useState } from "react";
import Accordion from '../Accordion/Accordion';
import data from '../../data/accordionsData.json';
import '../AccordionGroup/_accordionGroup.scss';


const AccordionGroup = () => {
    const [accordions, setAccordions] = useState([]);

    useEffect(() => {
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
