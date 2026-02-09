async function carregarPagina(url) {
    const res = await fetch(url);
    const head = await res.text();
    document.getElementById("main").innerHTML = head;
}