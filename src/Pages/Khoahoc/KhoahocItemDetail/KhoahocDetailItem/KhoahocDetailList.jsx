import { useContext, useEffect, useState } from "react";
import * as item from "../../../../service/item";


import { CurrentItemContext } from "../../../../state/CoursecDetailProvider";

import useUser from "../../../../hook/useUser";
import ActionList from "./ActionList";
import { useParams } from "react-router-dom";

export default function KhoahocDetailList() {
        const { user } = useUser();
        const {setCurItem } = useContext(CurrentItemContext);
        const {courseId} = useParams()
        const [listItem, setListItem] = useState([]);
        const handleCuritem = (item) => {
                setCurItem(item)       
        }
        useEffect(() => {
                item
                        .getListItemOfCourse(courseId)
                        .then((res) => {
                                console.log("res list item", res);
                                setListItem(res);
                        })
                        .catch((err) => {
                                console.log("err", err);
                        });
        }, [courseId]);
        return (
                <ul className="h-full overflow-auto">
                        {listItem.map((item, index) => {
                                return (
                                        <li
                                                key={index}
                                                className="border-b border-[#ccc]"
                                        >
                                                <div className="flex justify-between items-center p-2 ">
                                                        <div className='bg-blue-300 w-full rounded-xl border-blue-500 hover:bg-blue-500' onClick={() =>handleCuritem(item)}>
                                                                <h5> Title : {item.title} </h5>
                                                                <h5> Description : {item.description} </h5>
                                                        </div>
                                                </div>
                                                <div>
                                                        <ActionList item={item} user={user}></ActionList>
                                                </div>
                                        </li>
                                );
                        })}
                </ul>
        );
}

