import {useState, useRef, useCallback, useEffect} from 'react';

interface UseMenuOptions {
    preventScroll?: boolean;
    closeOnEsc?: boolean;
    closeOnClickOutside?: boolean;
}

export const useMenu = ({
                            preventScroll = true,
                            closeOnEsc = true,
                            closeOnClickOutside = true
                        }: UseMenuOptions = {}) => {
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
        let originalStyle = '';
        if (preventScroll) {
            originalStyle = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if (closeOnEsc && e.key === 'Escape' && isOpen) {
                closeMenu();
            }
        };

        const handleClickOutside = (e: MouseEvent) => {
            if (closeOnClickOutside && isOpen && menuRef.current && !menuRef.current.contains(e.target as Node)
                && buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
                closeMenu();
            }
        };

        if (closeOnEsc) {
            document.addEventListener('keydown', handleKeyDown);
        }

        if (closeOnClickOutside) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            if (preventScroll && isOpen) {
                document.body.style.overflow = originalStyle;
            }

            if (closeOnEsc) {
                document.removeEventListener('keydown', handleKeyDown);
            }

            if (closeOnClickOutside) {
                document.removeEventListener('mousedown', handleClickOutside);
            }
        }
    }, [closeMenu, closeOnClickOutside, closeOnEsc, isOpen, preventScroll]);

    return {
        isOpen,
        toggleMenu,
        closeMenu,
        menuRef,
        buttonRef
    };
};