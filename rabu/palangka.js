//Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.




function angkaPalindrome(num) {

    num++  //bila number awal palindrome() bernilai true maka ditampilkan nilai yang palindrome() bernilai true selanjutnya dengan cara num ditambah 1 kemudian di cek lagi perulangannya sampai ketemu palindrome() bernilai true
    while(palindrome(num.toString())==false) {  
        num++   //pengecekan ketika function palindrome() bernilai false ditambah 1 sehingga palindrome bernilai true
    }
    return num //tampilkan bila palindrome bernilai true
}

function palindrome(kata){  //sama dengan palindrome huruf
    var kata1 = ''
    for(var i=kata.length-1 ; i >=0 ; i-- ){
        kata1+=kata[i]
    }
    if ( kata1 === kata ){
        return hasil=true
    }else {
        return hasil=false
    }
}

  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1001)); // 1001



  //11,22,33,44,55,66,77,88,99,
  //101,111,121,131,141,151,161,171,181,191,202,212,222,232,242,252,262,272,-----,999,
  //1001,1111,1221,1331,1441