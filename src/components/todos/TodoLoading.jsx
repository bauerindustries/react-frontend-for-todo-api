import './TodoLoading.module.css';

const TodoLoading = (props) => {
  if (props.isLoading) {
    return <p>Loading the To-do list via the API... This may take a moment (freebie hosting!)</p>;
  }

  return <div></div>;
};

export default TodoLoading;
