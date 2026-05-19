import React, { useEffect } from 'react';
import { X, MapPin, User, DollarSign } from 'lucide-react';
import './PropertyModal.css';

const PropertyModal = ({ property, onClose }) => {
  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!property) return null;

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div 
        className="modal__content" 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={onClose}>
          <X size={24} />
        </button>
        <div 
          className="modal__header"
          style={{ backgroundImage: `url(${property.image})` }}
        >
          <div className="modal__fade"></div>
        </div>
        
        <div className="modal__body">
          <h2 className="modal__title">{property.title}</h2>
          
          <div className="modal__details-grid">
            <div className="modal__detail-item">
              <MapPin size={18} className="modal__icon" />
              <span>{property.location}</span>
            </div>
            <div className="modal__detail-item modal__price">
              <DollarSign size={18} className="modal__icon" />
              <span>{property.price}</span>
            </div>
            <div className="modal__detail-item">
              <User size={18} className="modal__icon" />
              <span>{property.agentName}</span>
            </div>
          </div>

          <p className="modal__specs">{property.details}</p>
          <p className="modal__description">{property.description}</p>
          
          {property.extraSpecs && (
            <div className="modal__extra-specs">
              <h3 className="modal__extra-specs-title">Property Details</h3>
              <div className="modal__extra-specs-grid">
                {property.extraSpecs.map((spec, i) => (
                  <div key={i} className="modal__extra-spec-item">
                    <span className="modal__spec-label">{spec.label}: </span>
                    <span className="modal__spec-value">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button className="modal__contact-btn">Contact Agent</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;
