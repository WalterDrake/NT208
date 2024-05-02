import { useRef, useState } from "react";
import validator from "../../hook/validate";

export const CreateGroup = () => {
  validator({
    form: '#add-group-form',
    formGroup: '.form-group',
    errorMessage: '.form-message',
    styleInvalid: 'border-red-500' ,
    rules: [
      validator.isRequired('#add-group-name', 'nhập tên nhóm'),
      validator.isEmail1('#add-group-member', 'Email không hợp lệ'),
      validator.isRequired('#add-group-desrciption', 'Vui lòng nhập mô tả'),
  ],
    onSubmit: function (data) {
      console.log(data);
      console.log('member: ',memberList)
    }
  }
  )
  const memberInputRef = useRef()
  const [memberInput,setMemeberInput] = useState('')
  const [memberList,setMemeberList] = useState([])
  const addMemeber = (e) => {
    e.preventDefault()
    setMemeberList([...memberList,memberInput])
    setMemeberInput('')
    memberInputRef.current.focus()
  }

  return (
    <form id='add-group-form' className="m-0 bg-stone-400 min-h-24 max-w-[20rem]">
      <div className="form-group">
        <label htmlFor="group-name">Tên nhóm: </label>
        <input type="text" placeholder="Tên nhóm" name="group-name" id='add-group-name' className="border-black border-2"/>
        <div className="form-message text-red-700 flex justify-center"></div>
      </div>
      <br></br>
      <div className="form-group">
        <label htmlFor="group-description">Mô tả: </label>
        <input type="text" placeholder="Mô tả" id='add-group-desrciption' name="group-description" className="border-black border-2"/>
        <div className="form-message text-red-700 flex justify-center"></div>
       </div>
      <br></br>
      <input type="file" accept="image/*" placeholder="Ảnh" />
      <div className="form-group">
        <label htmlFor="add-member">Thêm thành viên: </label>
        <input name="add-member" id='add-group-member' ref={memberInputRef} value={memberInput} onChange={ (e) =>setMemeberInput(e.target.value)} type='text' placeholder="mssv" className="border-black border-2" />
        <div className="form-message text-red-700 flex justify-center"></div>
        <button onClick={addMemeber}>Thêm</button>
        <ul>
          {memberList.map((member,index) => <li key={index}>{member}</li>)}
        </ul>
      </div>
      <br></br>
      <div className="flex justify-center items-center ">
        <input type="submit" value="Tạo nhóm" className="border-2 border-blue-400 bg-blue-300  rounded-lg hover:bg-blue-500"/>
      </div>
    </form>
  )
}

export const JoinGroup = () => {
  return (
    <form>
      <input type="text" placeholder="Mã nhóm" className="border-black border-2" />
      <input type="submit" value="Tham gia nhóm" />
    </form>
  );
}