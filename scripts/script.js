function afficherResultat(score, nbMotsProposes) {
  let spanScore = document.querySelector(".zoneScore span");

  let affichageScore = `${score}/${nbMotsProposes}`;

  spanScore.innerText = affichageScore;
}

function choisirPhrasesOuMots() {
  //on demande de choir entre "mots" ou "phrases"
  let choix = prompt("Veuillez choisir la liste: mots ou phrases");

  //tant qu'il n'a pas choisi "mots" ou "phrases" on redemande
  while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Veuillez choisir la liste: mots ou phrases");
  }
  return choix;
}

function lancerBoucleDeJeu(listePropositions) {
  let score = 0;

  //tant que la longueur de la liste n'est pas atteinte, on demande le mot suivant
  for (let i = 0; i < listePropositions.length; i++) {
    motUtilisateur = prompt("Ecrivez : " + listePropositions[i]);

    //si le mot est exact, alors le score augmente de 1
    if (motUtilisateur === listePropositions[i]) {
      score++;
    }
  }
  return score;
}

function lancerJeu() {
  let choix = choisirPhrasesOuMots();

  let score = 0;

  let nbMotsProposes = 0;

  if (choix === "mots") {
    score = lancerBoucleDeJeu(listeMots);
    nbMotsProposes = listeMots.length;
  } else {
    score = lancerBoucleDeJeu(listePhrases);
    nbMotsProposes = listePhrases.length;
  }

  afficherResultat(score, nbMotsProposes);
}
