import { useState, useRef, useCallback, useEffect } from 'react';

interface UseMenuOptions {
    preventScroll?: boolean;
}

export const useMenu = ({ preventScroll = true }: UseMenuOptions = {}) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDialogElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setIsOpen(false);
    }, []);

    useEffect(() => {
        if (preventScroll && isOpen) {
            const originalStyle = window.getComputedStyle(document.body).overflow;
            document.body.style.overflow = 'hidden';

            return () => {
                document.body.style.overflow = originalStyle;
            };
        }
    }, [isOpen, preventScroll]);

    return {
        isOpen,
        toggleMenu,
        closeMenu,
        menuRef,
        buttonRef
    };
};