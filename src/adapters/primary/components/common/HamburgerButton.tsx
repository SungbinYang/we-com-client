import {FC, memo, RefObject} from 'react';
import {IoClose, IoMenu} from 'react-icons/io5';

interface HamburgerButtonProps {
    isOpen: boolean;
    onClick: () => void;
    buttonRef: RefObject<HTMLButtonElement | null>;
}

const HamburgerButton: FC<HamburgerButtonProps> = ({ isOpen, onClick, buttonRef }) => {
    return (
        <button
            ref={buttonRef}
            type="button"
            className="inline-flex items-center p-2 justify-center cursor-pointer
                text-sm text-gray-500 rounded-lg md:hidden
                hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200
                dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
            onClick={onClick}
        >
            <span className="sr-only">Toggle Menu</span>
            {isOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
    );
};

export default memo(HamburgerButton);