import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, gitHub, activePage, index } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img
          src={require(`../../assets/images/projects/${index}.jpg`)}
          alt="current project"
        />
        <p>{description}</p>
        <p>View the GitHub Repository <a class="link" href={gitHub} alt={name}>Link!</a></p>
        <p>View the active page <a class="link" href={activePage} alt={name}>Link!</a></p>

        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
