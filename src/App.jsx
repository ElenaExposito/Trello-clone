import './App.css'
import TrelloList from './components/TrelloList/TrelloList';
import AddCardOrList from './components/TrelloList/components/AddCardOrList/AddCardOrList';
import mockData from "./components/TrelloList/mockdata";
import { useState } from 'react';
import ContextAPI from './ContextAPI';

function App() {
  const [data, setData] = useState(mockData);

  const updateListTitle = (title, listId) => {
    setData(prevData => ({
      ...prevData,
      list: {
        ...prevData.list,
        [listId]: {
          ...prevData.list[listId],
          title: title,
        },
      },
    }));
  };

  return (
    <ContextAPI.Provider value={{ updateListTitle }}>
      <div className='App'>
        {data.listIds.map(listID => {
          const list = data.list[listID]
          return <TrelloList list={list} key={listID}/>
        })}
      <AddCardOrList type="list"/>
      </div>
    </ContextAPI.Provider>
  )
}

export default App;