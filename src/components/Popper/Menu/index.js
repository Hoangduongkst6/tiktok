import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItem = () => {
        return items.map((item, index) => {
            return <MenuItem key={index} data={item} />;
        });
    };

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            render={(attrs) => (
                <div
                    className={cx("menu-content")}
                    tabIndex="-1"
                    {...attrs}
                    data-placement="button"
                    data-escaped={false}
                >
                    <PopperWrapper>{renderItem()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
