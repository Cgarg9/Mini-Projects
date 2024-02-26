import { useEffect } from "react";
import "./Home.css";
import Create from "./Create";
import { Todo } from "./components/Todo/Todo";
import { useState } from "react";
import axios from "axios";
function Home() {
  // all todos stored in an empty array
  const [todos, setTodos] = useState([{ task: "example task" },{task:"example task"}, {task:"example task"}]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1>Todo List</h1>
      <Create />
      <Todo todos={todos} />
    </>
  );
}

export default Home;
