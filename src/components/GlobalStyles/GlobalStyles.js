import PropTypes from "prop-types";
import "./Reset.scss";
import "./Grid.scss";
import "./Base.scss";

function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
