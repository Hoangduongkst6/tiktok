import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
    to,
    herf,
    primary = false,
    outline = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    children,
    className,
    onClick,
    ...passPros
}) {
    let Comp = "button";
    const props = {
        onClick,
        ...passPros,
    };

    // Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith("on") && typeof props[key] === "function") {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (herf) {
        props.href = herf;
        Comp = "a";
    }

    const classes = cx("wrapper", {
        [className]: className,
        primary,
        outline,
        rounded,
        disabled,
        small,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
}

export default Button;
