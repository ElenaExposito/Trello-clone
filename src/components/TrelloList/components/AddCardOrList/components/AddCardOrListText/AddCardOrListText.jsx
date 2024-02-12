import "./AddCardOrListText.css";
import { useState } from 'react';
import {string, func} from 'prop-types'

const AddCardOrListText = ({type, onClose}) => {
  const [title, setTitle] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAddCard = () => {
    // Lógica para añadir tarjeta
    console.log('Añadir Tarjeta:', title);
  };

  return (
    <div className="add-card-or-list-title">
      <label>
        <textarea
          className="add-card-or-list-title-textarea"
          type="text"
          placeholder={
            type === "card" ? "Enter a title for this card..." : "Enter list title..."
          }
          value={title}
          onChange={handleTitleChange}
        ></textarea>
      </label>
      <div className="add-card-or-list-buttons">
        <button className="add-card-or-list-button" onClick={handleAddCard}>
          {type === "card" ? "Add card" : "Add list"}
        </button>
        <button className="list-icon" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" style={{ fill: 'var(--text-color)' }}>
            <path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

AddCardOrListText.propTypes = {
  type: string.isRequired,
  onClose: func.isRequired
}

export default AddCardOrListText
