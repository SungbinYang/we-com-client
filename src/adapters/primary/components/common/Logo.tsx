import {FC} from "react";

interface LogoProps {
    href: string;
    path: string;
    alt: string;
    width?: number;
    height?: number;
    text?: string;
    className?: string;
}

export const Logo: FC<LogoProps> = ({href, path, alt, width, height, text, className}) => {
    return (
        <a className={`flex items-center space-x-3 rtl:space-x-reverse ${className}`} href={href}>
            <img src={path} alt={alt} width={width} height={height}/>
            {text &&
                <span className={"self-center text-2xl font-semibold whitespace-nowrap dark:text-white"}>{text}</span>}
        </a>
    )
};