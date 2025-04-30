import React, {useState} from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState(""); 
	const [tasksList, setTasksList] = useState([]); 
  
	
	const handleKeyUp = (e) => {
	  if (e.key === "Enter" && inputValue.trim() !== "") {
		setTasksList([...tasksList, inputValue.trim()]);
		setInputValue(""); 
	  }
	};
  
	const removeTask = (indexToRemove) => {
	  const updatedTasks = tasksList.filter((_, index) => index !== indexToRemove);
	  setTasksList(updatedTasks);
	};
  
	return (
	  <>
		<div className="container">
		  <span className="title">Tasks to do</span>
		  <ul className="mt-2">
			<li>
			  <input
				type="text"
				onChange={(e) => setInputValue(e.target.value)} 
				value={inputValue}
				onKeyUp={handleKeyUp}
				placeholder="Add a new task"
			  />
			</li>
			{tasksList.map((task, index) => (
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
		  <div className="text-end alert alert-primary">
			{tasksList.length} {tasksList.length === 1 ? "task" : "tasksList"} left
		  </div>
		</div>
	  </>
	);
  };
  
  export default Home;