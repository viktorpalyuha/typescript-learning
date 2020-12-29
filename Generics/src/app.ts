// const names: Array<string> = []; // string[];

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(' ');
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Viktor', hobbies: ['Programming'] }, { age: 30 });
console.log(mergedObj.age);

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let printText = 'Got no value';
  if (element.length === 1) {
    printText = 'Got 1 element';
  } else if (element.length > 0) {
    printText = `Got ${element.length} elements`;
  }
  return [element, printText];
}

console.log(countAndPrint('Hello there :)'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

extractAndConvert({ name: 'Viktor' }, 'name');

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Viktor');
textStorage.addItem('Vik');
textStorage.removeItem('Vik');
console.log(textStorage.getItems());

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: 'Viktor' });
// objStorage.addItem({ name: 'Vik' });
// objStorage.removeItem({ name: 'Viktor' });
// console.log(objStorage.getItems());

interface Movie {
  title: string;
  description: string;
  releaseDate: Date;
}

function createMovie(title: string, description: string, date: Date): Movie {
  let movie: Partial<Movie> = {};
  movie.title = title;
  movie.description = description;
  movie.releaseDate = date;
  return movie as Movie;
}

const names: Readonly<string[]> = ['Viktor', 'Vik'];
// names.push('Ronald');
// names.pop();