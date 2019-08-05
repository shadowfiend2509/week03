//exercises 2 
function balikString(kata) {
    var hasil =''
    var a = kata.length
    var b = a[0].length
    for (var i=b-1;i>0;i++){
        hasil += b[i]
    }
    return hasil
}

console.log(balikString('Hello world!'))
