//objek angkot
// function Angkot(sopir, trayek, penumpang, kas){
//     this.sopir=sopir;
//     this.trayek=trayek;
//     this.penumpang=penumpang;
//     this.kas=kas;

//     this.penumpangNaik = function(namaPenumpang){
//         this.penumpang.push(namaPenumpang);
//         return this.penumpang;
//     }

//     this.penumpangTurun = function(namaPenumpang, bayar){
//         if (this.penumpang.length === 0) {
//             alert('ankgot Masih kosong!');
//             return false;
//         }

//         for (let i = 0; i < this.penumpang.length; i++) {
//             if (this.penumpang[i]== namaPenumpang) {
//                 this.penumpang[i] = undefined;
//                 this.kas += bayar;
//                 return this.penumpang;
//             }
//         }
//     }
// }
// var angkot1 = new Angkot('Supri',['Rawasalak','Cibiru'],[],0);
// var angkot2 = new Angkot('TomJerry',['Rawasalaki','Cibeureum'],[],0);

const judul = document.querySelector('h1');
const tblGanti = document.querySelector('.gantiWarna');

tblGanti.addEventListener('click', function(){
    judul.classList.toggle('biru-muda'); 
});


const tAcakWarna = document.createElement('Button');
const textTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(textTombol);
tAcakWarna.setAttribute('type','button');
tblGanti.after(tAcakWarna);

tAcakWarna.addEventListener('click',function () {
    const r=Math.round(Math.random()*255+1);
    const g=Math.round(Math.random()*255+1);
    const b=Math.round(Math.random()*255+1);
    judul.style.backgroundColor='rgb('+ r +','+ g +','+ b +')';
})

const sMerah=document.querySelector('input[name=sMerah');
const sHijau=document.querySelector('input[name=sHijau');
const sBiru=document.querySelector('input[name=sBiru');


sMerah.addEventListener('input',function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    judul.style.backgroundColor='rgb('+ r +','+ g +','+ b +')';
});

sHijau.addEventListener('input',function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    judul.style.backgroundColor='rgb('+ r +','+ g +','+ b +')';
});

sBiru.addEventListener('input',function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    judul.style.backgroundColor='rgb('+ r +','+ g +','+ b +')';
});

const pengukur = document.querySelector('.pengukur');
document.body.addEventListener('mousemove', function(event){
    //posisi mousemove
    // event.clientx
    // event.clienty

    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    
    pengukur.style.backgroundColor='rgb('+ xPos +','+ yPos +',100)';
})