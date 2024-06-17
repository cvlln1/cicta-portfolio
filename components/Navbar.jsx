"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "about",
        path: "/about",
    },
    {
        name: "projects",
        path: "/projects",
    },
    {
        name: "contact",
        path: "/conta",
    },
];


const Navbar = () => {
    const pathname = usePathname();
    console.log(pathname);
    return <nav className="flex gap-8">
    
    </nav>;
};

export default Navbar;