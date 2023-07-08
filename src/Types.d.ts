import { type TODOS_FILTERS } from './Consts'

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type ListOfTodos = Todo[]

export type FilterValue = typeof TODOS_FILTERS[keyof typeof TODOS_FILTERS]
