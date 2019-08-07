//Diberikan sebuah function perkalianUnik(arr) yang menerima satu parameter berupa array yang berisikan angka. Function akan me-return array baru yang mengandung angka yang setiap nilainya merupakan hasil kali angka lain yang bukan angka itu sendiri. Contoh, jika arr adalah [1, 2, 3, 4, 5], maka function akan mereturn [120, 60, 40, 30, 24], karena 120 adalah 2 * 3 * 4 * 5, 60 adalah 1 * 3 * 4 * 5, 40 adalah 1 * 2 * 4 * 5, dan seterusnya.



//step by step agar saya lebih mengerti


function perkalianUnik(arr) {
    var array =[]   //memasukan array baru
    
    for(var i=0;i<arr.length;i++){ //perulangan i

    var arr1 = 1    //angka 1 tiap perulangan j selesai 

        for( var j =0;j<arr.length;j++){ //perulangan j     || i=0 & j=0 sama maka lewati proses (if) next i=0 j=1 tidak sama makan masuk ke proses (if) dimana hasil arr1 didapat dari arr1 ialah 1 dikalikan dengan array(j) yaitu indeks ke 1 ialah 4 maka 1*4= 4.. simpan arr1 dengan angka 4.. kemudian tahap selanjutnya i=0 j=2 tidak sama maka masuk lagi tahap (if) . hsil arr1 = 4 dikali dengan indeks arr[j]= indeks ke 2 ialah 6 . 4x6= 24 .. tahap selanjutnya i=0 j=3 , karena 3 lebih besar dari panjang dari arr yang hanya sampai 2 makan skip ke tahap berikutnya..

            if( i !== j ){
                arr1 *= arr[j]
            }

        }

        array.push(arr1)  //ditahap ini jumlah arr1 akan di push ke dalam variabel array yang siap menampung array.. kemudian siap kembali ke perulangan i=1 dst sampai i>arr.length maka perulangan stop dan akan di return

    }

    return array    //menampilkan hasil

  }
  
  // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
  console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
  console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
  console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]