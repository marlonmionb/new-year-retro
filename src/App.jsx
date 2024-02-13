import Column from "./Components/Column"
import classes from "./App.module.css"
import { useState } from 'react';

const initialColumns = [
  {
    title: 'Celebrar conquistas',
    isAddCardVisible: false,
    id: 'column-0'
  },
  {
    title: 'Um brinde ao...',
    isAddCardVisible: false,
    id: 'column-1'
  },
  {
    title: 'O que aprendemos',
    isAddCardVisible: false,
    id: 'column-2'
  },
  {
    title: 'Promessas de fim de ano',
    isAddCardVisible: false,
    id: 'column-3'
  }
]

function App() {
  const [columns, setColumns] = useState(initialColumns)
  console.log('Columns:', columns)
  return (
    <div className={classes.row}>
      {columns.map(column => {
        return (
          <Column 
            key={column.id} 
            title={column.title} 
            />
        )
      })}
    </div>
  )
}

export default App
