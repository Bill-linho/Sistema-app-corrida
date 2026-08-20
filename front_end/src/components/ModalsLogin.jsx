import "../styles/Modal.css"
import { useState } from "react";

function ModalsLogin({ isOpen, onClose }) {
    if (!isOpen) return null;

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const login = async () => {
        try {
            const resposta = await api.post({ email, senha });

            return resposta
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
        }
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <main className="modal-body">
                    <label>Email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <label>Senha: </label>
                    <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    <br />
                    <button onClick={login}>Enviar</button>
                    <button onClick={onClose}>×</button>
                </main>
            </div>
        </div>
    )
}

export default ModalsLogin