var tanya= true;
while (tanya) {
    
var p = prompt('Pilih : gajah, orang, atau semut');

var comp = Math.random();
if (comp < 0.34) {
    comp='gajah';
}if (comp >= 0.34 && comp < 0.67) {
    comp='orang';
} else {
    comp='semut';
}

var hasil = '';

//Menentukan rules

if (p == comp) {
    hasil = 'SERI';
}else if (p == 'gajah') {
    hasil = (comp == 'orang') ? 'Menang' : 'Kalah';
} else if (p == 'orang') {
    hasil = (comp == 'gajah') ? 'Kalah' : 'Menang';
} else if (p == 'semut') {
    hasil = (comp == 'orang') ? 'Kalah' : 'Menang';
}else{
    hasil='Memasukan pilihan yang salah!!!';
}
alert('Kamu memilih : ' + p + ' dan Komputer memilih '+ comp + '\nMaka hasilnya : kamu ' + hasil);
 tanya = confirm('lagi ?')
}