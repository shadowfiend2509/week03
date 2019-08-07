function angkaPalindrome(num) {
    var palindrome=false
    var string=num.toString()
    var hasil = ''
    for(var i=string.length-1 ; i>=0 ; i--){
        hasil+=string[i]
        if(hasil===string){
            palindrome=true
            return hasil = num+1
        }else if(hasil<string){
            palindrome=true
            return hasil = num+1
        }
    }
  }
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001