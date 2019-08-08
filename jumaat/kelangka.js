function mengelompokkanAngka(arr) {

    //nb :const filter => seperti nama variabel
    //    arr.filter =>untuk melakukan pengecekan di array
    //    arr => arr %2 ===0 fungsi dimana melakukan pengecekan arr mod2 sama dengan 0 maka di tampilkan di const filtergenap && logic jika tidak sama maka array tersebut tidak di masukan didalam const filtergenap

    const filtergenap = arr.filter(arr => arr % 2 ===0 && arr %3 !== 0)

    const filterganjil = arr.filter(arr => arr %arr ===0 && arr%3!==0 && arr%2 !==0)

    const filterkel3 = arr.filter(arr => arr %3===0 )

    var hasilakhir = []
    hasilakhir.push(filtergenap,filterganjil,filterkel3)
    return hasilakhir

  }



  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]