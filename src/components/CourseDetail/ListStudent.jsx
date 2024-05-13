import  {useState,useEffect} from 'react'
import * as courses from '../../service/courses'
export default function ListStudent({ courseId }) {
    const [listStudent, setListStudent] = useState([{}])
    useEffect(() => {
        courses.GetListStudent(courseId)
          .then(res => {
            console.log('res list student', res)
            setListStudent(res)
          })
          .catch(err => {
            console.log('err list student', err)
          })
      },[courseId])
    return (
        <ol>
            {listStudent.map((student, index) => (
                <li key={index}>
                    <div className="flex justify-between">
                        <span>{student.username}</span>
                        <span>{student.email}</span>
                    </div>
                    <hr />
                    <button className="bg-blue-500 text-white" onClick={() => {
                        console.log('student', student)
                        console.log('courseId', courseId)
                        courses.deleteStudent(student._id, courseId)
                            .then(res => {
                                console.log('res delete student', res)
                            })
                            .catch(err => {
                                console.log('err delete student', err)
                            })
                    }}>Delete</button>
                </li>
            ))
            }
        </ol>
    )
}
