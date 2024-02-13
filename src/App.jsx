import './App.css'
import TrelloList from './components/TrelloList/TrelloList';
import AddCardOrList from './components/TrelloList/components/AddCardOrList/AddCardOrList';
import mockData from "./components/TrelloList/mockdata";
import { useState } from 'react';

function App() {
  const [data, setData] = useState(mockData);

  return (
    <div className='App'>
      {
        data.listIds.map(listID => {
          const list = data.list[listID]
        return <TrelloList list={list} key={listID}/>
        })
      }
      <AddCardOrList type="list"/>
    </div>
  )
}

export default App;