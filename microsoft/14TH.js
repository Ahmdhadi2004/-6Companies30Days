/* Deletions to make an array divisible. */
var deletions = [];
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var target = 3;
for (var i = 0; i < array.length; i++) {
  if (array[i] % target !== 0) {
    deletions.push(i);
  }
}
for (var i = deletions.length - 1; i >= 0; i--) {
  array.splice(deletions[i], 1);
}