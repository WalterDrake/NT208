
import {useState,useRef} from 'react'
import Button from '@mui/material/Button'

import validator from '../../hook/validate'
import  * as studies from "../../service/studies"
import * as courses from  "../../service/courses"


export default function AddStudentForm({idAdd,isStudy,isCourse}) {
    const inputEmailRef = useRef()
    const [studentEmail, setStudentEmail] = useState('')
    const [StudentEmails, setStudentEmails] = useState([])
    const handleChange = (e) => {
        setStudentEmail(e.target.value)
    }
    const handleSubmitAdd = () => {
        if(isStudy){
            studies.addStudent(idAdd,StudentEmails)
            .then(res => {
                console.log('res', res)
            })
            .catch(err => {
                console.log('err', err)
            })
        }
        if(isCourse){
            courses.addStudent(idAdd,StudentEmails)
            .then(res => {
                console.log('res', res)
            })
            .catch(err => {
                console.log('err', err)
            })
        }
        setStudentEmails([])  
        setStudentEmail('')
    }

    validator({
        form: '#add-studen-form',
        formGroup: '.form-group',
        errorMessage: '.form-message',
        styleInvalid: 'border-red-500',
        rules: [
            validator.isEmail1('#student-email', 'Email không hợp lệ')
        ],
        onSubmit: function (data) {
            setStudentEmails([...StudentEmails, data.studentEmail])
            setStudentEmail('')
            inputEmailRef.current.focus()
        }
    })
  return (
<div className='bg-stone-400 min-h-24 w-auto'>
    <div className=" flex justify-center">  
            <form  id="add-studen-form"> 
            <div className="form-group">
                <label htmlFor="student-email">email: </label>
                <input ref={inputEmailRef} type="email" value={studentEmail} onChange={handleChange} placeholder="@gm.uit.edu.vn" name="studentEmail" id='student-email' className="border-black border-2 w-auto"/>
                <div className="form-message text-red-700 flex justify-center"></div>
            </div>
            <br></br>
            <input type="submit" value="Thêm sinh viên" className="border-2 border-blue-400 bg-blue-300  rounded-lg hover:bg-blue-500"/>
            </form>
            <div>
                <ul>
                    {StudentEmails.map((email, index) => {
                        return (
                            <li key={index} id={`studentList-${index}`}>
                                <p>{email}</p>
                            </li>
                        )
                    })}
                </ul>
            </div> 
    </div>
    <Button onClick={() => setStudentEmails([])}>Xóa tất cả</Button>
    <Button onClick={handleSubmitAdd}>thêm toàn bộ</Button>
</div>
  )
}
