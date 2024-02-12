import { useState } from 'react';
import AddCardOrListText from "./components/AddCardOrListText/AddCardOrListText";
import "./AddCardOrList.css";

const AddCardOrList = ({type}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={isOpen ? 'add-title-open' : 'add-title-closed'}
      onClick={handleClick}
    >
      {isOpen ? <AddCardOrListText type={type} onClick={(e) => e.stopPropagation()} /> : (
        <>
          <span className='add-icon'>
            <svg width="15" height="15" viewBox="0 0 24 24" style={{ fill: 'var(--text-shadow)' }}>
              <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
            </svg>
          </span>
          <h2 className='add-title-text'>
            {type === "card" ? "Add a card" : "Add another list"}
          </h2>
        </>
      )}
    </div>
  );
}

export default AddCardOrList;

