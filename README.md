# Exercices types and boolean

Ces exercices devront tous être pushés sur un repository accessible depuis github.  
Ce repository devra se nommer `exo-types-boolean`
Vous devrez fournir ce lien dans le formulaire de rendus d'exercices suivant: https://docs.google.com/forms/d/e/1FAIpQLSc6C1su3FLwG1ESO4PfhWLjnOUe8dngO7Ddvx3Md9s2X55M5w/viewform

Essayez d'aller le plus loin possible.

## Exercice 1

Lire le cours `05-js-types-and-variables` jusqu'a la fin du chapitre `Boolean type`.  
Pratiquer les exemples.

## boolean.js

Ecrire un script `boolean.js` qui affichera le résultat des expressions suivantes qui ont été assignées à des variables.  
Evaluer d'abord mentalement le résultat puis vérifier cela avec votre script.

```js
let res1 = (true && false) || (false && true);
let res2 = 10 > 11 && 11 > 10;
let res3 = (true || false) && true;
let res4 = (!true && !false) || (!false && !false);
let res5 = "Hello" === "Hello" && "World" == "Word";
let res6 = (!(20 >= 20) && 7 === 7) || true;
let res7 = "1" === 1 && "2" == 2 && "3" === 3;
let res8 = !res7;
let res9 = !res8;
let res10 =
  (res1 && res2) || (res3 && res4) || (res5 && res6) || (res7 && res8 && res9);
```

Vous devrez afficher les résultats sur la console avec un `console.log`, par exemple:

```js
console.log(`res1 = ${res1}`);
