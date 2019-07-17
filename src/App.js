import React from 'react';
import TextInput from './textInput/textInput';
import TodoList from './todoList/todoList';
import './App.css';

class App extends React.Component{
  render() {
    return(
      <div className={'app'}>
        <TextInput/>
        <hr/>
        <TodoList/>
      </div>
    )
  }
}
export default App;
