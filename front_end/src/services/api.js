import axios from "axios"
import "dotenv/config"

export const api = axios.create({
    baseURL: process.env.AXIOS_VITA_BASE_URL
})

const logarUser = async (email, senha) => {
    const resposta = await api.post("/login", { email, senha });
    return resposta;
}

const atividadesCarregar = async ()=>{
    const resposta = await api.get("/")
    return resposta 
}