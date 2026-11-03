const namaSiswa = [
"Andi",
"Budi",
"Citra",
"Dewi",
"Eko"
];

const nilaiSiswa = [
80,
75,
90,
85,
70
];

console.log("Jumah Siswa: " + namaSiswa.length);

console.log("Siswa pertama: " + namaSiswa[0] + " dengan nilai: " + nilaiSiswa[0]);

console.log("Siswa terakhir: " + namaSiswa[namaSiswa.length - 1] + " dengan nilai: " + nilaiSiswa[nilaiSiswa.length - 1]);

nilaiSiswa[1] = 80;
nilaiSiswa[4] = 82;

console.log("Siswa ketiga: " + namaSiswa[2] + " dengan nilai: " + nilaiSiswa[2]);

console.log("Daftar Siswa dan Nilai:" + nilaiSiswa  + namaSiswa);