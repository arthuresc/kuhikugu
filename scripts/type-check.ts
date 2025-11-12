const args = process.argv.slice(2);
console.log(args[0]);
const file: string | boolean = args[0] ? args[0] : 'src/*.tsx';
// console.log(`Aqui os arquivos: ${file}`)
console.log(`tsc --noEmit -- ${args[0]}`);
