function compact(arr) {
    return arr.filter(Boolean);
  }
  console.log(compact([3, 8, 23, "hello", " ", false, "45"]));
  