import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FC} from "react";
import Home from "../../adapters/primary/pages/home/Home.tsx";

const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;