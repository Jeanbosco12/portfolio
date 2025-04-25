import React, { useState } from 'react';
import { FaBlackberry, FaKeyboard, FaTimes } from 'react-icons/fa';
import './MyPhone.css'

const MyPhone = () =>{
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="phone-container">
          {!isOpen ? (
            <button 
              className="phone-toggle"
              onClick={() => setIsOpen(true)}
            >
              <FaKeyboard className="phone-icon" />
            </button>
          ) : (
            <div className="phone-screen">
              <div className="phone-header">
                <div className="phone-header-content">
                  <FaBlackberry className="phone-icon" />
                  <h3>Mobile</h3>
                </div>
                <button 
                  className="close-button"
                  onClick={() => setIsOpen(false)}
                >
                  <FaTimes />
                </button>
              </div>
            </div>
          )}
        </div>
      );
}

export default MyPhone;