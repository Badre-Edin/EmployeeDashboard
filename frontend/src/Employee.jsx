import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


function Employee() {
    const [data, setData] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:8081/getEmployees')
      .then(res => {
        if(res.data.Status === "Success") {
            setData(res.data.Result);
        }
      })
      .catch(err => console.log(err));
   }, [])
    return (
        <div className='px-5 py-3'>
            <div className='d-flex justify-content-center mt-2'>
                <h3>Employee List</h3>
            </div>
            <Link to='/create' className='btn btn-success'>Add Employee</Link>
            <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Email</th>
                        <th>Function</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                  {data.map((employee, index) => {
                    return <tr key={index}>
                                <td>{employee.name}</td>
                                <td>{}</td>
                                <td>{employee.email}</td>
                                <td>{employee.function}</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                  })}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Employee