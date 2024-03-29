//Diberikan sebuah function tentukanDeretAritmatika(arr) yang menerima satu parameter berupa array yang terdiri dari angka. Function tersebut akan mengembalikan true jika array dari parameter tersebut merupakan deret aritmatika. Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten. Contoh, [2, 4, 6, 8] adalah deret aritmatika dengan pertambahan nilai sebesar 2, dan [2, 4, 6, 9] bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten.

function tentukanDeretAritmatika(angka) {
    var selisih = []  //didapat dari pengurangan tiap2 array
    for( var i=angka.length-1 ;i>0;i--) {
        selisih.push(angka[i]-angka[i-1])
    }
    //coba di persingkat
    for( var x=0;x<selisih.length;x++){
      if(selisih[x]!==cariMean(selisih)){
          return false
      }
  }
  return true
}
function cariMean(arr) {  // hasil rata2 dari array 
  var hasil = 0
  for(var i=0;i<arr.length;i++){
      hasil += Math.round(arr[i])
  }
  return Math.round(hasil/arr.length)
}




  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false