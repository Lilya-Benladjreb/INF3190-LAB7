function ValiderFormulaire() {
    
    let form = document.forms["form1"];

    let prenom = form["prenom"].value;
    let nom = form["nom"].value;
    let age = form["age"].value;
    let codep = form["codep"].value;

    console.log(form["prenom"].value);

    if (prenom == ""){
        document.getElementById("prenomErr").innerHTML = "Le prénom ne doit pas être vide"
    }else if (prenom.length > 50) {
        document.getElementById("prenomErr").innerHTML = "Le prénom ne peut pas contenir plus de 50 caractères"
    }

    if (nom == ""){
        document.getElementById("nomErr").innerHTML = "Le nom ne doit pas être vide"
    }else if (nom.length > 40) {
        document.getElementById("nomErr").innerHTML = "Le nom ne peut pas contenir plus de 40 caractères"
    }

    if (age == ""){
        document.getElementById("ageErr").innerHTML = "L'âge ne doit pas être vide"
    }else if (age.length > 2) {
        document.getElementById("ageErr").innerHTML = "L'âge ne peut pas contenir plus de 2 caractères"
    }
    

    if (codep == ""){
        document.getElementById("codepErr").innerHTML = "Le code permanent ne doit pas être vide"
    }else if (codep.length > 12) {
        document.getElementById("codepErr").innerHTML = "Le code permanent ne peut pas contenir plus de 12 caractères"
    }

    return false;
    }