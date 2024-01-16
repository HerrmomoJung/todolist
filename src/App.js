import {useEffect, useState} from "react";
import CreatTask from "./Components/CreatTask";
import ListTAsk from "./Components/ListTAsk";

function App() {

  const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem("tasks")));
    }, []);

  console.log("tasks", tasks)

  return (
    <div className="bg-slate-300 w-screen h-screen flex flex-col items-center pt-3 gap-16">
      <CreatTask tasks={tasks} setTasks={setTasks}/>
      <ListTAsk tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
