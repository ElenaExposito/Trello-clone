import './TrelloCard.css'
import { string, shape, PropTypes } from 'prop-types'
import { Draggable } from 'react-beautiful-dnd'

const TrelloCard = ({ card, index }) => {
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <li
          className="card-title"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h2 className="card-title-text">{card.title}</h2>
          <button className="edit-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ fill: 'var(--text-color)' }}
            >
              <path d="M4.481 15.659C3.147 19.575 3 19.891 3 20.246c0 .528.46.749.749.749.352 0 .668-.137 4.574-1.492zM5.541 14.598l3.846 3.846 11.321-11.311c.195-.195.293-.45.293-.707 0-.255-.098-.51-.293-.706-.692-.691-1.742-1.74-2.435-2.432-.195-.195-.451-.293-.707-.293-.254 0-.51.098-.706.293z" />
            </svg>
          </button>
        </li>
      )}
    </Draggable>
  )
}

TrelloCard.propTypes = {
  card: shape({
    title: string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
}

export default TrelloCard
