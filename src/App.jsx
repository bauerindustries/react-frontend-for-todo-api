import { useState, useEffect } from 'react';

import Header from './components/layout/Header';
import Main from './components/layout/Main';
import TodoList from './components/todos/TodoList';
import TodoManagement from './components/todos/TodoManagement';
import TodoLoading from './components/todos/TodoLoading';

window.TODO_API_URI = 'https://todos-rest-api-demo.onrender.com/todos/';

const App = () => {
  const [placeholderText, setplaceholderText] = useState(
    'Add a new to-do item...'
  );
  const [buttonLegend, setbuttonLegend] = useState('Save');
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTodos, setLoadedTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [editTodoId, setEditTodoId] = useState(null);

  useEffect(
    () => {
      setIsLoading(true);
      fetch(window.TODO_API_URI)
        .then((response) => {
          return response.json();
        })
        // .json() return a promise too, so...
        .then((data) => {
          const todos = [];
          for (const key in data.todos) {
            const todo = {
              id: key,
              ...data.todos[key],
            };

            todos.push(todo);
          }

          setIsLoading(false);
          setLoadedTodos(todos);
        });
    },
    // empty dependencies array means that useEffect will only run once
    []
  );

  const saveTodoHandler = (newTodo) => {
    if (editTodoId) {
      // Update existing to-do
      try {
        fetch(window.TODO_API_URI + editTodoId, {
          method: 'PATCH',
          body: JSON.stringify({
            text: newTodo.text,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } catch {
        alert('Something went wrong!');
      }
      const editTodoIndex = loadedTodos.filter(
        (todo) => todo._id === editTodoId
      )[0].id;
      loadedTodos[editTodoIndex].text = newTodo.text;
      setplaceholderText('Add a new to-do item...');
      setbuttonLegend('Save');
    } else {
      // New To-do
      try {
        fetch(window.TODO_API_URI, {
          method: 'POST',
          body: JSON.stringify({
            text: newTodo.text,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } catch {
        alert('Something went wrong!');
      }

      setLoadedTodos((prevTodos) => {
        return [...prevTodos, newTodo];
      });
    }
    setEditTodoId(null);
  };

  const updateTodoInputHandler = (inputText) => {
    setInputText(inputText);
  };

  const editTodoHandler = (editTodoId) => {
    const editTodoText = loadedTodos.filter(
      (todo) => todo._id === editTodoId
    )[0].text;
    setInputText(editTodoText);
    setEditTodoId(editTodoId);
    setplaceholderText('Enter your updated text...');
    setbuttonLegend('Update');
  };

  const deleteTodoHandler = (deleteTodoId) => {
    try {
      fetch(window.TODO_API_URI + deleteTodoId, {
        method: 'DELETE',
      }).then((response) => {
        setLoadedTodos((prevTodos) => {
          return prevTodos.filter((todo) => todo._id !== deleteTodoId);
        });
      });
    } catch {
      alert('Something went wrong!');
    }
  };

  return (
    <div>
      <Header />
      <Main>
        <TodoManagement
          inputText={inputText}
          placeholder={placeholderText}
          buttonLegend={buttonLegend}
          onAddNewTodo={saveTodoHandler}
          onUpdateTodoInput={updateTodoInputHandler}
        />
        <TodoLoading isLoading={isLoading} />
        <TodoList
          onEditTodo={editTodoHandler}
          onDeleteTodo={deleteTodoHandler}
          loadedTodos={loadedTodos}
        />
      </Main>
    </div>
  );
};

export default App;
