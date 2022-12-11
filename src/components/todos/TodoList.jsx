import Todo from './Todo';

import classes from './TodoList.module.css';

const TodoList = (props) => {
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
            todo={todo}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
