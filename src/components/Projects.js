import React, { useState } from 'react';
import Modal from './Modal';

const Projects = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'DIY Bartender',
      category: 'projects',
      description:
        'HTML, CSS, and Javascript',
      gitHub: "https://github.com/ParaRiot/DIY-Bartender",
      activePage: "https://parariot.github.io/DIY-Bartender/"
    },
    {
      name: 'Pawfect Pets',
      category: 'projects',
      description:
        'HTML, CSS, Javascript Bulma CSS, Font Awesome. NPM Packages: bcrypt, connect-session-sequelize, and express-session',
      gitHub: "https://github.com/Mayfieldmel/Pawfect-Friends",
      activePage: "https://pawfect-friends-app.herokuapp.com/"
    },
    {
      name: 'Player Up',
      category: 'projects',
      description:
        'HTML, CSS, PWA, Javascript, Bootstrap, Font Awesome, Google Maps API. NPM Packages: @apollo/client:^3.7.0, @testing-library/jest-dom:^4.2.4, @testing-library/react:^9.5.0, @testing-library/user-event:^7.2.1, graphql:^16.6.0, jwt-decode:^2.2.0, react:^16.13.1, react-router-dom:^5.2.1, react-scripts:^4.0.3, and concurrently:^5.1.0',
      gitHub: "https://github.com/Mayfieldmel/player-up",
      activePage: "https://playerup2022.herokuapp.com/"
    },
    {
      name: 'Note Taker',
      category: 'projects',
      description:
        'HTML, CSS, Javascript. NPM Packages: express:^4.16.4',
      gitHub: "https://github.com/Morganegilbert/note-taker",
      activePage: "https://desolate-beach-88553.herokuapp.com/"
    },
    {
      name: 'Social Network API',
      category: 'projects',
      description:
        'Javascript. NPM Packages: express:^4.18.1, moment:^2.29.4, and mongoose:^6.6.4',
      gitHub: "https://github.com/Morganegilbert/Social-Network-API",
      activePage: ""
    },
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../assets/images/projects/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
