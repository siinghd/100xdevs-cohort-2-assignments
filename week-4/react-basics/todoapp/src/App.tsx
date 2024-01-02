import { useState } from 'react';

interface ITodo {
  id: string;
  title: string;
  description: string;
}

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [todo, setTodo] = useState({
    title: '',
    description: '',
  });
  const addTodoDomWay = () => {
    const title = document.getElementById('title') as HTMLInputElement;
    const description = document.getElementById(
      'description'
    ) as HTMLInputElement;

    const todoDiv = document.querySelector('.todoList') as HTMLDivElement;
    const todoElement = document.createElement('ul');
    const titleElement = document.createElement('li');
    const descriptionElement = document.createElement('li');
    titleElement.innerText = `title :${title.value}`;
    descriptionElement.innerText = `description : ${description.value}`;
    todoElement.appendChild(titleElement);
    todoElement.appendChild(descriptionElement);
    todoDiv.appendChild(todoElement);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };
  const addTodoStateWay = () => {
    setTodos((prev) => [...prev, { ...todo, id: Math.random().toString() }]);
  };

  return (
    <>
      <div>
        <h1>Todo App DOM WAY</h1>
        <input type="text" name="title" id="title" placeholder="title" />
        <input
          type="text"
          name="description"
          id="description"
          placeholder="description"
        />
        <button onClick={addTodoDomWay}>Add DOM WAY</button>
        <div className="todoList"></div>
      </div>
      <div>
        <h1>Todo App state way</h1>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="title"
          value={todo.title}
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="description"
          id="description"
          placeholder="description"
          value={todo.description}
          onChange={handleOnChange}
        />

        <button onClick={addTodoStateWay}>Add STATE WAY</button>
        <hr />
        {todos.map((todo) => (
          <div key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
