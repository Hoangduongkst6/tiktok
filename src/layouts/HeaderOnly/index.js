import PropTypes from "prop-types";
import Header from "~/layouts/components/Header";

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <dic className="content">{children}</dic>
            </div>
        </div>
    );
}

HeaderOnly.prototype = {
    children: PropTypes.node.isRequired,
};

export default HeaderOnly;
