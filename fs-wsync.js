const fs = require("fs");

console.log((process.hrtime()[0]/60).toFixed(5));
console.log("Antes da leitura do Arquivo");

//enquanto ele le o arquivo, executa uma arrow function
const dados = fs.readFile("file2.txt", (err, data) =>{
	if (err) throw err;
	console.log("Executando o console apos o arquivo");
});

console.log("Executando o console apos o arquivo");
console.log((process.hrtime()[0]/60).toFixed(5));