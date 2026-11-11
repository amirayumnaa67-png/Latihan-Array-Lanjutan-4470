
const namaSiswa = [
    "Andi",
    "Budi",
    "Citra",
    "Dewi",
    "Eko"
];

const nilaiSiswa = [80, 75, 90, 85, 70];

console.log("Jumlah siswa:", namaSiswa.length);

console.log("Siswa pertama:", namaSiswa[0], "-", nilaiSiswa[0]);

const indeksTerakhir = namaSiswa.length - 1;
console.log("Siswa terakhir:", namaSiswa[indeksTerakhir], "-", nilaiSiswa[indeksTerakhir]);

nilaiSiswa[1] = 88;

nilaiSiswa[4] = 82;

console.log("Siswa ketiga:", namaSiswa[2], "-", nilaiSiswa[2]);

console.log("Daftar nama siswa:", namaSiswa);
console.log("Daftar nilai siswa:", nilaiSiswa);
