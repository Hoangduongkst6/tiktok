import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/";
import "tippy.js/dist/tippy.css";

import config from "~/config";
import Button from "~/components/Button";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import Menu from "~/components/Popper/Menu";
import Search from "../Search";

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
    // Handle logic
    const handleMenuChange = (menuItem) => {
        // ...
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
            to: "/setting",
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
                    <Link to={config.routes.home} className={cx("logo")}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>

                    {/* Search */}
                    <Search />

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
