//Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.






//   ['o', '', '', '', 'x'] //4

//   ['x', '', 'o'] //2

//   cari o ==> 
//   kalo bukan x => langkah+1 lanjut
//   kalo x langkah+1 STOP




function targetTerdekat(arr) {
    var hasilo = []
    var hasil = []
    var hasilx = []

    for(var i = 0 ; i<arr.length ; i++ ){
        if(arr[i]==='o'){
            hasilo.push(i)
        }else if(arr[i]==='x'){
            hasilx.push(i) 
        }
    }

    if(hasilo<hasilx[0]){
        hasil.push(hasilx[0]-hasilo)
    }else if(hasilo>hasilx[0]){
        for( var a=hasilx.length-1;a>=0;a--){
            hasil.push(hasilo-hasilx[a])
            break
        }
    }else{
        hasil.push(0)
    }
    return hasil

}    

  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

  

