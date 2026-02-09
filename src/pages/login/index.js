export async function signin(dados) {
    const url = "https://intcicopal.github.io/rota/src/db/users.json";

    try {
        const response = await fetch(url);
        const usuarios = await response.json();

        const usuarioEncontrado = usuarios.find(u =>
            u.user.toLowerCase() === dados.user.toLowerCase()
        );

        if (!usuarioEncontrado) {
            throw new Error("Credenciais invalidas");
        }

        if (usuarioEncontrado.password.toString() !== dados.password) {
            throw new Error("Credenciais invalidas");
        }

        sessionStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));
        window.location = "/"

    } catch (erro) {
        console.error("Erro ao buscar usuários:", erro);
    }
}