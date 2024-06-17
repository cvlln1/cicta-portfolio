"use client";

import { useState } from 'react';
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {CiMenuFries} from 'react-icons/ci'


const links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'about',
        path: '/about',
    },
    {
        name: 'projects',
        path: '/projects',
    },
    {
        name: 'contact',
        path: '/contact',
    },
];
        

        
const MobNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const handleLinkClick = () => {
        setTimeout(() => {setIsOpen(false)}, 300);
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
            <button className="flex justify-center items-center">
                    <CiMenuFries className="text-[32px] text-blue-500" />
            </button>
        </SheetTrigger>   
         <SheetContent className="flex flex-col" >

            {/* Logo */}
            <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/" className="">
                    <h1 className="text-6xl font-semibold =">
                        Yur1<span className="text-blue-500">.</span>
                    </h1>
                </Link>
                </div>


            {/* Itens */}
            <nav className='flex flex-col justify-center items-center gap-8'>
                {links.map((link, index) => {
                    return (
                        <Link href={link.path} key={index} 
                        className={`${link.path === pathname && "text-blue-500 border-b-2 border-blue-500"} capitalize text-xl hover:text-blue-500 transition-all`}onClick={handleLinkClick}>
                            {link.name}
                        </Link>
                    );
                })}
            </nav>

         </SheetContent>
   </Sheet>
  );
};

export default MobNavbar