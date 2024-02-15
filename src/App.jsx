import Column from "./Components/Column"
import classes from "./App.module.css"
import { useState } from 'react';
import './index.css'

const initialColumns = [
  {
    title: 'Celebrar conquistas',
    isAddCardButtonVisible: true,
    id: 'column-0'
  },
  {
    title: 'Um brinde ao...',
    isAddCardButtonVisible: true,
    id: 'column-1'
  },
  {
    title: 'O que aprendemos',
    isAddCardButtonVisible: true,
    id: 'column-2'
  },
  {
    title: 'Promessas de fim de ano',
    isAddCardButtonVisible: true,
    id: 'column-3'
  }
]

function App() {
  const [columns, setColumns] = useState(initialColumns)
  console.log('Columns:', columns)

  function receiveDataFromColumn(selectedColumnId) {
    setColumns(columns.map(column => {
      let isAddCardButtonVisible;
      if (column.id === selectedColumnId) {
        isAddCardButtonVisible = false
        return {...column, isAddCardButtonVisible}
      }
      isAddCardButtonVisible = true
      return {...column, isAddCardButtonVisible}
    }))
  }

  return (
    <>
    <h1 className="text-3xl font-bold">New Year Retro</h1>
      <div className={classes.container}>
        {columns.map(column => {
          return (
            <Column 
              key={column.id} 
              id={column.id}
              title={column.title}
              sendDataToApp={receiveDataFromColumn}
              isAddCardButtonVisible={column.isAddCardButtonVisible}
              />
          )
        })}
      </div>

    </>
  )
}

export default App
