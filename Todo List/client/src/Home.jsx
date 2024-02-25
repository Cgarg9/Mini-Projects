import React, { useEffect } from 'react'
import Create from './Create'
import { useState } from 'react'
import axios from 'axios'
function Home() {
    // all todos stored in an empty array
    const [todos, setTodos] = useState([])
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
                        <div className='task'>
                            <div className='checkbox'>
                                <BsCircleFill className='icon' />
                                <p>{todo.task}</p>
                            </div>
                            <div>
                                <span><BsFillTrashFill clasName='icon' /></span>
                            </div>
                        </div>
                    ))
            }
        </div>
    )
}

export default Home
