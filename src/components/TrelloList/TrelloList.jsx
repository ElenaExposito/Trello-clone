import AddCardOrList from "./components/AddCardOrList/AddCardOrList"
import ListTitle from "./components/ListTitle/ListTitle"
import TrelloCard from "./components/TrelloCard/TrelloCard"
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
