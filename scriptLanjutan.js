//Cara membuat objek pada JS
//1. Objek literal
// let mahasiswa = {
//     nama: 'Agung',
//     energy:10,
//     makan:function(porsi){
//         this.energy = this.energy + porsi;
//         console.log(`halo ${this.nama}, Selamat Makan`);
//     }
// }



//function declaration
// const methodMahasiswa2={

// }

// const methodMahasiswa={
//     makan : function(porsi){
//         this.energy += porsi;
//         console.log(`halo ${this.nama}, Selamat Makan`);
//     },
//     main : function(lama){
//         this.energy -= lama;
//         console.log(`Halo ${this.nama}, Kamu main selama ${lama} jam`);
//     },
//     tidur : function(lamatidur){
//         this.energy += lamatidur*2;
//         console.log(`Halo ${this.nama}, Kamu tidur selama ${lamatidur} jam`);
//     }
// }

// function Mahasiswa(nama,energy) {
//     let mahasiswa = Object.create(methodMahasiswa, methodMahasiswa2);
//     mahasiswa.nama=nama;
//     mahasiswa.energy=energy;
//     // mahasiswa.makan = methodMahasiswa.makan;
//     // mahasiswa.main = methodMahasiswa.main;
//     // mahasiswa.tidur = methodMahasiswa.tidur;
    
// return mahasiswa;
// }
// let agung = Mahasiswa('Agung', 10);
// let kuda = Mahasiswa('Kuda', 15);



//function constructor
// function Mahasiswa(nama,energy) {
//     this.nama=nama;
//     this.energy=energy;

//     this.makan = function(porsi){
//         this.energy += porsi;
//         console.log(`halo ${this.nama}, Selamat Makan`);
//     }

//     this.main = function(lama){
//         this.energy -= lama;
//         console.log(`Halo ${this.nama}, Kamu main selama ${lama} jam`);
//     }
// }
// let agung = new Mahasiswa('Agung', 10);



                //declaration
// function Mahasiswa(nama,energy) {
//                 //let mahasiswa = Object.create(methodMahasiswa, methodMahasiswa2);
//                 // let this={}
//                 // let this=Object.create(Mahasiswa.prototype);

//     this.nama=nama;
//     this.energy=energy;
//                 // mahasiswa.makan = methodMahasiswa.makan;
//                 // mahasiswa.main = methodMahasiswa.main;
//                 // mahasiswa.tidur = methodMahasiswa.tidur;
                
//                 // return mahasiswa;
//     Mahasiswa.prototype.makan = function (porsi){
//         this.energy += porsi;
//         return `Halo ${this.nama}, Kamu makan sebanyak ${porsi} porsi`;
//     }
//     Mahasiswa.prototype.main = function (main){
//         this.energy -= main;
//         return `Halo ${this.nama}, Kamu main selama ${main} jam`;
//     }
//     Mahasiswa.prototype.tidur = function (lamatidur){
//         this.energy += lamatidur*2;
//         return `Halo ${this.nama}, Kamu tidur selama ${lamatidur} jam`;
//     }
// }
// let agung=new Mahasiswa('agung', 20);



//versi kelas
class Mahasiswa{
    constructor(nama,energy){
        this.nama = nama;
        this.energy = energy;
    }
    Makan (porsi){
        this.energy += porsi;
        return `Halo ${this.nama}, Kamu makan sebanyak ${porsi} porsi`;
    }
    main (main){
        this.energy -= main;
        return `Halo ${this.nama}, Kamu main selama ${main} jam`;
    }
    tidur (lamatidur){
        this.energy += lamatidur*2;
        return `Halo ${this.nama}, Kamu tidur selama ${lamatidur} jam`;
    }
}
let agung = new Mahasiswa('agung',10);