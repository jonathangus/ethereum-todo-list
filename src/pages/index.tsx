import React from 'react'
import Head from 'next/head'
import RequireEtherium from '../components/RequireEtherium'
import TodoList from '../components/TodoList'

function App() {
  return (
    <>
      <Head>
        <title>Etherium Todo List</title>
      </Head>
      <RequireEtherium>
        <TodoList />
      </RequireEtherium>
    </>
  )
}

export default App
