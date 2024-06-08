import Header from "~/components/Layout/components/Header";
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <dic className="content">{children}</dic>
            </div>
        </div>
    );
}

export default DefaultLayout;
