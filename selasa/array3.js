
// console.log(output)

function dataHandling2 (input) {

    // nama
   input.splice(1,1,input[1]+' Elsharawy')


   //kota
   input.splice(2,1,'Provinsi '+input[2])


   //menghapus Hobi ganti jl dan sekolah
   input.pop()
   input.push('Pria','SMA Internasional Metro')
   
   console.log(input)



    var dateee= input[3]
    var arrdate = dateee.split('/')
    var tanggal = [arrdate[0]]
    var bulan = arrdate[1]
    var tahun = [arrdate[2]]
    var namabulan = ''

   // tampilan MEI

    switch(bulan){
        case '01': namabulan= ' Januari ' ;break;
        case '02': namabulan= ' Febuari ' ;break;
        case '03': namabulan= ' Maret' ;break;
        case '04': namabulan= ' April' ;break;
        case '05': namabulan= ' Mei ' ;break;
        case '06': namabulan= ' Juni ' ;break;
        case '07': namabulan= ' July ' ;break;
        case '08': namabulan= ' Agustus ' ;break;
        case '09': namabulan= ' September ' ;break;
        case '10': namabulan= ' Oktober ' ;break;
        case '11': namabulan= ' November ' ;break;
        case '12': namabulan= ' Desember ' ;break;
    }

    //pengurutan discending

    console.log(namabulan)
    var sort = arrdate.sort(function(){
        return tahun
    })
    console.log(sort)

    //tanggal dengan pergantian dari '/' menjadi '-'

    var update=dateee.split('/')
    var joinupdate = update.join('-')
    console.log(joinupdate)

    //nama
    var backname = input[1]
    var splitbackname=backname.split(' ')
    splitbackname.pop()
    var hasilbackname=splitbackname.join(' ')
    console.log(hasilbackname)
    

}

var input = ["0001","Roman Alamsyah","Bandar Lampung","21/05/1989","Membaca"];
dataHandling2(input);

// var input = ['0005','Eric Sudhartio','Sumatera Selatan','25/09/1994','Coding']
// dataHandling2(input)