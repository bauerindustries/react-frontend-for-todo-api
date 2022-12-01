import Todo from '../todos/Todo';
import TodoList from '../todos/TodoList';
import classes from './Main.module.css';
import Todos from '../todos/Todo';

function Main(props) {
  return <main id='todos-app'>{props.children}</main>;
}

export default Main;
