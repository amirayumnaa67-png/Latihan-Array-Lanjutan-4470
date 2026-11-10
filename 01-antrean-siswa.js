
const antreanSiswa = ["Andi", "Budi", "Citra"];

console.log("Antrean awal:", antreanSiswa);
console.log("Jumlah siswa:", antreanSiswa.length);

antreanSiswa.push("Deni");
console.log("Setelah push:", antreanSiswa);

antreanSiswa.unshift("Eka");
console.log("Setelah unshift:", antreanSiswa);

const siswaPertama = antreanSiswa.shift();
console.log("Siswa yang dihapus pertama:", siswaPertama);
console.log("Antrean setelah shift:", antreanSiswa);

const siswaTerakhir = antreanSiswa.pop();
console.log("Siswa yang dihapus terakhir:", siswaTerakhir);
console.log("Antrean setelah pop:", antreanSiswa);

console.log("Antrean akhir:", antreanSiswa);
console.log("Jumlah siswa tersisa:", antreanSiswa.length);
