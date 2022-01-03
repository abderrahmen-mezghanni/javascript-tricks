// Promise && syncronisation
function functionAsync() {
  const promise = new Promise((res, reject) => {
    setTimeout(() => {
      res("hello World");
    }, 1000);
  });
  promise.then((data) => {
    console.log(data);
  });
  console.log("after await");
}
functionAsync();
console.log("After func");

// Promise && async && await
async function functionAsync() {
  const promise = new Promise((res, reject) => {
    setTimeout(() => {
      res("hello World");
    }, 1000);
  });
  const result = await promise; // block code after in async
  console.log(result);
  console.log("after await");
}
functionAsync();
console.log("After func");

async function functionAsync() {
  const result = await getHelloWorld();
  console.log(result);
  console.log("after await");
}
functionAsync();
console.log("After func");

// Promise create
function getHelloWorld() {
  return Promise.resolve("hello World");
}

// private async fetchData(){
//     const data = await this.httpClient.get(this.apiUrl).toPromise();
//     console.log("Data: " + JSON.stringify(data));
//   }

// new If else
var age = 89;
age > 50
  ? age > 80
    ? console.log("too Old")
    : console.log("Old")
  : age < 20
  ? console.log("too young")
  : console.log("young");

// clone Object etape *1*
var obj1 = { key1: "hello", key2: { key21: "hi" } };
console.log(obj1);
var obj2 = obj1;
console.log(obj1);
console.log(obj2);
obj2.key1 = "hi";
console.log(obj1);

// clone Object etape *2*
var obj1 = { key1: "hello", key2: { key21: "hi" } };
console.log(obj1);
var obj2 = Object.assign({}, obj1);
console.log(obj1);
console.log(obj2);
obj2.key1 = "hi";
console.log(obj1);
obj2.key2.key21 = "hello";
console.log(obj1);

// clone Object etape *3*
var obj1 = { key1: "hello", key2: { key21: "hi" } };
console.log(obj1);
var obj2 = { ...obj1 };
console.log(obj1);
console.log(obj2);
obj2.key1 = "hi";
console.log(obj1);
obj2.key2.key21 = "hello";
console.log(obj1);

// clone Object etape *4*
var obj1 = { key1: "hello", key2: { key21: "hi" } };
console.log(obj1);
var obj2 = JSON.parse(JSON.stringify(obj1));
console.log(obj1);
console.log(obj2);
obj2.key1 = "hi";
console.log(obj1);
obj2.key2.key21 = "hello";
console.log(obj1);

// clone Object etape *5*
var obj1 = { key1: "hello", key2: { key21: "hi" } };
console.log(obj1);
var obj2 = jQuery.extend({}, true, obj1);
console.log(obj1);
console.log(obj2);
obj2.key1 = "hi";
console.log(obj1);
obj2.key2.key21 = "hello";
console.log(obj1);

// createObject concatinate keys
var obj1 = { key1: "hello", key2: "hi" };
var obj2 = { key1: "salem", key3: "ch7alek" };
var obj3 = { ...obj1, ...obj2 };
console.log(obj3);

//createList
var list = Array(5);
console.log(list);
//createList
var list = Array(5).fill("");
console.log(list);
//createList
var list = Array.from({ length: 7 }, (_, i) => i);
console.log(list);

//createList
var list = Array.from({ length: 7 }, (_, i) => i);
console.log(list);
list = [...list, ...list, 4, 6, 7];
console.log(list);
list = Array.from(new Set(list));
console.log(list);

//createList
var list = Array.from({ length: 7 }, (_, i) => i);
console.log(list);
list.length = 5;
console.log(list);
list.splice(-1);
console.log(list);
list = list.slice(-2);
console.log(list);

//loooooooppppp
var list = Array.from({ length: 7 }, (_, i) => i);

var total = list.reduce((acc, cur) => acc + cur);
console.log(total);

var elementsAvecTraitment = list.map((cur) => cur * 1.5);
console.log(elementsAvecTraitment);

var elementsWitnCindition = list.filter((cur) => cur % 2 == 0);
console.log(elementsWitnCindition);

var list = Array.from({ length: 7 }, (_, i) => i);

var total = list.reduce(
  (acc, cur) => (cur % 2 == 0 ? (acc = [...acc, cur * 4]) : (acc = [...acc])),
  []
);
console.log(total);

// TenantNamespace.map((item) => {
//   if (item.tenants.length > 0) {
//     item.tenants.map((t) => {
//       TenantNamespaceValues += t.namespace + ',';
//     });
//   }
// });
// if (TenantNamespaceValues.length != 0) {
//   TenantNamespaceValues.slice(0, -1);
// }
TenantNamespaceValues = TenantNamespace.filter(
  (companyFilter) => companyFilter.tenants.length > 0
)
  .map((company) => company.tenants.map((tenant) => tenant["namespace"]).join())
  .join();

//mapp object
var list = Array.from({ length: 7 }, (_, i) => createListByIndex(i));
var list2 = Array.from({ length: 7 }, (_, i) => createListByIndex(i));
list = [...list, ...list2];
function createListByIndex(index) {
  //with AltGr 7
  return { id: `a-${index}`, random: Math.random(3) };
}
console.log(list);
var mapObject = {};
list.map((element) => {
  if (mapObject[element.id] == null) {
    mapObject[element.id] = [];
  }
  mapObject[element.id].push(element.random);
});
console.log(mapObject);
console.log(Object.keys(mapObject));
console.log(Object.values(mapObject));
Object.keys(mapObject).map((key) => {
  console.log(mapObject[key]);
});

let table = [{ a: 4 }, { a: 6 }, { a: 7 }];
var [element] = table; // first element in table
console.log(element);
let table = [5, 0, 4, 3, 7, 2, 9];
var [element] = table.sort(); // first element in table
console.log(element);

let table = [5, 0, 4, 3, 7, 2, 9];
var [element] = table.sort((a, b) => a > b); // first element in table
console.log(element);

let table = [{ a: 4 }, { a: 6 }, { a: 7 }];
var [element] = table.sort((a, b) => a.a > b.a); // first element in table
console.log(element);

let obj = { a: "azertyui", b: "ztretryuty" };
let { b } = obj;
console.log(b);

let obj = { a: "azertyui", b: "ztretryuty" };
distructirise(obj);
function distructirise({ b }) {
  console.log(b);
}
// distruc({ prop1 : {prop11}})
