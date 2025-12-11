function teste() {
  const pessoa = {
    nome: 'Arthur',
    idade: 31,
  };

  return pessoa;
}

const oi = teste();

console.log(oi);

const arrTest = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log(arrTest);

arrTest.pop();

console.log(arrTest);

const items = ['a', 'b', 'c'];

const i = 4;

console.log((i + 1) % items.length)


const sliceTest = ['a', 'b', 'c', 'd', 'e', 'f'];

sliceTest.splice(2,1)
console.log(sliceTest)
