import * as React from 'react'
import { useState } from 'react'
import { useTodoContext } from '../context/TodoContext'

type Props = {}

const TodoInput: React.FC<Props> = () => {
  const [value, setValue] = useState<string>('')
  const { addTodo } = useTodoContext()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (value.length) {
      addTodo(value)
      setValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='Write a todo'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit'>Add</button>
    </form>
  )
}

export default TodoInput
