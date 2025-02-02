// src/components/CharacterCard.js
import React, { useState } from "react";

const CharacterCard = ({ character }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

  // Extraemos los datos relevantes de la API
  const { name, images, debut, family, jutsu, uniqueTraits, personal } =
    character;
  const imageUrl = images && images[0]; // Tomamos la primera imagen de las imágenes disponibles

  // Verificación de que la propiedad debut existe antes de intentar acceder a sus valores
  const debutInfo = debut
    ? debut.manga ||
      debut.anime ||
      debut.novel ||
      debut.movie ||
      debut.game ||
      debut.ova
    : "Desconocido";

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="character-card">
      {/* Imagen, nombre y el debut del personaje */}
      {imageUrl && <img src={imageUrl} alt={name} onClick={openModal} />}

      <h3>{name}</h3>

      <div className="debut-info">
        <p>
          <strong>Debut:</strong> {debutInfo}
        </p>
      </div>

      {/* Si el modal está abierto, mostrar el modal con la información completa */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-left">
              {/* Imagen del personaje en el modal */}
              {imageUrl && <img src={imageUrl} alt={name} />}

              <h3>{name}</h3>

              <div className="debut-info">
                <p>
                  <strong>Debut:</strong> {debutInfo}
                </p>
              </div>

              
              {family && Object.keys(family).length > 0 && (
                <div className="family">
                    <h4>Familia:</h4>
                  <ul>
                    {Object.keys(family).map((key, index) => (
                      <li key={index}>
                        <strong>
                          {key.charAt(0).toUpperCase() + key.slice(1)}:
                        </strong>{" "}
                        {family[key]}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              
              {uniqueTraits && uniqueTraits.length > 0 && (
                <div className="unique-traits">
                    <h4>Características Únicas:</h4>
                  <ul>
                    {uniqueTraits.map((trait, index) => (
                      <li key={index}>{trait}</li>
                    ))}
                  </ul>
                </div>
              )}
              {personal && personal.status && (
                <div className="personal-info">
                  <p>
                    <strong>Estado:</strong> {personal.status}
                  </p>
                </div>
              )}
            </div>

            <div className="modal-right">
              <h4>Jutsu:</h4>
              {jutsu && jutsu.length > 0 && (
                <div className="jutsu">
                  <ul>
                    {jutsu.map((jutsuItem, index) => (
                      <li key={index}>{jutsuItem}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <button className="close-modal" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterCard;