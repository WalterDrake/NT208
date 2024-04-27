import {FaSearch} from "react-icons/fa";
import { useEffect, useState, useRef } from 'react';
import Tippy from '@tippyjs/react';
import  useDebounce  from "../../hook/useDebounce";

export  function Search() {
    const [searchValue, setsearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const debouncedValue = useDebounce(searchValue, 500);
    const [showResult, setShowResult] = useState(false);

    function handleChange(e) {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setsearchValue(searchValue);
            setShowResult(true)
        }
    }

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }
        // call API here
        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debouncedValue);

            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debouncedValue]);

    function HandleClear() {
        setsearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }
    
    function handleHideResult() {
        setShowResult(false);
    }


  return (
   <div>
        {/* <Tippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <ul>
                        {Array.isArray(searchResult) && searchResult.map((item) => (
                            item && item.id && item.name && <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            )}
            onClickOutside={handleHideResult}
        > */}
            <input
                type="text"
                className="mr-16 w-full px-4 py-2 shadow-lg rounded-3xl border-2 border-gray-300 pl-10 trancate outline-none"
                placeholder="Tìm kiếm Khóa học, Tài liệu, Môn học,..."
                onChange={handleChange}
                onFocus={() => setShowResult(true)}
                
            />
            <FaSearch className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        {/* </Tippy> */}
   </div>
  )
}
