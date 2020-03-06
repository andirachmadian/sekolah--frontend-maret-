class Orang {
    nama = "";
    umur = "";
    job = "";

    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }
    sapa() {
        console.log(`Halo saya ${this.nama}`)
    }
}

const andi = new Orang('Andi', 28);
const heru = new Orang('Heru', 29);
const randy = new Orang('Randy', 22);
const yusuf = new Orang('Yusuf', 22);
const haris = new Orang('Haris', 25);

let sf = [andi, yusuf, randy, yusuf, haris];
console.log(sf)

// let filterUmur = sf.filter(function(person){
//     return person.umur < 27;
// })
// console.log(filterUmur)

let filterNama = sf.filter((person)=>{
    return person.nama 
})


// andi.nama = 'andi';
// andi.umur = '28';
// andi.job = 'it-support';

// andi.sapa();

// tugas objek oriented mobil
// class Mobil {
//     merk = "";
//     transmisi = "";
//     harga;

//     constructor(merk){
//         console.log(`harga mobil ${merk} sekitar ${this.harga}`)
//         if (this.harga === undefined){
//             this.harga = "Harga Belum Ditentukan"
//         }
//     }


//     cekharga () {
//         console.log(`Harga mobil ${this.merk} sekitar ${this.harga}`)        
//     }

//     cektransmisi(){
//         console.log(`Transmisi mobil ${this.merk} adalah ${this.transmisi}`)
//     }
// }

// const honda = new Mobil();
// const toyota = new Mobil();
// const bmw = new Mobil();

// honda.merk = "brio";
// honda.harga = 50000000;
// honda.transmisi = "Automatic";

// toyota.merk = "camry";
// toyota.harga = 100000000000000;
// toyota.transmisi = "manual";

// bmw.merk = "Wagon E3"
// bmw.transmisi= "manual"


// honda.cekharga();
// honda.cektransmisi();
// console.log(`================================`)
// toyota.cekharga();
// toyota.cektransmisi();

// const cek = new Mobil('bmw')
// console.log(cek)
