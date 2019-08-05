
// console.log(output)

function dataHandling2 (input) {
   var nama = input
   var joinnama = nama.join(' ')
   var splitnama =joinnama.split(' ')
   splitnama.splice(3,0,'Elsharawy ','Provinsi ')
   splitnama.splice(8,2,'Pria ','SMA Internasional Metro')
   var final = splitnama.join (' ')
   var test=final.split()
   console.log(test)

   var bulan = input[3]
   var splitbulan=bulan.split ('')
   var slicebulan=splitbulan.slice(3,5)
   var joinbulan = slicebulan.join('')
   if(joinbulan == 01) {
       joinbulan='Januari'
   }else if(joinbulan == 02 ){
       joinbulan='Febuari'
   }else if(joinbulan==03){
       joinbulan='Maret'
   }else if(joinbulan==04){
       joinbulan='April'
   }else if(joinbulan==05){
       joinbulan='Mei'
   }else if(joinbulan==06){
       joinbulan='Juni'
   }else if(joinbulan==07){
       joinbulan='July'
   }else if(joinbulan==08){
       joinbulan='Agustus'
   }else if(joinbulan==09){
       joinbulan='September'
   }else if(joinbulan==10){
       joinbulan='Oktober'
   }else if(joinbulan==11){
       joinbulan='November'
   }else if(joinbulan==12){
       joinbulan='Desember'
   }else{
       joinbulan='invalid'
   }
   console.log(joinbulan)
   var arr =''
   arr=input.slice(1,2)
//    var splittanggal = tanggal.split('')
//    splittanggal.splice(2,1,'-')
//    splittanggal.splice(5,1,'-')
   arr.push('Elsharawy')
   var joinn=arr.join(' ')
   var joinnn=joinn.split(' ')
   console.log(joinn)
   console.log(typeof(joinn))
   console.log(joinnn)
   console.log(typeof(joinnn))
}

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);