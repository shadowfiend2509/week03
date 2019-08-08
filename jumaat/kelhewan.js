// function groupAnimals(animals) {
//     var sort = animals.sort()
//     var hasil = []
//     sort.forEach(sort => {
//         hasil.push(sort)
//     });
//     return hasil
//   }
  
//   // TEST CASES
//   console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
//   // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
//   console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
//   // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]


var arr=[1,2,3,4,5]
var hasil = []
var newarr = arr.forEach(arr => {
    hasil.push(arr*2)
});

console.log(arr)
console.log(newarr)
console.log(hasil)