import classes from './TodoLoading.module.css';

function TodoLoading(props) {
  if (props.isLoading) {
    return <p>Loading the To-do list via the API...</p>;
  }

  return <div></div>;
}

export default TodoLoading;
