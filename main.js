// Message dans la console au chargement
console.log("Le script JavaScript est bien chargé 🚀");

// Attendre que la page soit chargée
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");

    button.addEventListener("click", () => {
        alert("Bouton cliqué via JavaScript ✅");
    });
});
