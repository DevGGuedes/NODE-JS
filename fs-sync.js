const fs = require("fs");

console.log((process.hrtime()[0]/60).toFixed(5));
console.log("Antes da leitura do Arquivo");

const dados = fs.readFileSync("file2.txt");

console.log("Executando o console apos o arquivo");
console.log((process.hrtime()[0]/60).toFixed(5));