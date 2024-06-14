import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

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
        children: {
            title: "Language",
            data: [
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Tiếng Việt",
                },
            ],
        },
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

    // Handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const currentUser = true;

    const userMenu = [
        {
            icon: images.user,
            title: "View profile",
            to: "/@kst6",
        },
        {
            icon: images.favorites,
            title: "Favorites",
        },
        {
            icon: images.setting,
            title: "Settings",
            to: "setting",
        },
        ...MENU_ITEMS,
        {
            icon: images.logout,
            title: "Log out",
            separate: true,
        },
    ];

    return (
        <header className={cx("wrapper")}>
            <div className="container-fluid">
                <div className={cx("inner")}>
                    <Link to="/" className={cx("logo")}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>

                    <div>
                        <HeadlessTippy
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
                        </HeadlessTippy>
                    </div>

                    <div className={cx("action")}>
                        <Button outline className={cx("btn-upload")}>
                            <img src={images.plus} alt="Upload" />
                            <span>Upload</span>
                        </Button>

                        {currentUser ? (
                            <>
                                <Tippy content="Messages">
                                    <button className={cx("message")}>
                                        <img src={images.message} alt="message" />
                                    </button>
                                </Tippy>

                                <Tippy content="Inbox">
                                    <button className={cx("inbox")}>
                                        <img src={images.inbox} alt="inbox" />
                                    </button>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                <Button primary>Log In</Button>
                            </>
                        )}

                        <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                            {currentUser ? (
                                <button className={cx("avatar")}>
                                    <img src={images.avatar} alt="avatar" />
                                </button>
                            ) : (
                                <button className={cx("ellipsis")}>
                                    <img src={images.ellipsis} alt="ellipsis" />
                                </button>
                            )}
                        </Menu>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
