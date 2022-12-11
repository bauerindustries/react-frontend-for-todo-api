import Button from '../UI/Button';
import classes from './Todo.module.css';

const Todo = (props) => {
  const editTodoHandler = (event) => {
    event.preventDefault();
    const todoId = event.target.dataset.id;
    props.onEditTodo(todoId);
  };

  const deleteTodoHandler = (event) => {
    event.preventDefault();
    const todoId = event.target.dataset.id;
    props.onDeleteTodo(todoId);
  };

  return (
    <li className={classes.todosListItem}>
      <p>{props.todo.text}</p>
      <div>
        <Button type={'button'} id={props.todo._id} onClick={editTodoHandler}>
          Edit
        </Button>
        <Button type={'button'} id={props.todo._id} onClick={deleteTodoHandler}>
          Delete
        </Button>
      </div>
    </li>
  );
};

export default Todo;
