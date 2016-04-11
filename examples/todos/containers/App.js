import React from 'react'
import FooterContainer from './FooterContainer'
import AddTodoContainer from './AddTodoContainer'
import VisibleTodoList from './VisibleTodoList'

const App = () => (
  <div>
    <AddTodoContainer />
    <VisibleTodoList />
    <FooterContainer />
  </div>
)

export default App
