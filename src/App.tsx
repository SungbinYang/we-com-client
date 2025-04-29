import {FC} from "react";
import Router from "./config/routes/Router.tsx";
import Navbar from "./adapters/primary/components/layout/Navbar.tsx";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: FC = () => {
    return (
        <>
            <Navbar/>
            <Router/>
            <ToastContainer position={"top-right"} autoClose={3000} />
        </>
    )
}

export default App;