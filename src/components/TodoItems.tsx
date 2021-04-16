import * as React from 'react'
import { useTodoContext } from '../context/TodoContext'

const TodoItems: React.FC = () => {
  const { items = [], toggleTodo } = useTodoContext()

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <input
            type='checkbox'
            id={item.name}
            name={item.name}
            checked={item.completed}
            onChange={(e) => toggleTodo(item.id, e.target.checked)}
          />
          <label htmlFor={item.name}>{item.name}</label>
        </div>
      ))}
    </div>
  )
}

export default TodoItems
