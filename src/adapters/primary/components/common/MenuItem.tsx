import {FC, memo} from 'react';
import {MenuItem as MenuItemType} from '../../constant/menuItems.ts';
import {useLocation} from "react-router-dom";

interface MenuItemProps {
    item: MenuItemType;
    isMobile?: boolean;
    onClick?: () => void;
}

const MenuItem: FC<MenuItemProps> = ({item, isMobile = false, onClick}) => {
    const {label, path, icon: Icon} = item;
    const location = useLocation();

    const isSignUp = path === '/signup';

    if (isMobile) {
        return (
            <li className="hover:bg-blue-500 rounded-lg transition-colors">
                <a
                    className="flex items-center py-3 px-4 text-gray-700 rounded-lg dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    href={path}
                    onClick={onClick}
                >
                    <Icon className="mr-3" size={22}/>
                    <span>{label}</span>
                </a>
            </li>
        );
    }

    return (
        <a
            className={isSignUp
                ? "text-white bg-blue-500 hover:bg-blue-600 font-medium py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
                : "text-gray-900 hover:text-blue-600 font-medium dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            }
            href={path}
            aria-current={location.pathname === path ? "page" : undefined}
        >
            {label}
        </a>
    );
};

export default memo(MenuItem);