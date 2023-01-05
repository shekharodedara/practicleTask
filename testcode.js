// # Nullish Coalescing

const foo = null ?? 'default string';
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0




// # Logical Assignment

const a = { duration: 50, title: '' };

a.duration ||= 10;
console.log(a.duration);
// expected output: 50

a.title ||= 'title is empty.';
console.log(a.title);
// expected output: "title is empty"




// # Array.prototype.findLast()

// const array1 = [5, 12, 50, 130, 44];
// const found = array1.findLast((element) => element > 45);
// console.log(found); 
// expected output: 130




// # Object.hasOwn()

const object1 = {
  prop: 'exists'
};
console.log(Object.hasOwn(object1, 'prop'));
// expected output: true




// # Regexp Match Indices

const str1 = "foo bar foo";
const regex1 = /foo/dg;
console.log(regex1.exec(str1).indices[0]); 
// Output: Array [0, 3]