function palindrome(kata){
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

console.log(palindrome('katak'))
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
console.log(palindrome('100001'))