import * as React from 'react'
import TodoInput from './TodoInput'
import { TodoContextProvider } from '../context/TodoContext'
import TodoItems from './TodoItems'

const TodoList: React.FC = () => (
  <TodoContextProvider>
    <TodoInput />
    <TodoItems />
  </TodoContextProvider>
)

export default TodoList
