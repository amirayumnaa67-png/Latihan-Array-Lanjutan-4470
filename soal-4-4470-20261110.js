
const daftarProduk = [
    "Keyboard",
    "Mouse",
    "Monitor",
    "Flashdisk",
    "Headset",
    "Webcam"
];

console.log(daftarProduk.length);

console.log(daftarProduk.length - 1);

console.log(daftarProduk[daftarProduk.length - 1]);

const indeksTengah = Math.floor((daftarProduk.length - 1) / 2);
console.log(daftarProduk[indeksTengah]);
