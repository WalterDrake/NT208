import React from "react";

const Post = () => {
  return (
    <div className=" ml-[40px] mt-[20px]  h-[100px] w-[1000px] rounded-3xl bg-white shadow-lg">
      <div className=" inline-block">
        <div className=" ml-[15px] mt-[7px] inline-block  h-[22px] w-[60px] rounded-2xl bg-blue-200 text-center text-[13px] font-bold shadow-lg">
          Hỏi đáp
        </div>
      </div>
      <div className="block">
        <h1 className=" dis ml-[20px] mt-[3SSpx] inline-block text-[20px] font-bold">
          Visual studio bị lỗi
        </h1>
      </div>
      <div>
        <h6 className="ml-[20px] mt-[5px] flex text-[10px] font-bold text-blue-700">
          Sukem
          <div className="ml-[10px] text-[10px] text-black">
            <h1>
              Anh chị cho em hỏi tại sao cái này của em nó lại bị như vậy ạ?
            </h1>
          </div>
        </h6>
      </div>
    </div>
  );
};

export default Post;
