db = db.getSiblingDB("");

db.personne.drop();
db.match.drop();
db.lieu.drop();
db.tournoi.drop();
db.activité.drop();
db.equipement.drop();
db.personne.insertMany([
    {"_id": 1, "nom":"Cor","prenom":"Edgar", "anneeNaissance":  2000, "sexe":"homme",
    "statut": "organisateur", "premierSecours": true},
    {"_id": 2, "nom":"Zinzin","prenom":"Guille", "anneeNaissance":  2004, "sexe":"homme",
    "statut": "joueur", "premierSecours": false, "points": 7, "equipe":"", "niveau":"débutant"},
    {"_id": 3, "nom":"Cann","prenom":"Luna", "anneeNaissance":  2002, "sexe":"femme",
    "statut": "joueur", "premierSecours": true, "points": 11, "equipe":"", "niveau":"débutant"}
]);

db.match.insertOne([
    {"_id": 1, "scoreJ1": 7, "scoreJ2":11, horaire:"9h00", "joueur1":2,"joueur2":3}
]);
db.lieu.insertOne([
    {"_id": 1, "lieu":"LaDoumègue", "adresse" : "65 rue LaDoumègue", "capacite": 5000,
    "nbVestiaire": 20, "presenceVentilation": true} 
]);
db.tournoi.insertOne([
    {"_id": 1, "date": "01/06/2024", "niveauCompetition": "débutant","format": "simple",
    "catégorie": "mixte", "duréeMax": "4h"/*listePers???*/ }
]);
db.activité.insertOne([
    {"_id":1, "durée": 30, /*listePers */}
]);
db.equipement.insertOne([
    {"_id": 1 , "nbBalles": 50, "nbTables": 8, "nbMarqueurs": 20, "nbFilets": 9,
    "nbRaquettes": 20}
]);
