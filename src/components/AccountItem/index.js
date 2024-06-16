import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import images from "~/assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <li className={cx("wrapper")}>
            <Link to={`/@${data.nickname}`}>
                <img className={cx("avatar")} src={data.avatar} alt={data.fullname} />
                <div className={cx("info")}>
                    <span className={cx("name")}>
                        <span>{data.nickname}</span>
                        {data.tick && <img src={images.tickblue} alt=""></img>}
                    </span>
                    <p className={cx("nickname")}>{data.full_name}</p>
                </div>
            </Link>
        </li>
    );
}

export default AccountItem;
