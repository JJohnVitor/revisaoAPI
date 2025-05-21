import axios from "axios"

async function ObterPost() {
    try {
        const response = await axios.get('http://localhost:3000/posts');
        return response.data
        //console.log('Usuários (Axios):', response.data);
    } catch (error) {
        console.error('Erro ao buscar posts (Axios):', error);
    }
}

async function ObterPostPorId(id) {
    try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        return response.data
        //console.log('Usuários (Axios):', response.data);
    } catch (error) {
        console.error('Erro ao buscar posts (Axios):', error);
    }
}

export async function cadastrarPost(dados) {
    try {
        const response = await axios.post(`http://localhost:3000/usuario`,dados);
        return response.data
        //console.log('Usuários (Axios):', response.data);
    } catch (error) {
        console.error('Erro ao buscar posts (Axios):', error);
    }
}

async function atualizarPost(id) {
    try {
        const response = await axios.put(`http://localhost:3000/posts${id}`);
        console.log('Usuários (Axios):', response.data);
    } catch (error) {
        console.error('Erro ao buscar posts (Axios):', error);
    }
}


