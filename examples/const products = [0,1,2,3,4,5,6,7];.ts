const products = [0, 1, 2, 3, 4, 5, 6, 7];

let start = 8;

let finish = 12;

const length: number = products.length;

const shownProducts =
  finish > length
    ? products.slice(start, finish).concat(products.slice(0, finish - length))
    : products.slice(start, finish);

// start = start + 1;
// finish = finish + 1;

// start = start - 1;
// finish = finish - 1;

const confirm: boolean = start < finish;

confirm;

shownProducts;

length;
