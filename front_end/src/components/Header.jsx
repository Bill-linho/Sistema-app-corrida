import { useState } from "react";
import "../styles/Home.css"
import ModalsLogin from "./ModalsLogin.jsx"

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
        <div className="Header">
            <button onClick={() => setIsModalOpen(true)}>login</button>

            <ModalsLogin isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <p>Este é o conteúdo do modal.</p>
            </ModalsLogin>
        </div>
    )
}

export default Header