// FONCTION POUR ADDITION
function Addition(nombre_1, nombre_2) {
    return nombre_1 + nombre_2;

}
// FONCTION POUR MULTIPLICATION
function Multiplication(nombre_1, nombre_2) {
    return nombre_1 * nombre_2;
}
// FONCTION POUR SOUSTRAIRE
function Soustraction(nombre_1, nombre_2) {
    return nombre_1 - nombre_2;
}
// FONCTION POUR DIVISER
function Division(nombre_1, nombre_2) {
    if (nombre_2 == 0) {
        throw new Error("Impossible de diviser par 0");

    }
    return nombre_1 / nombre_2;
}


// DEMANDER UN MODE DE CALCUL A L'UTILISATEUR
do {
    var choix = Number(prompt("Que souhaitez-vous faire ? \n\n 1 - Addition \n 2 - Multiplication \n 3 - Soustraction \n 4 - Division \n "));

} while (choix != 1 && choix != 2 && choix != 3 && choix != 4);

// DEMANDER DEUX NOMBRES A L'UTILISATEUR
do {
    var nombre_1 = Number(prompt("Entre votre premier nombre :"));
    var nombre_2 = Number(prompt("Entre votre deuxième nombre :"));
} while (isNaN(nombre_1) || isNaN(nombre_2));
try {

    switch (choix) {
        case 1:
            var resultat = Addition(nombre_1, nombre_2);
            break;
        case 2:
            var resultat = Multiplication(nombre_1, nombre_2);
            break;
        case 3:
            var resultat = Soustraction(nombre_1, nombre_2);
            break;
        case 4:
            var resultat = Division(nombre_1, nombre_2);
            break;

        default:
            throw new Error(" une erreur est survenue");

    }
}
catch (error) {
    alert(error);
}
alert("Voici le résultat " + resultat);