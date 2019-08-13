function tentukanDeretGeometri(arr) {

    var hasil=0
    for(var b=0;b<tentukanDeretAritmatika(arr).length;b++) {
        hasil += tentukanDeretAritmatika(arr)[b]/tentukanDeretAritmatika(arr).length
    }
    for(var i=0;i<tentukanDeretAritmatika(arr).length;i++){
        if(tentukanDeretAritmatika(arr)[i]!==hasil) {
            return false
        }
    }
    return true
  }

  function tentukanDeretAritmatika(arr) {
    var hasilbagi = []
    for(var i=arr.length-1 ; i>0 ; i--) {
        hasilbagi.push(arr[i]/arr[i-1])
    }
    return hasilbagi
  }

//disederhanakan

  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); //flse
  console.log(tentukanDeretGeometri([1, 5, 25, 125])); //true
