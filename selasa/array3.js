
// console.log(output)

function dataHandling2 (input) {

    // nama
   var nama = input[1]
   input.splice(1,1,nama+' Elsharawy')


   //kota
   var kota = input[2]
   input.splice(2,1,'Provinsi '+kota)


   //menghapus Hobi ganti jl dan sekolah
   input.pop()
   input.push('Pria','SMA Internasional Metro')
   console.log(input)

   // tampilan MEI


    // var bulan=input[3]
    // var splitbulan=bulan.split('')
    // var ambilbulan=splitbulan.slice(3,5)
    // var joinbulan=ambilbulan.join('')
    // var hasilbulan=joinbulan
    // switch(hasilbulan){
    //     case 05: {hasilbulan= ' Mei ' ;break;}
    // }
    // console.log(hasilbulan)
    // console.log(hasilbulan)

//    var bulan = input[3]
//    var splitbulan=bulan.split ('')
//    var slicebulan=splitbulan.slice(3,5)
//    var joinbulan = slicebulan.join('')
//    if(joinbulan == 01) {
//        joinbulan='Januari'
//    }else if(joinbulan == 02 ){
//        joinbulan='Febuari'
//    }else if(joinbulan==03){
//        joinbulan='Maret'
//    }else if(joinbulan==04){
//        joinbulan='April'
//    }else if(joinbulan==05){
//        joinbulan='Mei'
//    }else if(joinbulan==06){
//        joinbulan='Juni'
//    }else if(joinbulan==07){
//        joinbulan='July'
//    }else if(joinbulan==08){
//        joinbulan='Agustus'
//    }else if(joinbulan==09){
//        joinbulan='September'
//    }else if(joinbulan==10){
//        joinbulan='Oktober'
//    }else if(joinbulan==11){
//        joinbulan='November'
//    }else if(joinbulan==12){
//        joinbulan='Desember'
//    }else{
//        joinbulan='invalid'
//    }
//    console.log(joinbulan)

   //sort tanggal 

//    var date = input[3].split('')
//    date.splice(2,1)
//    date.splice(4,1)
//    var tanggal =date[0].concat(date[1])
//    var bulan =date[2].concat(date[3])
//    var tahunawal =date.slice(4)
//    var tahunstring = tahunawal.join('')
//    const objtanggal = new String(tanggal)
//    const objbulan = new String(bulan)
//    const objtahun = new String(tahunstring)
//    console.log(objtanggal,objbulan,objtahun)
//    console.log(typeof(objbulan))


    //tampilan tanggal
    var dateee=input[3]
    var split = dateee.split('')
    split.splice(2,1,'-')
    split.splice(5,1,'-')
    var hasildateee = split.join('')
    console.log(hasildateee)


    //nama
    console.log(nama)


//    var arr =''
//    arr=input.slice(1,2)
// //    var splittanggal = tanggal.split('')
// //    splittanggal.splice(2,1,'-')
// //    splittanggal.splice(5,1,'-')
//    arr.push('Elsharawy')
//    var joinn=arr.join(' ')
//    const newjoin = new String(joinn)
//    console.log(newjoin)
}

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);