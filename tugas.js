// No.2
const name = [
  "Abigail","Alexandra","Alison","Amanda","Angela",
  "Bella","Carol","Caroline","Carolyn","Deirdre",
  "Diana","Elizabeth","Ella","Faith","Olivia","Penelope",
];

function searchName(keyword, limit, callback) {
  try {
    if (typeof keyword !== "string") throw "keyword tidak boleh angka";
    if (typeof limit !== "number") throw "limit tidak boleh huruf";
  } catch (error) {
    console.log(`error! ${error}`);
  }

  let nameFilter = name.filter((nameTarget) => {
    return nameTarget.toLowerCase().includes(keyword.toLowerCase());
  });
  nameFilter = nameFilter.slice(0, limit);
  callback(nameFilter);
}
function callback(hasilName) {
  console.log(hasilName);
}
searchName("an", 3, callback);


// No.3
// function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
//   let filterNilai = dataArray.filter((isiData) => {
//     return isiData > nilaiAwal && isiData < nilaiAkhir;
//   });
//   filterNilai.sort((a, z) => a - z);

//   if (isNaN(nilaiAwal) || isNaN(nilaiAkhir)) {
//     return "Nilai harus angka";
//   } else if (nilaiAwal == null || nilaiAwal == true) {
//     return "Nilai awal null atau true harus diisi";
//   } else if (nilaiAkhir == null || nilaiAkhir == true) {
//     return "Nilai akhir null atau true harus diisi";
//   } else if (nilaiAwal > nilaiAkhir) {
//     return "Nilai akhir harus lebih besar dari nilai awal";
//   } else if (dataArray.length < 5) {
//     return "Jumlah angka dalam dataArray harus lebih dari 5";
//   } else if (nilaiAwal < nilaiAkhir && dataArray.length > 5) {
//     if (filterNilai.length > 0) {
//       return filterNilai;
//     } else {
//       return "Nilai tidak ditemukan";
//     }
//   } else {
//     return "Nilai salah";
//   }
// }
// console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]));
// console.log(seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]));
// console.log(seleksiNilai(5, 17, [2, 25, 4]));
// console.log(seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]));