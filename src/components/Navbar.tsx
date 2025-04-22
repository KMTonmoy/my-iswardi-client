'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Heart } from "lucide-react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
    { label: "Home", href: "/" },
    { label: "Places", href: "/places" },
    { label: "Emergency", href: "/hotlines" },
];

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const [notifications] = useState([
        { id: 1, message: "New event added", isNew: true },
        { id: 2, message: "Hospital info updated", isNew: false },
        { id: 3, message: "New restaurant listed", isNew: true },
    ]);

    const newCount = notifications.filter((n) => n.isNew).length;

    const handleLinkClick = (href: string) => {
        router.push(href);
        setMenuOpen(false); // Close menu on click (mobile)
    };

    return (
        <nav className="bg-[#F7EEDC] shadow-md py-4 px-6 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-[#4B3A2F]">My Ishwardi</h1>

                <div className="md:hidden">
                    <Button
                        variant="ghost"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-[#4B3A2F] hover:bg-[#EAD6B8] p-2"
                    >
                        {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
                    </Button>
                </div>

                <div className={`md:flex flex-col md:flex-row items-center gap-4 absolute md:static top-20 left-0 w-full md:w-auto bg-[#F7EEDC] px-6 md:px-0 py-4 md:py-0 transition-all duration-300 ease-in-out ${menuOpen ? 'flex' : 'hidden'}`}>
                    {links.map((link) => (
                        <Button
                            key={link.href}
                            variant="ghost"
                            onClick={() => handleLinkClick(link.href)}
                            className={`relative text-[#4B3A2F] hover:bg-[#EAD6B8] w-full md:w-auto px-4 py-2 font-semibold tracking-wide
                                ${pathname === link.href ? 'bg-[#4B3A2F] text-white shadow-lg scale-105' : ''}
                                transition-all duration-300 ease-in-out`}
                        >
                            {pathname === link.href && (
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                            )}
                            {link.label}
                        </Button>
                    ))}

                    {/* Donate Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="flex items-center gap-1 text-[#4B3A2F] hover:bg-[#EAD6B8] w-full md:w-auto"
                            >
                                <Heart className="w-4 h-4 text-red-500" />
                                Donate
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-[#FDF6EC]">
                            <DropdownMenuItem className="hover:bg-[#FFE4E6] text-[#B91C1C] font-medium">
                                Donate Blood
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-[#ECFDF5] text-[#047857] font-medium">
                                Donate Money
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Notification Bell */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative p-0 hover:bg-transparent">
                                <Bell className="text-[#4B3A2F] w-6 h-6" />
                                {newCount > 0 && (
                                    <span className="absolute -top-1 -right-1 text-white bg-[#F43F5E] text-xs font-bold px-1.5 rounded-full">
                                        {newCount}
                                    </span>
                                )}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-[#FFF7ED]">
                            {notifications.map((n) => (
                                <DropdownMenuItem
                                    key={n.id}
                                    className={`${n.isNew ? "text-[#F43F5E] font-semibold" : "text-[#4B3A2F]"}`}
                                >
                                    {n.message}
                                </DropdownMenuItem>
                            ))}
                            {notifications.length === 0 && (
                                <DropdownMenuItem>No notifications</DropdownMenuItem>
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Login Button */}
                    <Button className="bg-[#4B3A2F] text-white hover:bg-[#6B4F3F] transition w-full md:w-auto">
                        Login
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
