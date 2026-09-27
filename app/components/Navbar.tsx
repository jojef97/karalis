"use client";

import { useState } from "react";
import { usePathname } from "next/navigation"; 
import './Navbar.css';
import Link from "next/link"; 
import { Menu, X } from "lucide-react"; 



export default function Navbar() {

    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);  //Για Mobile, open close 

    return(

        <nav className="Navbar">

            <div className="logo-container">

                <img src="/Bk_Logo.png" alt="Logo" />

            </div>
            

            <ul className="desktop-links">



            <li><Link href="/"className={pathname === "/" ? "active" : ""}>Home</Link></li>

            <li><Link href="/services"className={pathname.startsWith("/services") ? "active" : ""}>Services</Link></li>

            <li><Link href="/sectors"className={pathname === "/sectors" ? "active" : ""}>Sectors</Link></li>

            <li><Link href="/Projects"className={pathname === "/projects" ? "active" : ""}>Projects</Link></li>

            <li><Link href="/insights"className={pathname === "/insights" ? "active" : ""}>Insights</Link></li>

            <li><Link href="/contact"className={pathname === "/contact" ? "active" : ""}>Contact</Link></li>

               

            </ul>


        <div className="burger-icon" onClick={() =>setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
         
        </div>


        {isMenuOpen && (
            <div className="mobile-menu">

                
                

    <ul>
      <li><Link href="/"onClick={() => setIsMenuOpen(false)}>Home</Link></li>
      <li><Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
      <li><Link href="/sectors" onClick={() => setIsMenuOpen(false)}>Sectors</Link></li>
      <li><Link href="/Projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
      <li><Link href="/insights" onClick={() => setIsMenuOpen(false)}>Insights</Link></li>
      <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
    </ul>
            </div>
        
        )}
    </nav>

    )

} 