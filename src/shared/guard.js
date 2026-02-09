(function () {
    const usuario = sessionStorage.getItem("usuario");

    try {
        if (!usuario) throw new Error("Sem sessão");

        const dados = JSON.parse(usuario);

        // se quiser validar campo obrigatório
        if (!dados || !dados.user) throw new Error("Sessão inválida");

    } catch (e) {
        window.location.href = "./src/pages/login/";
    }
})();