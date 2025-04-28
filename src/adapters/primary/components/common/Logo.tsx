import {FC} from "react";

interface LogoProps {
    href: string;
    path: string;
    alt: string;
    width: number;
    height: number;
    text: string;
};

export const Logo: FC<LogoProps> = ({href, path, alt, width, height, text}) => {
    return (
        <a className={"flex items-center space-x-3 rtl:space-x-reverse"} href={href}>
            <img src={path} alt={alt} width={width} height={height}/>
            <span className={"self-center mb-2 text-2xl font-semibold whitespace-nowrap dark:text-white"}>{text}</span>
        </a>
    )
};