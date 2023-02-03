let cars = ["Toyota", "Honda", "Tesla", "Toyota", "BMW", "Tesla"];

let removeDuplicates = arr => [...new Set(arr)];

console.log(removeDuplicates(cars));
