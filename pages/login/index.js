

export async function signin(dados) {
    const url = "https://intcicopal.github.io/comercial/src/db/users.json";

    try {
        const response = await fetch(url);
        const usuarios = await response.json();

        const usuarioEncontrado = usuarios.find(u =>
            u.user.toLowerCase() === dados.user.toLowerCase()
        );


        if (!usuarioEncontrado || usuarioEncontrado.password.toString() !== dados.password) {
            showToast("Credenciais invalidas")
            throw new Error("Credenciais invalidas");
        }

        // if (usuarioEncontrado.password.toString() !== dados.password) {
        //     throw new Error("Credenciais invalidas");
        // }

        sessionStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));
        window.location = "/comercial"

    } catch (erro) {
        console.error("Erro ao buscar usuários:", erro);
    }
}