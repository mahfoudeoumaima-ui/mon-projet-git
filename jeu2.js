let nom = prompt("Entre votre nom pour commencer le quiz :");

const questions = [
  { q: "Maquetter une application", r: "C1" },
  { q: "Réaliser une interface utilisateur web statique et adaptable", r: "C2" },
  { q: "Développer une interface utilisateur web dynamique", r: "C3" },
  { q: "Créer une base de données - niveau 1", r: "C4" },
  { q: "Créer une base de données - niveau 2", r: "C5" },
  { q: "Développer les composants d’accès aux données - niveau 1", r: "C6" },
  { q: "Développer la partie back-end d’une application web ou web mobile - niveau 1", r: "C7" },
  { q: "Framework FrontEnd (React, VueJs...)", r: "C8" }
];

let score = 0;

function quiz() {
  for (let i = 0; i < questions.length; i++) {
    console.log(  "Question " + (i + 1) + ":" );
    let reponse = prompt(questions[i].q);

    if (reponse && reponse.toUpperCase() === questions[i].r) {
      console.log(" Correct ! La réponse est : " + questions[i].r);
      score++;
    } else {
      console.log(" Incorrect. La bonne réponse est : " + questions[i].r);
    }
  }
  let noteSur8 = score;  //puisque je sais que les question sont 8 question je veux plutot
  //  chande question.length par 8 est score par notesur8 //
  //console.log(" Score final : " + score + "/" + questions.length);//
  console.log(" Note sur 8 : " + noteSur8 + "/8");
  if (score === questions.length) {
    console.log(" Bravo " + nom + " , excellent travail :) ");
  } else if (score > questions.length / 2)  // pour la devusion sur 2 je voulais dire 8/2 ce
  //  qui signifie que la moitie des reponses sont fausses//
  {
    console.log(" Bien joué " + nom + " , continue d'apprendre :/");
  } else {
    console.log(" Courage " + nom + " , tu dois répéter :(");
  }
}

quiz();
