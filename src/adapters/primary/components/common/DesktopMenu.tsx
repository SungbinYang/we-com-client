import React, {memo} from 'react';
import MenuItem from './MenuItem.tsx';
import { MENU_ITEMS } from '../../constant/menuItems.ts';

const DesktopMenu: React.FC = () => {
    return (
        <div className="hidden md:flex md:items-center md:space-x-4">
            {MENU_ITEMS.map(item => (
                <MenuItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default memo(DesktopMenu);