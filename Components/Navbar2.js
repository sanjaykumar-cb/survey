import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";

const MENU_LIST = [
    { text: "Dashboard", href: " " },
    { text: "Feedback", href: "/feedback" },
    { text: "Customers", href: "/customer" },
    { text: "Report", href: "/report" },

];
const Navbar2 = () => {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);
    const myLoader = ({ src, width, quality }) => {
        return `logo.png`
    }

    return (
        <header>
            <nav className={`nav`}>
                <Link href={""}>
                    <a>
                        <Image loader={myLoader} src="logo.png" alt="Picture of the author" width={250} height={65}
                        />
                    </a>
                </Link>
                <div
                    onClick={() => setNavActive(!navActive)}
                    className={`nav__menu-bar`}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`${navActive ? "active" : ""} nav__menu-list`}>
                    {MENU_LIST.map((menu, idx) => (
                        <div
                            onClick={() => {
                                setActiveIdx(idx);
                                setNavActive(false);
                            }}
                            key={menu.text}
                        >
                            <NavItem active={activeIdx === idx} {...menu} />
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar2;