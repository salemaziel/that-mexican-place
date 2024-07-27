import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#___gatsby'); // Set root element for accessibility

const LocationModal = ({ onSelect }) => {
    return (
        <Modal
            isOpen={true}
            contentLabel="Select Location"
            className="modal"
            overlayClassName="overlay"
        >
            <h2>Select Your Location</h2>
            <button onClick={() => onSelect('location-1')}>Location 1</button>
            <button onClick={() => onSelect('location-2')}>Location 2</button>
        </Modal>
    );
};

export default LocationModal;