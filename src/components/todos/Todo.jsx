import './Todo.module.css';

const Todo = (todo) => {
  const editTodoHandler = (event) => {
    event.preventDefault();
    const todoId = event.target.dataset.id;
    todo.onEditTodo(todoId);
  };

  const deleteTodoHandler = (event) => {
    event.preventDefault();
    const todoId = event.target.dataset.id;
    todo.onDeleteTodo(todoId);
  };

  return (
    <li>
      <p>{todo.props.text}</p>
      <div>
        <button
          type='button'
          data-id={todo.props._id}
          onClick={editTodoHandler}
        >
          Edit
        </button>
        <button
          type='button'
          data-id={todo.props._id}
          onClick={deleteTodoHandler}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
