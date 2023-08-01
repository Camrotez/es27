import TodoList from "./assets/TodoList";
function App() {
  const renderTodoList = (todo, removeItem) => {
    return (
      <ul>
        {todo.map((name, index) => (<li key={name + index}>{name}
        <button onClick={() => removeItem(name + index)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>

      <TodoList render={renderTodoList} />
    </div>
  );
}

export default App;
