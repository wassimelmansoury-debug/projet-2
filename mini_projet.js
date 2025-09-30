const prompt = require("prompt-sync")();
let taches = [];

function Tache(id, description, isDone = false) {
    this.id = id;
    this.description = description;
    this.isDone = isDone;
}

function menu() {
    console.log("\n === To-Do List Console ===");
    console.log("1. Afficher les tâches");
    console.log("2. Ajouter une tâche");
    console.log("3. Rechercher une tâche");
    console.log("4. Modifier une tâche ");
    console.log("5. Supprimer une tâche ");
    console.log("6. Changer le statut d'une tâche ");
    console.log("7. Afficher tâches terminées / en attente ");
    console.log("0. Quitter");
    return Number(prompt("Entrez votre le choix :"));
}

function Afficher() {
    taches.map((e) => console.log(e.id, e.description, e.isDone));
}

function Ajouter() {
    let tache = prompt(" Ajouter une tâche :");
    taches.push(new Tache(taches.length, tache));
}

function Modifier() {
    let tache = prompt("Rechercher une tâche à modifier :");
    let app = taches.find((e) => e.description == tache);
    if (app) {
        let new_tach = prompt("Nouvelle description : ");
        app.description = new_tach;
        console.log("Tâche modifiée avec succès !");
    } else {
        console.log("Tâche non trouvée.");
    }
}

function Supprimer() {
    let id = Number(prompt("Entrer l'id de la tache pour supprimer :"));
    taches = taches.filter((element) => element.id != id);
    console.log("Tâche supprimée avec succès !");
}

function Changer() {
    let id = Number(prompt("ID de la tâche à changer le statut : "));
    let task = taches.find(t => t.id === id);
    if (task) {
        task.isDone = !task.isDone;
        console.log("Statut changé !");
    } else {
        console.log("Tâche introuvable.");
    }
}

let choix;
do {
    choix = menu();
    switch (choix) {
        case 1:
            Afficher();
            break;
        case 2:
            Ajouter();
            break;
        case 3:
            break;
        case 4:
            Modifier();
            break;
        case 5:
            Supprimer();
            break;
        case 6:
            Changer();
            break;
        case 7:
            console.log("Tâches terminées :");
            taches.filter(t => t.isDone).forEach(t => console.log(t.id, t.description));
            console.log("Tâches en attente :");
            taches.filter(t => !t.isDone).forEach(t => console.log(t.id, t.description));
            break;
        case 0:
            console.log("Au revoir !");
            break;
        default:
            console.log("Choix invalide !");
    }
} while (choix !== 0);
