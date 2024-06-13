import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";

import Button from "~/components/Button";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import AccountItem from "~/components/AccountItem";
import Menu from "~/components/Popper/Menu";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: images.temple,
        title: "LIVE Creator Hub",
    },
    {
        icon: images.translate,
        title: "English",
    },
    {
        icon: images.ask,
        title: "Feedback and help",
        to: "/feedback",
    },
    {
        icon: images.keyboard,
        title: "Keyboard shortcuts",
    },
    {
        icon: images.theme,
        title: "Dark mode",
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx("wrapper")}>
            <div className="container-fluid">
                <div className={cx("inner")}>
                    <Link to="/" className={cx("logo")}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>

                    <div>
                        <Tippy
                            interactive
                            visible={searchResult.length > 0}
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
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <form className={cx("form")}>
                                <input type="text" placeholder="Search" spellCheck={false} />
                                <button className={cx("clear")}>
                                    <img src={images.close} alt="close" />
                                </button>
                                <img className={cx("loading")} src={images.loading} alt="loading" />

                                <button className={cx("search")}>
                                    <img src={images.search} alt="Search" />
                                </button>
                            </form>
                        </Tippy>
                    </div>

                    <div className={cx("action")}>
                        <Button outline className={cx("btn-upload")}>
                            <img src={images.plus} alt="Upload" />
                            <span>Upload</span>
                        </Button>

                        <Button primary>Log In</Button>

                        <Menu items={MENU_ITEMS}>
                            <button className={cx("ellipsis")}>
                                <img src={images.ellipsis} />
                            </button>
                        </Menu>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
