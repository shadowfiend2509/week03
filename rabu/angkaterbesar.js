function pasanganTerbesar(num){
    var string=num.toString()
    var hasilcek = ''
    for( var i = 0 ; i<string.length-1 ; i++){
        hasilcek+=string[i]+string[i+1]
        hasilcek+=','
    }
    var hasilarr = hasilcek.split(',')
    hasilarr.sort(function(a,b){
        return a<b
    })

    
    //perbaikan outpun menjadi Number
    return Number(hasilarr[0])
}



console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(91000233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
console.log(pasanganTerbesar(142345520))