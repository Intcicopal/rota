(async function () {

    // try {
    const res = await fetch('src/pages/components/head');
    const head = await res.text();
    document.getElementById("head").innerHTML = head;

    // } catch (e) {
    //     window.location.href = "src/pages/login/";
    // }
})();