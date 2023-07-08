// eslint-disable-next-line import/no-absolute-path
import { useState } from 'react'
import { Todos } from './Components/Todos'
import { type FilterValue, type Todo as TodoTypes } from './Types'
import { TODOS_FILTERS } from './Consts'
import { Footer } from './Components/Footer'

const MockTodo = [
  {
    id: '1',
    title: 'comenzar proyecto react + typeScript + vite',
    completed: true
  },
  {
    id: '2',
    title: 'repasar mucho TypeScript',
    completed: false
  },
  {
    id: '3',
    title: 'subir repo',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(MockTodo)
  const [FilterSelected, setFilterSelected] = useState<FilterValue>(TODOS_FILTERS.ALL)

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleComplete = ({ id, completed }: Pick<TodoTypes, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todos => {
      if (todos.id === id) {
        return {
          ...todos,
          completed
        }
      }
      return todos
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }
  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter((todo) => {
    if (FilterSelected === TODOS_FILTERS.ACTIVE) return !todo.completed
    if (FilterSelected === TODOS_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <div className='todoapp'>
      <Todos
        todos={filteredTodos}
        onToggleCompleteTodo={handleComplete}
        onRemoveTodo={handleRemove}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={FilterSelected}
        onClearComplete={() => { }}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
