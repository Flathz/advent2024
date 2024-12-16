const fs = require('fs');

// Lire le fichier d'entrée
const input = fs.readFileSync('day1txt.txt', 'utf8');

// Initialiser les listes gauche et droite
const leftList = [];
const rightList = [];

// Remplir les listes à partir du fichier
input.split('\n').forEach(line => {
  if (line.trim() !== '') { // Ignorer les lignes vides
    const [left, right] = line.trim().split(/\s+/).map(Number); // Convertir en nombres
    leftList.push(left);
    rightList.push(right);
  }
});

// Trier les listes
leftList.sort();
rightList.sort();

console.log("left:", leftList);
console.log("right:", rightList);

// Calculer la somme des distances absolues
let sum = 0;
for (let i = 0; i < leftList.length; i++) {
  sum += Math.abs(leftList[i] - rightList[i]);
}

console.log("Sum of absolute differences:", sum);
