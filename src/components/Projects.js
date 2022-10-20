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
        'HTML, CSS, Javascript Bulma CSS, Font Awesome NPM Packages: bcrypt, connect-session-sequelize, and express-session',
      gitHub: "https://github.com/Mayfieldmel/Pawfect-Friends",
      activePage: "https://pawfect-friends-app.herokuapp.com/"
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
