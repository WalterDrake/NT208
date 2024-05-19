import React from 'react'
import CreateStudent from '../../../../components/Form/CreateStudent'
import { useEffect, useState } from 'react'
import * as admin from '../../../../service/admin'
import useTime from '../../../../hook/useTime'
export default function ShowStudents() {
  const [students, setStudents] = useState([])
  useEffect(() => {
    // fetch all students
    admin.getAllStudents()
      .then( response => {
        setStudents(response)
      })
      .catch ( error => {
        console.log(error)
      } )
  }, [])
  return (
    <div>
        <div>
            <h2>ALL Student</h2>
            <ul>
                {students.map((student,index) => {
                  const time = useTime(student.createdAt)
                  return (
                    <li key={index} className='border-2 border-black md:m-4 m-2 '>
                      <p>email:{student.email}</p>
                      <p>username:{student.username}</p>
                      <time>đã tạo cách đây:{time}</time>
                      <button className='bg-red-500 text-white' onClick={() => {}}>Delete</button>
                    </li>
                  )
                })}
            </ul>
        </div>
        <div>
            <h2>Create Students</h2>
            <CreateStudent></CreateStudent>
        </div>

    </div>
  )
}
