/*********************************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu.
 *
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
  // Récupération de la zone dans laquelle on va écrire le score
  let spanScore = document.querySelector(".zoneScore span");
  // Ecriture du texte
  let affichageScore = `${score} / ${nbMotsProposes}`;
  // On place le texte à l'intérieur du span.
  spanScore.innerText = affichageScore;
}

/**
 * Cette fonction demande à l'utilisateur de choisir entre "mots" et "phrases" et retourne le choix de l'utilisateur
 * @return {string} : le choix de l'utilisateur, ce choix est nécessairement "mots" ou "phrases
 */

/**
 * Cette fonction lance la boucle de jeu, c'est à dire qu'elle demande à l'utilisateur de saisir tous les mots
 * contenus dans le tableau listePropositions. A chaque mot saisi, on incrémente le score de l'utilisateur
 *
 * @param {array[string]} listePropositions
 * @return {number} : le score de l'utilisateur
 */

/**
 * Cette fonction lance le jeu.
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu() {
  // Initialisations
  let score = 0;

  // i = Mots
  let i = 0;

  // On affiche la proposition dans la div "zoneProposition"
  function afficherProposition(motAfficher) {
    let zonePropostion = document.querySelector(".zoneProposition");
    zonePropostion.innerText = motAfficher;
  }

  let boutonValider = document.getElementById("btnValiderMot");
  let inputEcriture = document.getElementById("inputEcriture");

  // On récupère la liste que l'on veut afficher dans le paramètre avant le click
  afficherProposition(listeMots[i]);

  boutonValider.addEventListener("click", () => {
    if (inputEcriture.value === listeMots[i]) {
      score++;
    }
    // On passe au mot suivant
    i++;
    afficherResultat(score, i);

    inputEcriture.value = "";

    if (listeMots[i] === undefined) {
      afficherProposition("Le jeu est fini");
      boutonValider.disabled = true;
    } else {
      // On récupère la liste que l'on veut afficher dans le paramètre
      afficherProposition(listeMots[i]);
    }
  });

  // afficherResultat(score, i);
}
