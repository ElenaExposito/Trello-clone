import PropTypes from 'prop-types'
import AddCardOrList from './components/AddCardOrList/AddCardOrList'
import ListTitle from './components/ListTitle/ListTitle'
import TrelloCard from './components/TrelloCard/TrelloCard'
import './TrelloList.css'
import { Draggable, Droppable } from 'react-beautiful-dnd'

const TrelloList = ({ list, index: listIndex }) => {
  return (
    <Draggable draggableId={list.id} index={listIndex}>
      {(provided) => (
        <div
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <ListTitle title={list.title} listId={list.id} />
          <Droppable droppableId={list.id} type="card">
            {(dropProvided) => (
              <div
                className="cards"
                ref={dropProvided.innerRef}
                {...dropProvided.droppableProps}
              >
                <div className="trellocard-cards">
                  {list.cards.map((card, index) => (
                    <TrelloCard card={card} key={card.id} index={index} />
                  ))}
                </div>
                <AddCardOrList type="card" listId={list.id} />
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  )
}

TrelloList.propTypes = {
  list: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
}

export default TrelloList
