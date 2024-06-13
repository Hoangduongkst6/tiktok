import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <li className={cx("wrapper")}>
            <img
                className={cx("avatar")}
                src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/c14a92a8e2e23babececab98c0f67fac~c5_300x300.webp?lk3s=a5d48078&nonce=59462&refresh_token=589720827da72e9a6804e9d174a79336&x-expires=1718175600&x-signature=v89f5QBI6vJsbFX0gEc6Gb5MsgM%3D&shp=a5d48078&shcp=c1333099"
                alt="Sơn Tùng M-TP"
            />
            <div className={cx("info")}>
                <span className={cx("name")}>
                    <span>tiger 050794</span>
                    <img src={images.tickblue} alt=""></img>
                </span>
                <p className={cx("nickname")}>Sơn Tùng M-TP</p>
            </div>
        </li>
    );
}

export default AccountItem;
