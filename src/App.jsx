import './App.css'
import TrelloList from './components/TrelloList/TrelloList';
import AddCardOrList from './components/TrelloList/components/AddCardOrList/AddCardOrList';

function App() {
  return (
    <div className='App'>
      <TrelloList/>
      <TrelloList/>
      <TrelloList/>
      <AddCardOrList type="list"/>
    </div>
  )
}

export default App;