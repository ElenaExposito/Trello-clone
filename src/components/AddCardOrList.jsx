import { useState } from 'react';
import '../App.css'
import AddCardOrListText from "./AddCardOrListText";

const AddCardOrList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? 'add-title-closed' : 'add-title-open'} onClick={handleClick}>
      {isOpen ? null : (
        <>
          <span className='add-icon'>
            <svg width="15" height="15" viewBox="0 0 24 24" style={{ fill: 'var(--text-shadow)' }}>
              <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
            </svg>
          </span>
          <h2 className='add-title-text'>
            {isOpen ? 'Add card' : 'Add list'}
          </h2>
        </>
      )}
      {isOpen && <AddCardOrListText />}
    </div>
  );
}

export default AddCardOrList
