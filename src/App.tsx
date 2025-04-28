import {FC} from "react";
import Router from "./config/routes/Router.tsx";
import Navbar from "./adapters/primary/components/layout/Navbar.tsx";

const App: FC = () => {
    return (
        <>
            <Navbar/>
            <Router/>
        </>
    )
}

export default App;