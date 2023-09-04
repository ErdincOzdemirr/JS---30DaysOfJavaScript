function counter() {
  let count = 0;
  function up() {
    count++;
    return count;
  }
  function down() {
    count--;
    return count;
  }
  return {
    up: up,
    down: down,
  };
}

let count = counter();

console.log(count);
console.log(count.up());
console.log(count.up());
console.log(count.up());
console.log(count.down());
console.log(count.down());
console.log(count.down());
console.log(count.up());