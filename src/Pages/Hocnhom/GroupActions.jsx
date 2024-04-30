
export const CreateGroup = () => {
  return (
    <form id='add-group-form' className="m-0 bg-stone-400 min-h-24 max-w-[20rem]">
      <div className="form-group">
        <label htmlFor="group-name">Tên nhóm: </label>
        <input type="text" placeholder="Tên nhóm" name="group-name" className="border-black border-2"/>
      </div>
      <br></br>
      <div className="form-group">
        <label htmlFor="group-description">Mô tả: </label>
        <input type="text" placeholder="Mô tả" name="group-description" className="border-black border-2"/>
       </div>
      <br></br>
      <input type="file" accept="image/*" placeholder="Ảnh" />
      <div className="form-group">
        <label htmlFor="add-memeber">Thêm thành viên: </label>
        <input name="add-memeber" type='text' placeholder="mssv" className="border-black border-2" />
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