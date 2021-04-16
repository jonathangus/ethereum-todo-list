import * as React from 'react'
import { createContext, useContext, useMemo, useEffect, useState } from 'react'
import { TodoItem } from '../types'
import TodoService from '../utils/TodoService'

export type TodoContextType = {
  items: TodoItem[]
  addTodo: (name: string) => void
  toggleTodo: (id: number, completed: boolean) => void
}

const TodoContext = createContext<TodoContextType>({
  items: [],
  addTodo: () => {},
  toggleTodo: () => {},
})

export const TodoContextProvider: React.FC = ({ children }) => {
  const service = useMemo(() => new TodoService(), [])
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState<boolean>(false)

  const fetchTodos = async () => {
    try {
      const data = await service.getAll()
      setItems(data)
    } catch (e) {}
  }

  const value = {
    items,
    addTodo: async (name: string) => {
      setLoading(true)
      await service.addTodo(name)
      setLoading(false)
    },
    toggleTodo: async (id: number, completed: boolean) => {
      setLoading(true)
      await service.toggleTodo(id, completed)
      setLoading(false)
    },
  }

  useEffect(() => {
    fetchTodos()
  }, [loading])

  if (loading) {
    return <div>...loading</div>
  }

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

export const useTodoContext = (): TodoContextType => useContext(TodoContext)
