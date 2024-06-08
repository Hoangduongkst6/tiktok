import Header from "~/components/Layout/components/Header";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <dic className="content">{children}</dic>
            </div>
        </div>
    );
}

export default DefaultLayout;
