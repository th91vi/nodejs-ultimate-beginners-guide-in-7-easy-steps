// sync == blocking

const { readFile, readFileSync } = require('fs');

// // executar de forma sincrona, bloqueando a thread
// const txt = readFileSync('./hello.txt', 'utf8');
// console.log(txt);

// executa de forma assincrona, sem bloquear outros eventos
readFile('./hello.txt', 'utf8', (err, txt) => {
    console.log(txt);
})

// // promisses eh uma API experimental e precisa ser habilitada
// const { readFile } = require('fs').promises;

// async function hello() {
//     const txt = await readFile('./hello.txt', 'utf8')
//     return txt;
// }

console.log('executar o quanto antes')