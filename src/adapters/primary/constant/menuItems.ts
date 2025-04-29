import {ElementType} from "react";
import {IoLogInOutline, IoPersonOutline} from "react-icons/io5";

export interface MenuItem {
    id: string;
    label: string;
    path: string;
    icon: ElementType;
}

export const MENU_ITEMS: MenuItem[] = [
    {
        id: 'login',
        label: '로그인',
        path: '/login',
        icon: IoLogInOutline
    },
    {
        id: 'signup',
        label: '회원가입',
        path: '/signup',
        icon: IoPersonOutline
    }
];