function dataHandling (input) {
    dataHandling[0]= ' Nomor ID : '+ input[0]
    dataHandling[1]= ' Nama Lengkap : '+input[1]
    dataHandling[2]= ' Kota : '+input[2]
    dataHandling[3]= ' TTL : '+input[3]
    dataHandling[4]= ' Hobbi :'+input[4]

    return hasil = dataHandling[0] + '\n' + dataHandling[1] + '\n' + dataHandling[2] + '\n' + dataHandling[3] + '\n' + dataHandling[4] +'\n'
}

var input = ['0001','Roman Alamsyah','Bandar Lampung','21/05/1989','Membaca']
console.log(dataHandling(input))
var input = ['0002','Dika Sembiring','Medan','10/10/1992','Bermain Gitar']
console.log(dataHandling(input))
var input = ['0003','Winona','indonesia','25/12/1965','Memasak']
console.log(dataHandling(input))
var input = ['0004','Bintang Senjaya','Martapura','6/4/1970','Berkebun']
console.log(dataHandling(input))
var input = ['0005','Eric Sudhartio','Palembang','25/09/1994','Coding']
console.log(dataHandling(input))