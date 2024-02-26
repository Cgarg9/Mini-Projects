import { useEffect } from 'react'
import Create from './Create'
import { useState } from 'react'
import axios from 'axios'
function Home() {
    // all todos stored in an empty array
    const [todos, setTodos] = useState([{task : "alguna tarea"}])
    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h2>Todo List</h2>
            <Create />
            {/* display all todos */}
            {
                todos.length === 0 ?
                    <div><h2>Empty</h2></div>
                    : todos.map((todo) => (
                        <div className='task' /* key={todo._id} Please in the response of the request that is saved in the state todo add an id to be used here as todo.id */> 
                            <div className='checkbox'>
                               
                                <p>{todo.task}</p>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    ))
            }
        </div>
    )
}

export default Home
