// Tugas 1
function changeWord(selectedText,changeWord,text) {
    return text.replace(selectedText,changeWord)
    
}
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu"
const kalimat1 = "Andini sangat mencintai kamu selamanya"

console.log(changeWord('mencintai','membenci',kalimat1))
console.log(changeWord('bromo','semeru',kalimat2))

// Tugas 2
// parameter tidak ada tutup kurung dikarenakan cuma satu parameter
const checkTypeNumber = givenNumber =>  {
    // kondisi jika parameter kosong atau null
   if (givenNumber != null) {
        //kondisi tipe data parameter 
        if (typeof(givenNumber) == 'number') {
            return givenNumber % 2 == 0 ? 'GENAP' : 'NEGATIF'
        } else {
            return "Error : Invalid data type"
        }
   }else{
       return "Error : Bro where is the parameter ? "
   }
}
console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());

// Tugas 3
function checkEmail(email) {
    // let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // let regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // let regex =   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regex =  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    // let regex =  /^([a-zA-Z0-9_\.\-])*\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // !!x || x === ''
    if (typeof(email) != 'undefined') {
        if (typeof(email) == 'string') {
            if (email.match(regex)) {
                return 'VALID'
            }else{
                let regex2 = new RegExp('[a-z0-9]+@binar');
                if (regex2.test(email)) {
                    return "INVALID"
                }else{
                    return "Error : Alamat email tidak sesuai"
                }
            }
        }else{
                return "Error : Invalid data type"
        }
    }else{
        return "Error : Bro where is the parameter ? "
    }
 
}
console.log(checkEmail('apranata@binar.co.id'));
console.log(checkEmail('apranata@binar.com'));
console.log(checkEmail('apranata@binar'));
console.log(checkEmail('apranata'));
console.log(checkTypeNumber(checkEmail(3322)));
console.log(checkEmail());

// tugas 4
function isValidPassword(email) {
   if (typeof(email) != undefined) {
        if (typeof(email) === 'string') {
            if (email.length > 8) {
                // upperCaseLetters = /[A-Z]/g;
                let upperCase = new RegExp('[A-Z]')
                let upperCase2 = new RegExp('[0-9]')
                if (upperCase.test(email)) {
                    if (upperCase2.test(email) ) {
                        return true
                    }
                }else{
                    return false
                }
            }else{
              
                return false
            }
        }else{
            return "Error : Invalid data type"
        }
   }else{
       return "Error : Bro where is the parameter ?"
   }
}

console.log(isValidPassword('Meong2021'));
console.log(isValidPassword('meong2021'));
console.log(isValidPassword('@Aong11241251'));
console.log(isValidPassword('Meong2'));
console.log(isValidPassword(0));
console.log(isValidPassword());
//  Tugas 5
function getSplitName(personName) {
    if (typeof(personName) == 'string') {
        var data = personName.split(" ");
        if (data.length == 3) {
           
          data = [{
              firstName : data[0],
              middleName : data[1],
              lastName : data[2]
          }]
          return data
            
        }else if (data.length == 1){
            data = [{
                firstName : data[0],
                middleName : null,
                lastName : null
            }]
            return data
        }else if (data.length == 2){
            data = [{
                firstName : data[0],
                middleName : null,
                lastName : data[1] 
            }]
            return data
        }else{
            return "Error : this function is only 3 characters"
        }
    }else{
        return "Errror : Invalid data type"
    }
}
console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));


// Tugas 6
function getAngkatTerbesarKedua(personName) {
    if (personName != null) {
        if (personName != 0) {
            // Ini fungsi buat mengurutkan nilai dari yang terbesar ke yang terkecil.
            dataAngka.sort(function(a,b){
                return b-a
            })
           return dataAngka[1]
        }else{
            return 'Error : Data tidak boleh 0';
        }
    }else{
        return 'Error : Bro where is the parameter ?'; 
    }
}

const dataAngka = [9,4,7,7,4,3,2,2,8];
console.log(getAngkatTerbesarKedua(dataAngka));
console.log(getAngkatTerbesarKedua(0));
console.log(getAngkatTerbesarKedua());

// Tugas 7
const dataPenjualanPakAldi = [
    {
      namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
      hargaSatuan: 760000,
      kategori : "Sepatu Sport",
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Black Brown High',
      hargaSatuan: 960000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 37,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Maroon High ',
      kategori : "Sepatu Sneaker",
      hargaSatuan: 360000,
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy',
      hargaSatuan: 120000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 90,
    }
]

// const hitungTotalPenjualan = (dataPenjualan) => dataPenjualan
function hitungTotalPenjualan(dataPenjualan) {
    let result = 0
    for (let i = 0; i < dataPenjualan.length; i++) {
        result += dataPenjualan[i].totalTerjual
    }
    return result

}

console.log(hitungTotalPenjualan(dataPenjualanPakAldi));

// Tugas 8
const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
];

function getInfoPenjualan(dataPenjualan) {
    // menghitung total Keuntungan
    let totalBeli = []
    let keuntungan = []
    let totalKeuntungan = []
    let modal = []
    for (let i = 0; i < dataPenjualan.length; i++) {
        totalBeli.push(dataPenjualan[i].sisaStok + dataPenjualan[i].totalTerjual)
        keuntungan.push( dataPenjualan[i].hargaJual - dataPenjualan[i].hargaBeli) 
        modal.push(dataPenjualan[i].hargaBeli * totalBeli[i])
        totalKeuntungan.push(totalBeli[i] * keuntungan[i])
    }
   
    let totalUntung = totalKeuntungan.reduce((param,b)=> param +b,0 )
    let totalModal = modal.reduce((param,b)=> param +b,0 )
    let result = Intl.NumberFormat('id-ID',
          { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
        ).format(totalUntung);
    let resultModal = Intl.NumberFormat('id-ID',
        { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
      ).format(totalModal);
    // let persenUntung = Math.round(( totalUntung / totalModal ) * 100)
    let persenUntung = ( totalUntung / totalModal ) * 100

    for (let i = 0; i < dataPenjualan.length; i++) {
        if(i == 0){ 
              var totalStok = dataPenjualan[i].totalTerjual;
        }else{
            if(dataPenjualan[i].totalTerjual > totalStok){
                totalStok = dataPenjualan[i].totalTerjual;
            }            
        }
        
    }

    // mencari penulis terbanyak dan buku terbanyak
    for (let j = 0; j < dataPenjualan.length; j++) {
        let resultData = dataPenjualan.filter((a) => a.penulis == dataPenjualan[j].penulis)
        var dataJumlah = 0
        for (let test = 0; test < resultData.length; test++) {
            dataJumlah +=  resultData[test].totalTerjual 
        }
        if (dataJumlah > totalStok) {
            for (let i = 0; i < resultData.length; i++) {
                if(i == 0){ 
                      var hasilStok = resultData[i].totalTerjual;
                }else{
                    if(resultData[i].totalTerjual > hasilStok){
                        hasilStok = resultData[i].totalTerjual
                    }            
                }
                
            }
        }
    }
    let dataTerlaris = dataPenjualan.filter((a) => a.totalTerjual === hasilStok)

    const data = {
        totalKeuntungan: result,
        totalModal: resultModal,
        persentaseKeuntangan: `${persenUntung.toFixed(2)}%`,
        produkBukuTerlaris: dataTerlaris[0].namaProduk,
        penulisTerlaris: dataTerlaris[0].penulis,
    }
    return data
}
console.log(getInfoPenjualan(dataPenjualanNovel));
