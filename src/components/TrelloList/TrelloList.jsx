import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import AddCardOrList from './components/AddCardOrList/AddCardOrList'
import ListTitle from './components/ListTitle/ListTitle'
import TrelloCard from './components/TrelloCard/TrelloCard'
import './TrelloList.css'
import { Draggable, Droppable } from 'react-beautiful-dnd'

const TrelloList = ({ list, index: listIndex }) => {
  const trellocardCardsRef = useRef(null)

  useEffect(() => {
    const checkScroll = () => {
      const hasScroll =
        trellocardCardsRef.current.scrollHeight >
        trellocardCardsRef.current.clientHeight
      if (hasScroll) {
        trellocardCardsRef.current.classList.add('has-scroll')
      } else {
        trellocardCardsRef.current.classList.remove('has-scroll')
      }
    }

    // Verifica el desplazamiento al cargar la página o al renderizar el componente
    checkScroll()

    // Agrega un listener para manejar el cambio en el desplazamiento
    trellocardCardsRef.current.addEventListener('scroll', checkScroll)

    // Limpia el listener al desmontar el componente
    return () => {
      trellocardCardsRef.current.removeEventListener('scroll', checkScroll)
    }
  }, [])

  return (
    <div className="card-wrapper">
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
                  <div className="trellocard-cards" ref={trellocardCardsRef}>
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
    </div>
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
