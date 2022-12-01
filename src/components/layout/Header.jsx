import classes from './Header.module.css';

function Header(props) {
  return (
    <header>
      <h1>To-do Management</h1>
      <div className={classes.projectDescription}>
        <h2>(Decoupled React front-end for Node.js/MongoDB REST API)</h2>
        <sub>
          For more details, see the Readme files in the{' '}
          <a href='https://github.com/bauerindustries/vue-frontend-for-todo-api'>
            Front-end
          </a>{' '}
          and{' '}
          <a href='https://github.com/bauerindustries/todos-rest-api'>API</a>{' '}
          Github repostories.
        </sub>
      </div>
    </header>
  );
}

export default Header;
