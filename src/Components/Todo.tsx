// interface Props {
//   id: string
//   title: string
//   completed: boolean
// }

import { type Todo as TodoType } from '../Types'

// type Props = TodoType --> esro si solo fuera un solo tipo en la siguiente linea de codigo se pasa a interfase para que
// pueda extender y tener todo el tipo de todoTtpes mas las props de onRemoveTodo
interface Props extends TodoType {
  onRemoveTodo: (id: string) => void
  onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleteTodo }) => {
  const handleChngeChecbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompleteTodo({
      id,
      completed: event.target.checked
    })
  }

  return (
    <div className="view">
      <input className="toggle"
        type="checkbox"
        checked={completed}
        onChange={handleChngeChecbox}
      />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={() => {
          onRemoveTodo(id)
        }} />
    </div>
  )
}
