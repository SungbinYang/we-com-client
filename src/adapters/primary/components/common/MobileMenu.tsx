import React, {memo, RefObject, useEffect, useRef} from 'react';
import { IoClose } from 'react-icons/io5';
import MenuItem from './MenuItem.tsx';
import { MENU_ITEMS } from '../../constant/menuItems.ts';
import dialogPolyfill from "dialog-polyfill";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    menuRef: RefObject<HTMLDialogElement | null>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, menuRef }) => {
    const dialogClass = isOpen ? 'flex float-right' : 'hidden';
    const transitionClass = isOpen ? 'translate-x-0' : 'translate-x-full';
    const overlayClass = isOpen ? 'opacity-50 z-40' : 'opacity-0 -z-10';

    const titleId = 'mobile-menu-title';
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!menuRef.current) return;

        const dialogElement = menuRef.current;

        try {
            dialogPolyfill.registerDialog(dialogElement);
        } catch (e) {
            console.error(e);
        }

        if (isOpen) {
            if (!dialogElement.open) {
                dialogElement.showModal();
            }

            setTimeout(() => closeButtonRef.current?.focus(), 100);
        } else {
            dialogElement.close();
        }

        const handleDialogClose = () => {
            if (isOpen) onClose();
        };

        dialogElement.addEventListener('close', handleDialogClose);

        return () => {
            dialogElement.removeEventListener('close', handleDialogClose);
        };
    }, [isOpen, onClose, menuRef]);

    return (
        <>
            <div
                className={`fixed inset-0 bg-black transition-opacity duration-300 md:hidden ${overlayClass}`}
                onClick={onClose}
                aria-hidden="true"
            />

            <dialog
                ref={menuRef}
                className={`fixed inset-y-0 right-0 m-0 p-0 w-72 max-w-[72vw] h-full border-none
                    bg-transparent shadow-none outline-none ${dialogClass} md:hidden`}
                aria-labelledby={titleId}
            >
                <div
                    className={`w-full h-full transform ${transitionClass} 
                        transition-transform duration-300 ease-in-out 
                        bg-white dark:bg-gray-800 shadow-lg overflow-y-auto`}
                >
                    <div className="flex justify-between items-center p-5 border-b">
                        <span
                            id={titleId}
                            className="font-semibold text-lg text-gray-500 dark:text-white"
                        >
                            메뉴
                        </span>
                        <button
                            ref={closeButtonRef}
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded p-1"
                            aria-label="메뉴 닫기"
                        >
                            <IoClose size={24} />
                        </button>
                    </div>

                    <div className="py-4 px-5">
                        <ul className="space-y-4">
                            {MENU_ITEMS.map(item => (
                                <MenuItem
                                    key={item.id}
                                    item={item}
                                    isMobile
                                    onClick={onClose}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default memo(MobileMenu);