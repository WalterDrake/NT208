import { useContext, useEffect, useState } from "react";
import * as item from "../../../../service/item";
import { CurrentVideoContext } from "../KhoaHocDetailItem";

import useUser from "../../../../hook/useUser";
import ListVideo from '../../../../components/CourseDetail/ListVideo'
import ActionList from "./ActionList";

export default function KhoahocDetailList() {
        const { user } = useUser();
        const { courseDetails } = useContext(CurrentVideoContext);
        const [listItem, setListItem] = useState([]);
        useEffect(() => {
                item
                        .getListItemOfCourse(courseDetails._id)
                        .then((res) => {
                                console.log("res list item", res);
                                setListItem(res);
                        })
                        .catch((err) => {
                                console.log("err", err);
                        });
        }, [courseDetails]);
        return (
                <ul className="h-full overflow-auto">
                        {listItem.map((item, index) => {
                                return (
                                        <li
                                                key={index}
                                                className="border-b border-[#ccc]"
                                        >
                                                <div className="flex justify-between items-center p-2 ">
                                                        <div className='bg-blue-300 w-full rounded-xl border-blue-500'>
                                                                <h5> Title : {item.title} </h5>
                                                                <p>Description: {item.description}</p>
                                                        </div>

                                                </div>
                                                <div>
                                                        <ActionList item={item} user={user}></ActionList>
                                                        <ListVideo item={item}></ListVideo>
                                                </div>
                                        </li>
                                );
                        })}
                </ul>
        );
}

{/* <button onClick={() => setFormCreateVideo((pre) => !pre)}>
<CreateVideo></CreateVideo>
</button>
<button onClick={() => setFormCreatePost((pre) => !pre)}>
<CreatePost></CreatePost>
</button>
{(user.role === "admin" || user.role === "teacher") &&
formCreateVideo && (
  <CreateVideoForm item={item}></CreateVideoForm>
)}
{(user.role === "admin" || user.role === "teacher") &&
formCreatePost && (
  <CreatePostForItem item={item}></CreatePostForItem>
)} */}