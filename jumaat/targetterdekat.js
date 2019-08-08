//Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.








function targetTerdekat(arr) {
    
    const something = arr.includes('x','o')
    var hasilarr = []
    var hasilsomething = []
    if(something==true){
        for(var i=0;i<arr.length;i++){
            if(arr[i]==='x'/*||arr[i]==='o'*/){
                hasilarr.push(arr[i])
                hasilsomething.push(i)
                break
            }
        }
        for(var y=0;y<arr.length;y++){
                if(arr[y]==='o'){
                    hasilarr.push(arr[y])
                    hasilsomething.push(y)
                    // break
                }
            }
        }else{
        hasilsomething = 0
        }
    var total = 0
    if(hasilsomething[0]>hasilsomething[1]){
        total = hasilsomething[0]-hasilsomething[1]
    }else if(hasilsomething[0]<hasilsomething[1]){
        total = hasilsomething[1]-hasilsomething[0]
    }else{
        total = 0
    }
    // var revshasilsomething = hasilsomething.reverse()
    return total
    // console.log(hasilarr)
    // return hasilsomething

}

  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2



