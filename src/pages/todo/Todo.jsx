import { useState } from "react";
import TodoForm from "../../components/todo/TodoForm";
import TodoList from "../../components/todo/TodoList";
import { addTodoAction, deleteTodoAction } from "../../redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './Todo.css';

function Todo() {
  // const [todos, setTodos] = useState([
  //   {
  //     title: "learn node js",
  //     content: "Lorem ipsum dolor sit amet.",
  //   },
  //   {
  //     title: "go to the sea",
  //     content: "Lorem ipsum dolor sit amet.",
  //   },
  //   {
  //     title: "walk the dog",
  //     content: "Lorem ipsum dolor sit amet.",
  //   },
  // ]);

   const  todos =useSelector(state=>state.todos)   //return data (array)
    console.log(todos);
    const dispatch =useDispatch();
 
   const addTodo = (task) => {
    // setTodos([...todos, task]);
    dispatch( addTodoAction(task));
  };


  const deleteTodo = (index) => {
    // setTodos(todos.filter((todo,i) => i !== index))
      dispatch(deleteTodoAction(index)) 
  }

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todo;