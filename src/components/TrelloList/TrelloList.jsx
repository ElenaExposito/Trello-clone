import AddCardOrList from "../AddCardOrList/AddCardOrList"
import ListTitle from "../ListTitle/ListTitle"
import TrelloCard from "../TrelloCard/TrelloCard"
import './TrelloList.css';

const TrelloList = () => {
  return (
    <div className="card">
      <ListTitle/>
      <div className="trellocard-cards">
        <TrelloCard/>
        <TrelloCard/>
        <TrelloCard/>
      </div>
      <AddCardOrList/>
    </div>
  )
}

export default TrelloList
