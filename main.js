let choixUtilisateur = document.querySelector("input[type = 'number']").value;
console.log("choixUtilisateur:", choixUtilisateur);

function estPremier(nombre) {
    // si le nombre est plus petit que 2 il n'est PAS premier
    if (nombre < 2) {
        return "Il n'est pas un nombre premier";
    }
    for (let i = nombre - 1; i > 1; i--) {
        if (nombre % i === 0) {
            return "Il n'est pas un nombre premier";
        }
    }
    return "Il est un nombre premier";
}
let input = document.querySelector("input[type = 'number']");

input.addEventListener("change", function (event) {
    document.querySelector("#nombre").innerHTML = estPremier(
        event.target.value
    );
});

console.log(estPremier(choixUtilisateur));
