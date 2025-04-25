import React, {useState} from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState(""); // Estado para el valor del input
	const [tasks, setTasks] = useState([]); // Estado para la lista de tareas
  
	// Maneja la tecla "Enter" para agregar una nueva tarea
	const handleKeyUp = (e) => {
	  if (e.key === "Enter" && inputValue.trim() !== "") {
		setTasks([...tasks, inputValue.trim()]);
		setInputValue(""); // Limpia el input después de agregar la tarea
	  }
	};
  
	// Elimina una tarea según su índice
	const removeTask = (indexToRemove) => {
	  const updatedTasks = tasks.filter((_, index) => index !== indexToRemove);
	  setTasks(updatedTasks);
	};
  
	return (
	  <>
		<div className="container">
		  <span className="title">Tasks to do</span>
		  <ul>
			<li>
			  <input
				type="text"
				onChange={(e) => setInputValue(e.target.value)}
				value={inputValue}
				onKeyUp={handleKeyUp}
				placeholder="Add a new task"
			  />
			</li>
			{tasks.map((task, index) => (
			  <li key={index} className="task-item">
				{task}{" "}
				<button 
				  onClick={() => removeTask(index)}
				  className="remove-task-btn"
				>
				  x
				</button>
			  </li>
			))}
		  </ul>
		  <div>
			{tasks.length} {tasks.length === 1 ? "task" : "tasks"} left
		  </div>
		</div>
	  </>
	);
  };
  
  export default Home;