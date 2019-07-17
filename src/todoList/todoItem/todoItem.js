import React from "react";
import './todoItem.css'

export default class TodoItem extends React.Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // console.log(
    //   this.props.handleRemove !== nextProps.handleRemove,
    //   this.props.handleToggle !== nextProps.handleToggle,
    //   this.props.item !== nextProps.item,
    //   this.props.item.content,
    // );
    const {finish} = this.props.item;
    return finish !== nextProps.item.finish
  }

  componentWillUnmount() {
    const {item} = this.props;
    console.log('componentWillUnmount', item.content)
  }

  componentDidMount() {
    const {item} = this.props;
    console.log('componentDidMount', item.content)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {item} = this.props;
    console.log('componentDidUpdate', item.content)
  }

  render() {
    const {item, handleRemove, handleToggle} = this.props;
    return (
      <div className={'todo-item'}>
        <input
          type="radio"
          className={'todo-item-input'}
          checked={item.finish}
          readOnly={true}
        />
        <p
          onClick={handleToggle.bind(null, item.id)}
          className={item.finish ? 'finish' : ''}
        >
          {item.content}
        </p>
        <span onClick={handleRemove.bind(null, item.id)}>X</span>
      </div>
    )
  }
}
