function ValiderFormulaire() {
    
    let form = document.forms["form1"];

    let prenom = form["prenom"].value;
    let nom = form["nom"].value;
    let age = form["age"].value;
    let codep = form["codep"].value;
    let anneediplome = form["anneediplome"].value;

    const codepEx = new RegExp('^[A-Z]{4}[0-9]{8}$');
    const anneeDipEx = new RegExp('^[0-9]{4}$');
    const ageEx = new RegExp('^[0-9]{2}$');

    let validCodePermanent = codepEx.test(codep);
    let validAnneeDiplomation = anneeDipEx.test(anneediplome);
    let validAge = ageEx.test(age);

    let paras = document.getElementsByTagName("p");

    for(var i = 0; i < paras.length; i++){
        paras[i].innerHTML = "";
    }

    if (prenom == ""){
        document.getElementById("prenomErr").innerHTML = "Le prénom ne doit pas être vide";
    }else if (prenom.length > 50) {
        document.getElementById("prenomErr").innerHTML = "Le prénom ne peut pas contenir plus de 50 caractères";
    }

    if (nom == ""){
        document.getElementById("nomErr").innerHTML = "Le nom ne doit pas être vide";
    }else if (nom.length > 40) {
        document.getElementById("nomErr").innerHTML = "Le nom ne peut pas contenir plus de 40 caractères";
    }

    if (age == ""){
        document.getElementById("ageErr").innerHTML = "L'âge ne doit pas être vide";
    }else if (age.length > 2) {
        document.getElementById("ageErr").innerHTML = "L'âge ne peut pas contenir plus de 2 caractères";
    }else if (!validAge){
        document.getElementById("ageErr").innerHTML = "L'âge ne peut pas avoir de lettres";
    }
    
    if (codep == ""){
        document.getElementById("codepErr").innerHTML = "Le code permanent ne doit pas être vide";
    }else if (codep.length > 12) {
        document.getElementById("codepErr").innerHTML = "Le code permanent ne peut pas contenir plus de 12 caractères";
    }else if (!validCodePermanent){
        document.getElementById("codepErr").innerHTML = "Le code permanent n'a pas le bon format";
    }

    if (anneediplome == ""){
        document.getElementById("anneedipErr").innerHTML = "L'année de diplomation ne doit pas être vide";
    }else if (!validAnneeDiplomation){
        document.getElementById("anneedipErr").innerHTML = "L'année de diplomation n'a pas le bon format";
    }

    

    return false;
    }