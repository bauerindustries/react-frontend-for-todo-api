import Todo from './Todo';

import classes from './TodoList.module.css';

function TodoList(props) {
  const onEditTodoHandler = (todoId) => {
    props.onEditTodo(todoId);
  };

  const onDeleteTodoHandler = (todoId) => {
    props.onDeleteTodo(todoId);
  };

  if (!props.loadedTodos && !props.isLoading) {
    return <p>No to-dos added yet, please add some!</p>;
  }

  return (
    <section className={classes.todos}>
      <ul className={classes.todosList}>
        {props.loadedTodos.map((todo) => (
          <Todo
            onEditTodo={onEditTodoHandler}
            onDeleteTodo={onDeleteTodoHandler}
            key={todo.id}
            props={todo}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
