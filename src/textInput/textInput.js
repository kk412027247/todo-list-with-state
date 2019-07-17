import React from 'react';
import './textInput.css';

// 受控组件
export default class TextInput extends React.Component{

  state = {value:''};
  handleInput = (event) => {
    this.setState({value: event.target.value + 1})
  };
  render() {
    return(
      <div
        className={'text-input'}
      >
        <p># 受控组件,可以自定义输入内容 #</p>
        <input
          className={'input'}
          type="text"
          onChange={this.handleInput}
          placeholder={'xxx'}
          value={this.state.value.slice(0,20)}
        />

      </div>
    )
  }
}
