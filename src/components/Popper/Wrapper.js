import className from "classnames/bind";
import styles from "./Popper.module.scss";

const cx = className.bind(styles);

function Wrapper({ children }) {
    return <ul className={cx("wrapper")}>{children}</ul>;
}

export default Wrapper;
