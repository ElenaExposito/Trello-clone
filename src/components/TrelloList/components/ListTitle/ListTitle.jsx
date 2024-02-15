import { useState, useContext } from 'react';
import ContextAPI from '../../../../ContextAPI';
import PropTypes from 'prop-types';
import "./ListTitle.css";

const ListTitle = ({ title, listId }) => {
  const [open, setOpen] = useState(true);
  const [newTitle, setNewTitle] = useState(title);

  const { updateListTitle } = useContext(ContextAPI);

  const handleBlur = () => {
    updateListTitle(newTitle, listId);
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      {open ? (
        <>
          <div className="list-title">
            <input className="list-title-text" value={newTitle} onChange={e=>setNewTitle(e.target.value)} onBlur={handleBlur} ></input>
            <button className="list-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{ fill: 'var(--text-color)' }}>
                <path d="M12 9c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0-2c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm-9 4c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm18 0c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm-9-6c.343 0 .677.035 1 .101v-3.101c0-.552-.447-1-1-1s-1 .448-1 1v3.101c.323-.066.657-.101 1-.101zm9 4c.343 0 .677.035 1 .101v-7.101c0-.552-.447-1-1-1s-1 .448-1 1v7.101c.323-.066.657-.101 1-.101zm0 10c-.343 0-.677-.035-1-.101v3.101c0 .552.447 1 1 1s1-.448 1-1v-3.101c-.323.066-.657.101-1 .101zm-18-10c.343 0-.677.035-1-.101v-7.101c0-.552-.447-1-1-1s-1 .448-1 1v7.101c.323-.066.657-.101 1-.101zm9 6c-.343 0-.677-.035-1-.101v7.101c0 .552.447 1 1 1s1-.448 1-1v-7.101c-.323.066-.657.101-1 .101zm-9 4c-.343 0-.677-.035-1-.101v3.101c0 .552.447 1 1 1s1-.448 1-1v-3.101c-.323.066-.657.101-1 .101z"/>
              </svg>
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="list-title" onClick={handleClick}>
          <input className="list-title-text" value={newTitle}></input>
            <button className="list-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{ fill: 'var(--text-color)' }}>
                <path d="M12 9c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0-2c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm-9 4c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm18 0c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm-9-6c.343 0 .677.035 1 .101v-3.101c0-.552-.447-1-1-1s-1 .448-1 1v3.101c.323-.066.657-.101 1-.101zm9 4c.343 0 .677.035 1 .101v-7.101c0-.552-.447-1-1-1s-1 .448-1 1v7.101c.323-.066.657-.101 1-.101zm0 10c-.343 0-.677-.035-1-.101v3.101c0 .552.447 1 1 1s1-.448 1-1v-3.101c-.323.066-.657.101-1 .101zm-18-10c.343 0-.677.035-1-.101v-7.101c0-.552-.447-1-1-1s-1 .448-1 1v7.101c.323-.066.657-.101 1-.101zm9 6c-.343 0-.677-.035-1-.101v7.101c0 .552.447 1 1 1s1-.448 1-1v-7.101c-.323.066-.657.101-1 .101zm-9 4c-.343 0-.677-.035-1-.101v3.101c0 .552.447 1 1 1s1-.448 1-1v-3.101c-.323.066-.657.101-1 .101z"/>
              </svg>
            </button>
          </div>
        </>
      )}
    </>
  )
}

ListTitle.propTypes = {
  title: PropTypes.string.isRequired, 
  listId: PropTypes.string.isRequired,
};

export default ListTitle
