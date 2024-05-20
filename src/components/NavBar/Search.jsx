import { FaSearch } from "react-icons/fa";
import { useEffect, useState, useRef } from 'react';
import Tooltip from "@mui/material/Tooltip";
import useDebounce from "../../hook/useDebounce";
import * as searchServices from "../../service/search";    
export function Search() {
    const [searchValue, setsearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const debouncedValue = useDebounce(searchValue, 500);
    const [loading, setLoading] = useState()
    const [showResult, setShowResult] = useState(false);
    const inputRef = useRef(null);

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
            alert (result)

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
            <Tooltip title="hien khong ket noi duoc mang" open={showResult}>
                <>
                    <input
                        type="text"
                        ref={inputRef}
                        className="mr-16 w-full px-4 py-2 shadow-lg rounded-3xl border-2 border-gray-300 pl-10 trancate outline-none"
                        placeholder="Tìm kiếm Khóa học, Tài liệu, Môn học,..."
                        onChange={handleChange}
                        onBlur={() => setShowResult(false)}
                        onFocus={() => setShowResult(true)}
                    />
                    <FaSearch className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </>
            </Tooltip>
        </div>
    )
}
