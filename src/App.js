import { useState, useEffect } from "react"
//could have just embedded About, but this used instead
import {BrowseRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

useEffect(() => {
  const getTasks = async () => {
    const tasksFromServer = await fetchTasks()
    setTasks(tasksFromServer)

  }

  getTasks()
},[])

// Fetch Tasks from back end -- this was return 2x
const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()

  return data
}

// this one updates reminder toggle --> back end
const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()

  return data
}

// Add Task

const addTask = async  (task) => {
const res = await fetch('http://localhost:5000/tasks', {
method: 'POST',
headers: {
  'Content-type': 'application/json'
  },
  body: JSON.stringify(task)
})

//new task added = data returned and this is a promise so we have to await
const data = await res.json()
//adding new task to current tasks
setTasks([...tasks, data])
  /*
//上面的代碼替代下面的
  // db will create own so w/ back end it's commented out
  const id = Math.floor(Math.random() * 10000) + 1
const newTask = { id,...task }
setTasks([...tasks, newTask])
*/


}

// Delete Task
const deleteTask = async (id) => {
  // don't need to save in a variable as we're not getting data back
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE'
  })

  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = async (id) => {
  const taskToToggle = await fetchTask(id)
  const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
  
  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updTask)
  })

  const data = await res.json()
  
  setTasks(
    tasks.map((task) => 
    task.id === id ? {...task, reminder: data.reminder} : task))
}

  return (
    <Router>
      <div className="container">
          <Header title = "Task Tracker" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
          <Route path='/' exact render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask}/>}
              {tasks.length > 0 ? (
              <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
              ) : (
                'No tasks to display'
              )}
            </>
          )} />
          <Route path='/about' component={About} />
          <Footer />
      </div>
    </Router>
  );
}

export default App;
