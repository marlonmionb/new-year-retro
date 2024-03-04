import Column from "./Components/Column"
import "./App.scss"
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

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
    <div className='d-flex flex-column align-items-center'>
      <div className='my-4'>
        <h1 className="d-flex justify-content-center">New Year Retro</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center app__container">
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

    </div>
  )
}

export default App
