function imprimirPares() {
    console.log("Números pares de 1 a 20:");
    
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}


imprimirPares();
