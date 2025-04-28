import {FC, RefObject, useRef} from "react";
import {Logo} from "../common/Logo.tsx";
import logo from "../../../../assets/image/logo.webp";
import {useMenu} from "../../hooks/useMenu.ts";
import MobileMenu from "../common/MobileMenu.tsx";
import HamburgerButton from "../common/HamburgerButton.tsx";
import DesktopMenu from "../common/DesktopMenu.tsx";

interface UseMenuReturnType {
    isOpen: boolean;
    toggleMenu: () => void;
    closeMenu: () => void;
    menuRef: RefObject<HTMLDialogElement>;
    buttonRef: RefObject<HTMLButtonElement>;
}

const NavbarAnimated: FC = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);

    const { isOpen, toggleMenu, closeMenu } = useMenu() as UseMenuReturnType;

    return (
        <header className="sticky top-0 w-full z-50 antialiased">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 shadow-md dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center">
                    <Logo href="/" path={logo} alt="로고" width={45} height={45} text="we-com" />

                    <DesktopMenu />

                    <HamburgerButton
                        isOpen={isOpen}
                        onClick={toggleMenu}
                        buttonRef={btnRef}
                    />

                    <MobileMenu
                        isOpen={isOpen}
                        onClose={closeMenu}
                        menuRef={dialogRef}
                    />
                </div>
            </nav>
        </header>
    );
};

export default NavbarAnimated;