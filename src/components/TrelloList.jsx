import AddCardOrList from "./AddCardOrList"
import ListTitle from "./ListTitle"
import TrelloCard from "./TrelloCard"
import './TrelloList.css';

const TrelloList = () => {
  return (
    <div className="card">
      <ListTitle/>
      <TrelloCard/>
      <AddCardOrList/>
    </div>
  )
}

export default TrelloList
