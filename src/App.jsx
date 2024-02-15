import './App.css'
import TrelloList from './components/TrelloList/TrelloList'
import AddCardOrList from './components/TrelloList/components/AddCardOrList/AddCardOrList'
import mockData from './components/TrelloList/mockdata'
import { useState } from 'react'
import ContextAPI from './ContextAPI'
import uuid from 'react-uuid'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

function App() {
  const [data, setData] = useState(mockData)

  const updateListTitle = (updatedTitle, listId) => {
    const list = data.lists[listId]
    list.title = updatedTitle
    setData({
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    })
  }

  const addCard = (title, listId) => {
    const newCardId = uuid()
    const newCard = {
      id: newCardId,
      title,
    }
    const list = data.lists[listId]
    list.cards = [...list.cards, newCard]
    setData({
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    })
  }

  const addList = (title) => {
    const newListId = uuid()
    setData({
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: {
          id: newListId,
          title,
          cards: [],
        },
      },
    })
  }

  const onDragEnd = () => {}

  return (
    <ContextAPI.Provider value={{ updateListTitle, addCard, addList }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="12345" type="list" direction="horizontal">
          {(provided) => (
            <div
              className="App"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {data.listIds.map((listID, index) => {
                const list = data.lists[listID]
                return <TrelloList list={list} key={listID} index={index} />
              })}
              <AddCardOrList type="list" />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </ContextAPI.Provider>
  )
}

export default App
