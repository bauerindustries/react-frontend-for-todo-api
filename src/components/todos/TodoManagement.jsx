import { useState } from 'react';
import classes from './TodoManagement.module.css';

function TodoManagement(props) {
  const inputChangeHandler = (event) => {
    props.onUpdateTodoInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      text: props.inputText,
      id: Math.random().toString() * 100,
    };
    props.onAddNewTodo(newTodo);
    props.onUpdateTodoInput('');
  };

  return (
    <section className={classes.todoManagement}>
      <form onSubmit={submitHandler}>
        <label>To-do text:</label>
        <input
          type='text'
          id='text'
          required
          placeholder={props.placeholder}
          value={props.inputText}
          onChange={inputChangeHandler}
        />
        <button type='submit'>{props.buttonLegend}</button>
      </form>
    </section>
  );
}

export default TodoManagement;
