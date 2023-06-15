import React from 'react'
import { Link } from 'react-router-dom'

function Task() {
  return (
    <div className='px-5 py-3'>
            <div className='d-flex justify-content-center'>
                <h3>Task List</h3>
            </div>
            <Link to='/todo' className='btn btn-success'>Add Task</Link>
        </div>
  )
}

export default Task