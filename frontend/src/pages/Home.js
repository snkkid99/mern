import { useEffect } from "react";
import { useTodosContext } from "../hooks/useTodosContext";

// components
import TodoDetails from "../components/TodoDetails";
import TodoForm from "../components/TodoForm";
import { Layout, Row, Col } from "antd";

const Home = () => {
  const { todos, dispatch } = useTodosContext();
  const { Sider, Content } = Layout;

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("/api/todos");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_TODOS", payload: json });
      }
    };

    fetchTodos();
  }, [dispatch]);

  return (
    <div>
      <Row>
        {todos &&
          todos.map((todo) => <TodoDetails todo={todo} key={todo._id} />)}
      </Row>
    </div>
  );
};

export default Home;
