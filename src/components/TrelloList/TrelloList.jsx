import PropTypes from 'prop-types';
import AddCardOrList from "./components/AddCardOrList/AddCardOrList"
import ListTitle from "./components/ListTitle/ListTitle"
import TrelloCard from "./components/TrelloCard/TrelloCard"
import './TrelloList.css';

const TrelloList = ({list}) => {
  return (
    <div className="card">
      <ListTitle title={list.title} listId={list.id} />
      <div className="cards">
        <div className="trellocard-cards">
          {
            list.cards.map(card => (
              <TrelloCard card={card} key ={card.id}/>
            ))
          }
        </div>
        <AddCardOrList type="card" listId={list.id}/>
      </div>
    </div>
  )
}

TrelloList.propTypes = {
  list: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default TrelloList
