const products = [
    {
      id: 67,
      name: 'Firestrata',
      price: 26,
      brewery: 'Hop Hooligans',
    },
    {
      id: 212,
      name: 'Punch the Clock',
      price: 21,
      brewery: 'Bereta',
    },
    {
      id: 111,
      name: 'The Guardian',
      price: 21,
      brewery: 'Noah',
    },
    {
      id: 345,
      name: 'Pudge',
      price: 30,
      brewery: 'Hop Hooligans',
    },
  ];

  
/* 
1. Sa se afiseze produsul cu numele “The Guardian”
*/

const guardian = products.find(product => product.name === 'The Guardian');
console.log(guardian);


/*
2. Folosind filter, returnati un array
care contine doar produsele de la “Hop Hooligans”
*/

const hopHooligansProducts = products.filter(product => product.brewery === "Hop Hooligans");
console.log(hopHooligansProducts);


/*
3.Folosind filter, returnati un array
care sa nu contina produsul cu id-ul 111
*/

const productsWithoutId111 = products.filter(product => product.id !== 111);
console.log(productsWithoutId111); 


/*
4.Calculati suma prețurilor din array
*/

const sumaPreturi = products.reduce((sum, product) => sum + product.price, 0);
console.log(sumaPreturi);

/*
5.Fara sa modificati array-ul initial, returnati
un array nou, în care fiecare element
va avea o proprietate nouă numita “isFavorite”,
cu valoarea false. 
TIP: map + Object.assign/spread syntax
*/

const productsWithIsFavorite = products.map(product => Object.assign({}, product, {isFavorite: false}));
console.log(productsWithIsFavorite);

/*
probleme extra:
1. Calculati suma fiecărui element pozitiv dintr-un array. Dacă nu exista nici
un număr pozitiv sau array-ul este gol, suma va fi 0. TIP: Filter + reduce
*/

const input = [1, - 4, 12, 0, -3, 29, -150];
const sumaPozitiva = input
.filter(n => n > 0)
.reduce((suma, n) => suma + n, 0);
console.log(sumaPozitiva)


/*
2. Fie urmatoarea lista de studenti
*/

const students = [
  {name: 'Ionut', scores: [90, 85, 92]},
  {name: 'Gigel', scores: [75, 80, 85]},
  {name: 'Marius', scores: [90, 95, 85]},
  {name: 'David', scores: [100, 100, 100]},
];

const studentsAverage = students.map(student => {
  const notesSum = student.scores.reduce((sum, score) => sum + score, 0);
  return {
    name: student.name,
    average: notesSum / student.scores.length
  }
})

const bestPerforming = studentsAverage.filter(student => student.average > 90);
console.log(bestPerforming);


/*
3. Implementati funcția myFilter folosind reduce de la array.
Funcția ar trebui sa se comporte ca și metoda filter de la array.
*/

