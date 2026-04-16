import '../App.css'
import { useState } from 'react'
export default function Navbar(props) {
    const [activeLink, setActiveLink] = useState("Home");

    const links = [ "About", "Services", "Contact"];

    return (
        <nav className="" style={{
            display: "flex",
            gap: "30px",
            padding: "4px 4px",


        }}>
            {links.map((link) => (
                <NavLink
                    key={link}
                    label={link}
                    isActive={activeLink === link}
                    onClick={() => setActiveLink(link)}
                />
            ))}
        </nav>
    );
}

function NavLink({ label, isActive, onClick }) {
    const [hovered, setHovered] = useState(false);

    return (
        <a className="  "
            onClick={onClick}
            href={`#${label}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                position: "relative",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: isActive ? "700" : "600",
                color: isActive ? "orange" : hovered ? "orange" : "white",
                transition: "color 0.2s",
                paddingBottom: "4px",
            }}
        >

            {label}

            <span style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                height: "2px",
                width: isActive || hovered ? "100%" : "0%",  // ← grows on hover
                background: "#orange",
                borderRadius: "2px",
                transition: "width 0.25s ease",              // ← smooth animation
            }} />
        </a>
    );
}