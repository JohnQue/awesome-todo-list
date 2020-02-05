import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { ToDoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;

function App() {
  return (
    <ToDoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </ToDoProvider>
  );
}

export default App;
