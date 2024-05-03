import React from "react";
import useUser from "../../hook/useUser";

const Dangxuat = () => {
  const {user,setUser} = useUser()
  const hanldeLogout = () =>{
    setUser(null)
    localStorage.removeItem('UserUit')
  }
  return (
    <div className="mt-9 text-lg text-[#ff3e3e] font-bold w-[135px] mb-16 rounded" onClick={hanldeLogout}>
      {/* <LuLogOut className="inline-block w-6 h-6 mr-2 -mt-2"></LuLogOut> */}
      Đăng xuất
    </div>
  );
};

export default Dangxuat;
