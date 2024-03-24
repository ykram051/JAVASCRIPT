//EXERCICE1
let html = '<button onclick="insererSaisie()">Insérer le texte</button>'
document.body.innerHTML = html
function insererSaisie() {
  let saisie = prompt("Entrez votre texte ici : ");

  if (saisie) {
    let paragraphe = document.createElement("p");

    paragraphe.textContent = saisie;

    document.body.appendChild(paragraphe);
  }
}

//EXERCICE2

html='<button onclick="afficherSomme()">Afficher la somme</button>'
document.body.innerHTML = html

function afficherSomme() {
	
  let a = parseInt(prompt("Entrez le premier nombre : "));
  let b = parseInt(prompt("Entrez le deuxième nombre : "));
  let resultat = a + b;

  alert("La somme est de : " + resultat);
  
}
//EXERCICE3

let budget = parseInt(prompt("Entrez votre budget : "));

let achats = parseInt(prompt("Entrez votre montant : "));

if (budget >= achats) {
  
  alert("Le budget est suffisant pour payer les achats.");
} else {

  alert("Le budget est insuffisant pour payer les achats. " );
}

//EXERCICE4

let html='<button onclick="afficherPrixTTC()">Afficher le prix TTC</button>'
document.body.innerHTML=html
function afficherPrixTTC() {

  let prixHT = parseFloat(prompt("Entrez le prix HT : "));

  if (!isNaN(prixHT)) {
    
    let prixTTC = prixHT * 1.2;
    document.body.innerText = "Le prix TTC est de : " + prixTTC.toFixed(2) + "DH";
  } else {
   
    alert("Veuillez entrer un prix HT valide (nombre décimal).");
  }
}

//EXERCICE5
html='<button onclick="afficherPrixTTC()">Afficher le prix TTC</button>'
document.body.innerHTML=html;
function afficherPrixTTC() {
  let prixHT = parseFloat(prompt("Entrez le prix HT : "));
  if (!isNaN(prixHT)) {
   
    let tauxTVA = parseFloat(prompt("Entrez le taux de TVA (en %) : "));

    if (!isNaN(tauxTVA) && tauxTVA > 0) {
  
      let prixTTC = prixHT * (1 + tauxTVA / 100);

      document.body.innerText = "Le prix TTC est de : " + prixTTC + " DH";
    } else {
     
      alert("Veuillez entrer un taux de TVA valide (nombre décimal positif).");
    }
  } else {
    alert("Veuillez entrer un prix HT valide (nombre décimal).");
  }
}

//EXERCICE6
html='<button onclick="afficherPrixTTC()">Afficher le prix TTC</button>'
document.body.innerHTML=html;
function afficherPrixTTC() {

  let prixHT = parseFloat(prompt("Entrez le prix HT : "));
  if (!isNaN(prixHT)) {
 
    let tauxTVA = parseFloat(prompt("Entrez le taux de TVA (en %) : "));

    if (!isNaN(tauxTVA) && tauxTVA > 0) {
   
      let prixTTC = prixHT * (1 + tauxTVA / 100);
      let couleur;
			if (prixTTC > 100){  
     
      document.body.innerHTML = "Le prix TTC est de : <span style='color:red;'>" + prixTTC+ " DH</span>";
      }
      else{
      document.body.innerHTML = "Le prix TTC est de : <span style='color:green;'>" + prixTTC+ " DH</span>";
      }
      
    } else {
      alert("Veuillez entrer un taux de TVA valide (nombre décimal positif).");
    }
  } else {

    alert("Veuillez entrer un prix HT valide (nombre décimal).");
  }
}
//EXERCICE7
var cocktailElement = "<h1>Mes <span>cocktails préférés</span></h1><p>Mojito</p><p>Gin Fizz</p><p>Bloody mary<p><p>Long Island Iced Tea</p><p>Mais si je ne devais qu'en retenir qu'un : <strong id=\"cocktail\"></strong></p>"
document.body.innerHTML = cocktailElement;
let elementCocktail = document.getElementById("cocktail");
elementCocktail.textContent = "Long Island Iced Tea";


//EXERCICE8
let html = '<table border="2">';
let rows = 5;
let columns = 3;
for (var i =0; i < rows; i++){
  html += "<tr>"
  for(var j = 0 ; j < columns ; j++){
    html += '<td> Cellule : ' + i +'_'+ j + '</td> \n'
  }
  html += "<tr>"
}
document.body.innerHTML = html;

//EXERCICE9
html = '<table border="2">';
rows = parseInt(prompt("Insert number of rows"));
columns = parseInt(prompt("Insert number of columns"));

for (var i = 0; i < rows; i++) {
  html += "<tr>";
  for (var j = 0; j < columns; j++) {
    html += '<td> Cellule : ' + i + '_' + j + '</td>'; // Removed newline character
  }
  html += "</tr>";
}

document.body.innerHTML = html;

//EXERCICE10

html = '<ul>';
for (var i = 0; i < 10; i++) {

    html += '<li> '+ Math.floor(Math.random() * 100)+ '</li>'; 
  }
  html += '</ul>';

document.body.innerHTML = html;


//EXERCICE11

r = Math.floor(Math.random() * 256); 
g = Math.floor(Math.random() * 256); 
b = Math.floor(Math.random() * 256); 
document.body.style.background = 'rgb(' +r+ ',' +g+',' +b+')';


//EXERCICE12

for (var i = 0; i < 12; i++) { 
  html='<img src="https://picsum.photos/id/';
  identifiant = Math.floor(Math.random()*100); 
  resolution = Math.floor(Math.random()*1000); 
  html+=identifiant+'/'+resolution+'/'+resolution+'">';
  document.body.innerHTML += html;
}

