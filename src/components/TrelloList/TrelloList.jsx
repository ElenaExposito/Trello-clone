import AddCardOrList from "./components/AddCardOrList/AddCardOrList"
import ListTitle from "./components/ListTitle/ListTitle"
import TrelloCard from "./components/TrelloCard/TrelloCard"
import './TrelloList.css';

const TrelloList = ({list}) => {
  return (
    <div className="card">
      <ListTitle/>
      <div className="cards">
        <div className="trellocard-cards">
          {
            list.cards.map(card => (
              <TrelloCard card={card} key ={card.id}/>
            ))
          }
        </div>
        <AddCardOrList type="card"/>
      </div>
    </div>
  )
}

export default TrelloList
