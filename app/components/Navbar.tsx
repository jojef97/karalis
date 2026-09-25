"use client";
import { usePathname } from "next/navigation"; /*For the underline on navrbar*/
import './Navbar.css';
import Link from "next/link";

export default function Navbar() {
    const pathname = usePathname();
    return(
        <nav className="Navbar">
            <div className="logo-container">
                <img src="/Bk_Logo.png" alt="Logo" />
            </div>
            <ul>

            <li><Link href="/"className={pathname === "/" ? "active" : ""}>Home</Link></li>
            <li><Link href="/services"className={pathname.startsWith("/services") ? "active" : ""}>Services</Link></li>
            <li><Link href="/sectors"className={pathname === "/sectors" ? "active" : ""}>Sectors</Link></li>
            <li><Link href="/Projects"className={pathname === "/projects" ? "active" : ""}>Projects</Link></li>
            <li><Link href="/insights"className={pathname === "/insights" ? "active" : ""}>Insights</Link></li>
            <li><Link href="/Contact"className={pathname === "/contact" ? "active" : ""}>Contact</Link></li>
                
            </ul>
        </nav>
    )
}