import { useEffect, useRef, useState } from "react";
import { FaDotCircle, FaFilter, FaGripVertical } from "react-icons/fa";
import "./App.css";
import CompletedTodoCard from "./Components/CompletedTodoCard";
import Header from "./Components/Header";
import TodoCard from "./Components/TodoCard";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [xpos, setXpos] = useState();
  const [inputshowing, setInputShowing] = useState(true);
  const [iscompletedPage, setIscompletedPage] = useState(false);

  const [completeEmpty, setCompleteEmpty] = useState(true);
  const AddTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const completeRef = useRef();

  const homeRef = useRef();
  useEffect(() => {
    const defpos = homeRef.current.getBoundingClientRect().x;
    setXpos(defpos - 25);
  }, []);

  const completedTasks = () => {
    const xpos = completeRef.current.getBoundingClientRect().x;
    setXpos(xpos - 20);
    setIscompletedPage(true);
    setInputShowing(false);
  };

  const homepage = () => {
    const homepos = homeRef.current.getBoundingClientRect().x;
    setXpos(homepos - 25);
    setIscompletedPage(false);
    setInputShowing(true);
  };

  const undoTodo = (key) => {
    const newList = [...completed];
    const object = newList.splice(key, 1);
    setTodos([...object, ...todos]);
    setCompleted(newList);
  };

  const DeleteTodo = (key) => {
    const newList = [...todos];
    newList.splice(key, 1);
    setTodos(newList);
  };
  const DeleteCompletedTodo = (key) => {
    const newList = [...completed];
    newList.splice(key, 1);
    setCompleted(newList);
  };

  const Complete = (key) => {
    const todolist = [...todos];
    const item = todolist.splice(key, 1);
    const CompleteList = [...item, ...completed];
    setTodos(todolist);
    setCompleted(CompleteList);
    setCompleteEmpty(true);
  };

  const updateTodo = (key, value) => {
    const todolist = [...todos];
    const newtodo = todolist[key];
    newtodo.title = value;
    setTodos(todolist);
  };

  return (
    <div className="App">
      <Header />
      <div  className="menu mobileonly" style={{  background: "white" }}>
        <div
          className="flex menu"
          style={{
            background: "white",
            padding: "5px 25px 3px 25px",
          }}
        >
          <div
            className="tabs"
            style={{ transform: "translateX(" + xpos + "px)" }}
          ></div>
          <button ref={homeRef} onClick={() => homepage()}>
            Todos({todos.length})
          </button>
          <button ref={completeRef} onClick={() => completedTasks()}>
            Completed({completed.length})
          </button>
        </div>
        <div
          style={{
            width: "80%",
            marginLeft: "10%",
            padding: "20px 0px 20px 0px",
            justifyContent: "space-between",
          }}
          className={"flex"}
        >
          <FaFilter color="gray" />
          <FaGripVertical color="gray" />
        </div>
      </div>

      <div className="workspace">
        {iscompletedPage ? (
          <div className="todos">
            <h3
              className="desktoponly"
              style={{ paddingLeft: "20px", padding: "10px" }}
            >
              Completed Todos({completed.length})
            </h3>
            <div className="todoslist">
              {completed.length === 0 ? (
                <div
                  style={{
                    width: "100%",
                    height: "70%",
                    opacity: "0.3",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <h2 style={{ fontSize: "1.3em" }}>No Completed Todos yet</h2>
                </div>
              ) : (
                completed.map((item, id) => {
                  return (
                    <CompletedTodoCard
                      title={item.title}
                      key={id}
                      deletetodo={DeleteCompletedTodo}
                      undoTodo={undoTodo}
                    />
                  );
                })
              )}
            </div>
          </div>
        ) : (
          <div className="todos">
            <h3
              className="desktoponly"
              style={{ paddingLeft: "20px", padding: "10px" }}
            >
              Todos({todos.length})
            </h3>
            <div className="todoslist">
              {todos.length === 0 ? (
                <div
                  style={{
                    width: "100%",
                    height: "70%",
                    opacity: "0.3",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <h2 style={{ fontSize: "1.3em" }}>No todos Added yet</h2>
                </div>
              ) : (
                <TodoList
                  isinputshowing={setInputShowing}
                  todolist={todos}
                  updatetodo={updateTodo}
                  complete={Complete}
                  deleteTodo={DeleteTodo}
                />
              )}
            </div>
          </div>
        )}

        <div className="completedtODOS desktoponly">
          <h1>Completed({completed.length})</h1>
          <div className="compltedlist">
            {completeEmpty ? (
              <h3
                style={{
                  textAlign: "center",
                  width: "100%",
                  height: "50vh",
                  opacity: "0.3",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                ! No completed todo list
              </h3>
            ) : (
              completed.map((item, id) => {
                return (
                  <CompletedTodoCard
                    title={item.title}
                    key={id}
                    deletetodo={DeleteCompletedTodo}
                    undoTodo={undoTodo}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
      {inputshowing ? <TodoInput addtodo={AddTodo} /> : ""}
    </div>
  );
}

export default App;
