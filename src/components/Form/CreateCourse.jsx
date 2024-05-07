import * as courses from "../../service/courses"
import * as studies from "../../service/studies"
import validator from "../../hook/validate"
import { useEffect, useState } from "react"
export  function CreateCourse({ user, isCourse, isStudy }) {
    useEffect(() => {
        validator({
            form: '#create-course',
            formGroup: '.form-group',
            errorMessage: '.form-message',
            styleInvalid: 'border-red-500',
            rules: [
                validator.isRequired('#title', 'Please enter the title'),
                validator.isRequired('#description', 'Please enter the description'),
                // validator.isRequired('#avatar', 'Please choose the avatar'),
            ],
            onSubmit: function (data) {
                if (isCourse) {
                    courses.createCourse(user, data)
                        .then(res => alert('Create course successfully' + res))
                        .catch(err => alert('Create course failed: ' + err))
                }
                else if (isStudy) {
                    studies.createStudy(user, data)
                        .then(res => alert('Create study successfully' + res))
                        .catch(err => alert('Create study failed: ' + err))
                }
            }
        })
    }, [])
    const [image, setImage] = useState('')
    return (
        <form id='create-course'>
        <div style={{display: 'flex'}}>
            <div style={{width: '80%', paddingRight: '20px'}}>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" name="title" required style={{width: '100%', height: '20px'}} />
                    <div className="form-message" style={{color: "red"}}></div>
                </div>
                <br></br>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" id="description" name="description" required style={{width: '100%', minHeight: '40px'}}></input>
                    <div className="form-message" style={{color: "red"}}></div>
                </div>
                <br></br>
                <label htmlFor="avatar">Avatar: </label>
                <div className="form-group">
                    <label htmlFor="avatar"></label>
                    <input type="url" id="avatar"  name="avatar" style={{width: '100%', height: '20px'}} onChange={(e) => setImage(e.target.value)}></input>
                    <div className="form-message" style={{color: "red"}}></div>
                </div>
            </div>
            <div style={{width: '20%'}}>
                <img src={image ||'https://wallpapercave.com/wp/wp2271188.jpg'} alt="avatar" style={{maxWidth: '100%'}}/>
            </div>
        </div>
        <br></br>
        <input type="submit" value="Create" style={{border:'2px solid',borderColor:'black',backgroundColor:'#b5d7fe',borderRadius:'4px',padding:'6px'}} />
    </form>
    )
}
