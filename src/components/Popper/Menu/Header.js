import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx("header")}>
            <img className={cx("header-icon")} alt="" src={images.arrow} onClick={onBack} />
            <span className={cx("header-title")}>{title}</span>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default Header;
