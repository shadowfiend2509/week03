// exercises 2 

var input=['Hello world!','im ericsudhartio']
console.log(balikString(input))
function balikString(input) {
    var kata = input[0]
    var hasil = ''
    for(var i=kata.length-1;i>=0;i--){
        hasil += kata[i]
    }
    return hasil
}

