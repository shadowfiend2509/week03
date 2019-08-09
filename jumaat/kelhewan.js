


function groupAnimals(animals) {
    var sort = animals.sort()
    var hasila = []
    var hasilc = []
    var hasilk = []
    var hasilu = []
  var array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

  var hasil=[]

  for(var i=0;i<sort.length;i++){
    var arr= []
    for(var x=0;x<array.length;x++){
      if(sort[i][0]===array[x]){
        arr.push(sort[i])
      }
    }
    hasil.push(arr)
  }
// console.log(sort[4][0])
return hasil



    // for(var i=0;i<sort.length;i++){
    //   if(sort[i][0]==='a'){
    //     hasila.push(sort[i])
    //   }else if(sort[i][0]==='c'){
    //     hasilc.push(sort[i])
    //   }else if(sort[i][0]==='k'){
    //     hasilk.push(sort[i])
    //   }else if(sort[i][0]==='u'){
    //     hasilu.push(sort[i])
    //   }
    // }
    // var hasil = []
    // hasil.push(hasila,hasilc,hasilk,hasilu)
    // return hasil
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
