function groupAnimals(animals) {
    var sort = animals.sort()
    var kandangbesar = []
    var hurufdicari = sort[0][0]
    
    var kandangkecil = []
    for(var i=0;i<sort.length;i++) {
      if(sort[i][0]===hurufdicari){
        kandangkecil.push(sort[i])
      }else if(sort[i][0] !== hurufdicari){
        kandangbesar.push(kandangkecil)
        kandangkecil = []
        kandangkecil.push(sort[i])
        hurufdicari = sort[i][0]
      }
    }
    kandangbesar.push(kandangkecil)
    return kandangbesar
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
