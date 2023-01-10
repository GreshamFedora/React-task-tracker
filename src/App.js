import Header from './components/Header'
import Exp from './components/Exp'
import Tasks from './components/Tasks'
import { useState } from "react"


function App() {
  const [tasks, setTasks] = useState([
    {
    id: 1,
    text:'Doctor Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
    },
    {
    id: 2,
    text:'Meeting at School',
    day: 'Feb 6th at 1:30pm',
    reminder: true,
    },
    {
    id: 3,
    text:'Food Shopping',
    day: 'Feb 5th at 2:30pm',
    reminder: false,
    },
])

// Delete Task
const deleteTask = (id) => {
  console.log('delete', id)
}

  return (
    <div className="container">
        
        <Header title = "daBomb is garbage sauce"/>
        <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
