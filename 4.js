function cetak (x){
    if (x%2!=0){
        tulisan = "--- panjang ---";
        console.log(tulisan);
        for (let baris = 0; baris < x; baris++) {
            let hasil = '*';
            for (let kolom = 1; kolom < x; kolom ++) {
                hasil += '*';
            }
            console.log(hasil);
        }
    }
    
    else {
        alert = "Parameter harus angka dan ganjil!";
        return alert;
    }
}
console.log(cetak(3));