import PropTypes from "prop-types";
import className from "classnames/bind";
import styles from "./Popper.module.scss";

const cx = className.bind(styles);

function Wrapper({ children }) {
    return <div className={cx("wrapper")}>{children}</div>;
}

Wrapper.prototype = {
    children: PropTypes.isRequired,
};

export default Wrapper;
