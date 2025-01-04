import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import '../CardGallery/_cardGallery.scss';
import data from '../../data/data.json';

const CardGallery = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(data);
    }, []);

    return (
        <div className='card-gallery'>
            {projects.map((project) => (
                <Card key={project.id} id={project.id} title={project.title} cover={project.cover} />
            ))}
        </div>
    );
};




export default CardGallery
