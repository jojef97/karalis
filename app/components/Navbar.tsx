import './Navbar.css';

export default function Navbar() {
    return(
        <nav className="Navbar">
            <div className="logo-container">
                <img src="/Bk_Logo.png" alt="Logo" />
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Sectors</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Insights</a></li>
                <li><a href="#">Contact</a></li>
                
            </ul>
        </nav>
    )
}