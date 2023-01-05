// 1.Method Array.slice() digunakan untuk ’memotong’ array menjadi array baru, atau menjadi ’sub-array’ dari 
// array asal. Method slice() ini membutuhkan 2 buah argumen yang berisi posisi index awal dan akhir pemotongan.
// let data = [1, 2, 3, 4, 5, 6, 7, 8];
// let dataBaru = data.slice(2, 5);
// console.log(dataBaru);

// 2.Method Array.concat() digunakan untuk menggabungkan 2 atau lebih array.
// const debian = ['ubuntu', 'mint', 'kali']
// const redhat = ['rhel', 'centos']
// const arch = ['manjaro', 'chakra']
// const linuxDistro = debian.concat(redhat, arch)
// console.log(linuxDistro)

// 3.Method Array.push() digunakan untuk menambahkan elemen array pada akhir dari array.
// let data = [1,2,3,4,5,6,7,8]
// data.push("mangga")
// console.log(data) 

// 4.Method Array.pop() digunakan untuk  menghapus elemen terakhir dari array.
// let data = [1,2,3,4,5,6,7,8]
// data.pop()
// console.log(data)

// 5.Method Array.shift() digunakan untuk menghapus elemen paling awal array.
// let data = [1,2,3,4,5,6,7,8]
// data.shift()
// console.log(data)

// 6.Method Array.unshift() digunakan untuk menambahkan elemen baru diawal array.
// let data = [1,2,3,4,5,6,7,8]
// data.unshift(0)
// console.log(data)

// 7.Method Array.sort() digunakan untuk mengurutkan elemen pada array baik secara ascending atau descending.
// let data = [7,4,12,6,10,20,45,2,1]
// data.sort((a, b)=> a - b)
// console.log(data)
// data.sort((a, b)=> b - a)
// console.log(data)

// 8.Method Array.filter() digunakan untuk melakukan filter data dengan kondisi tertentu pada setiap 
// elemen dari array yang sudah ada.
// let data = [1,2,3,4,5,6,7,8,9,10]
// // membuat array baru dari array angka yang isinya adalah bilangan habis dibagi 2
// let dataFilter = data.filter(item => item % 2 == 0)
// console.log(dataFilter)

// 9.Method Array.includes() digunakan untuk mengecek apakah sebuah array memilik element tertentu.
// const fruits = ['apple', 'banana', 'cherry']
// const result = fruits.includes('apple', 0) 
// console.log(result);

// 10.Method Array.concat() digunakan untuk menggabungkan 2 atau lebih array.
// const debian = ['ubuntu', 'mint', 'kali']
// const redhat = ['rhel', 'centos']
// const arch = ['manjaro', 'chakra']
// const linuxDistro = debian.concat(redhat, arch)
// console.log(linuxDistro)