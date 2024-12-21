import '../../styles/main.css';



const Error404 = () => {
    return (
        <div className='error404'>
            <h2 className='error-title'>404</h2>
            <p className='error-text'>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Oups! La page que vous demandez n'existe pas.</p>
            <a className='a' href="#home">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Retourner sur la page d'accueil</a>
        </div>
    );
};


export default Error404