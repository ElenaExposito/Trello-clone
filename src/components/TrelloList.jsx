import AddCardOrList from "./AddCardOrList"
import ListTitle from "./ListTitle"
import TrelloCard from "./TrelloCard"
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
