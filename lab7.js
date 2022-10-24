function ValiderFormulaire() {
    
    let form = document.forms["form1"];

    let prenom = form["prenom"].value;
    let nom = form["nom"].value;
    let age = form["age"].value;
    let codep = form["codep"].value;

    console.log(form["prenom"].value);

    if(prenom == ""){
        document.getElementById("prenomErr").innerHTML = "Le prénom ne doit pas être vide"
    }

    if(nom == ""){
        document.getElementById("nomErr").innerHTML = "Le nom ne doit pas être vide"
    }

    if(age == ""){
        document.getElementById("ageErr").innerHTML = "L'âge ne doit pas être vide"
    }

    if(codep == ""){
        document.getElementById("codepErr").innerHTML = "Le code permanent ne doit pas être vide"
    }

    return false;
}