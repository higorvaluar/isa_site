function subscribe() {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("contato").innerHTML = "<p>Inscrição realizada com sucesso!</p>";
    });
}
window.onload = subscribe;