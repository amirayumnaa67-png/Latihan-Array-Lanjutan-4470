
const daftarBarang = [
  "Buku Tulis",
  "Pensil",
  "Penghapus",
  "Spidol"
];

const barangBaru = "Pulpen";
const barangDicari = "Penghapus";
const barangDihapus = "Spidol";

console.log("=== PENGELOLAAN PERLENGKAPAN KELAS ===");
console.log(`Jumlah barang awal: ${daftarBarang.length}`);

console.log("\n[Tambah Barang]");
if (barangBaru !== "") {
  daftarBarang.push(barangBaru);
  console.log(`${barangBaru} berhasil ditambahkan.`);
} else {
  console.log("Penambahan ditolak.");
}

console.log("\n[Pencarian Barang]");
if (daftarBarang.includes(barangDicari)) {
  const indeksBarang = daftarBarang.indexOf(barangDicari);
  console.log(`${barangDicari} ditemukan pada indeks ${indeksBarang + 1}.`);
} else {
  console.log("Barang tidak ditemukan.");
}

console.log("\n[Hapus Barang]");
const indeksHapus = daftarBarang.indexOf(barangDihapus);

if (indeksHapus !== -1) {
  daftarBarang.splice(indeksHapus, 1);
  console.log(`${barangDihapus} berhasil dihapus.`);
} else {
  console.log("Penghapusan ditolak.");
}

console.log("\n=== DAFTAR BARANG TERBARU ===");

if (daftarBarang.length === 0) {
  console.log("Daftar barang kosong.");
} else {
  for (let i = 0; i < daftarBarang.length; i++) {
    console.log(`${i + 1}. ${daftarBarang[i]}`);
  }
}

console.log(`Total barang: ${daftarBarang.length}`);