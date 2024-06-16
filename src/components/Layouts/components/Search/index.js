import { useState, useEffect, useRef } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";

import * as searchService from "~/apiService/searchService";
import { useDebounced } from "~/hooks";
import AccountItem from "~/components/AccountItem";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import images from "~/assets/images";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debounced = useDebounced(searchValue, 500);

    useEffect(() => {
        if (!debounced) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchService.search(debounced);
            setSearchResult(result);

            setLoading(false);
        };

        fetchApi();
    }, [debounced]);

    const handleClear = () => {
        setSearchValue("");
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div
                    className={cx("form-result")}
                    tabIndex="-1"
                    {...attrs}
                    data-placement="button"
                    data-escaped={false}
                >
                    <PopperWrapper>
                        <h4>Account</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx("form")}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    type="text"
                    placeholder="Search"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button className={cx("clear")} onClick={handleClear}>
                        <img src={images.close} alt="close" />
                    </button>
                )}
                {loading && <img className={cx("loading")} src={images.loading} alt="loading" />}

                <button className={cx("search")}>
                    <img src={images.search} alt="Search" />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
