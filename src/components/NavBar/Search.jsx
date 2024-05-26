import { FaSearch } from "react-icons/fa";
import { useEffect, useState, useRef } from 'react';
import Tooltip from "@mui/material/Tooltip";
import useDebounce from "../../hook/useDebounce";
import * as searchServices from "../../service/search";

import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';



function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z]'])
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);


            setSearchResult(result);
            setLoading(false)
        };
        console.log(searchResult)
        fetchApi();
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };


    return (
        // Using a wrapper <div> tag around the reference element solves
        // this by creating a new parentNode context.
        <div>
            {/* <HeadlessTippy
                interactive
                visible={showResult > 0}
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <div>
                            <h4>Accounts</h4>
                            {searchResult.map((result) => (
                                <div>
                                    <p>{result}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div >

                    <input
                        type="text"
                        ref={inputRef}
                        value={searchValue}
                        className="mr-16 w-full px-4 py-2 shadow-lg rounded-3xl border-2 border-gray-300 pl-10 trancate outline-none"
                        placeholder="Tìm kiếm Khóa học, Tài liệu, Môn học,..."
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon icon={faSpinner} />}

                    <button onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy> */}
        </div>
    );
}

export default Search;
