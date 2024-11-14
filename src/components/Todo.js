import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { todos as getTodo, todoHandle } from "../store/reducer/todo";

const Todo = () => {
  const todos = useSelector((state) => state.todo.data);
  const loading = useSelector((state) => state.todo.isLoading);
  const isError = useSelector((state) => state.todo.isError);
  const showTodos = useSelector((state) => state.todo.showTodos);

  const dispatch = useDispatch();
  const getTodoHandler = () => {
    dispatch(getTodo());
  };

  const handleTodos = () => {
    dispatch(todoHandle.toggleShowTodos());
  };
  return (
    <>
      <button
        style={{ margin: "auto", display: "block", marginTop: "30px" }}
        onClick={getTodoHandler}
      >
        Get Todos
      </button>

      {todos.length > 0 && (
        <button
          style={{ margin: "auto", display: "block", marginTop: "30px" }}
          onClick={handleTodos}
        >
          {showTodos ? "Hide Todos" : "Show Todos"}
        </button>
      )}

      {loading && <h1 style={{ textAlign: "center" }}>Getting Todos</h1>}
      {!loading && todos.length < 1 && !isError && (
        <p style={{ textAlign: "center" }}>
          Click get todos button to get your todos.
        </p>
      )}
      {!loading && !isError && todos.length !== 0 && showTodos && (
        <section>
          {todos.map((todo) => (
            <p key={todo.id}>{todo.title}</p>
          ))}
        </section>
      )}
      {isError && (
        <h1 style={{ textAlign: "center" }}>Can't get data at the moment</h1>
      )}
    </>
  );
};
export default Todo;
