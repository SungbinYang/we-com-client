import {FC} from "react";
import {Logo} from "../common/Logo.tsx";
import logo from "../../../../assets/image/logo.webp";
import {IoMenu} from "react-icons/io5";

const Navbar: FC = () => {
    return (
        <header className={"antialiased"}>
            <nav className={"bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800"}>
                <div className={"flex flex-wrap justify-between items-center"}>
                    <Logo href={"/"} path={logo} alt={"로고"} width={45} height={45} text={"we-com"}/>
                    <button type={"button"}
                            className={"inline-flex items-center p-2 w-10 h-10 justify-center cursor-pointer text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"}
                            aria-controls={"navbar-default"}>
                        <span className={"sr-only"}>Toggle Menu</span>
                        <IoMenu size={50}/>
                    </button>
                    <div
                        className={"fixed inset-y-0 right-0 transform translate-x-full transition-transform duration-300 ease-in-out bg-transparent  w-64 z-50 md:static md:translate-x-0 md:block md:w-auto"}
                        id={"navbar-default"}>
                        <ul className={"font-medium flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:p-0 md:items-center"}>
                            <li>
                                <a className={"block py-2 px-3 text-gray-900 rounded text-center hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}
                                   href="/login">
                                    로그인
                                </a>
                            </li>
                            <li>
                                <a className={"block py-2 px-4 text-center text-white bg-blue-500 hover:bg-blue-600 rounded"}
                                   href="/signup">
                                    회원가입
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;