
/* 
# Bishops
#
# Imagine you have a chessboard, it's a grid of size 8x8 represented by the numbers 1..64
#
#  1  2  3  4  5  6  7  8
#  9 10 11 12 13 14 15 16
# 17 18 19 20 21 22 23 24
# 25 26 27 28 29 30 31 32
# 33 34 35 36 37 38 39 40
# 41 42 43 44 45 46 47 48
# 49 50 51 52 53 54 55 56
# 57 58 59 60 61 62 63 64

# Write a method that accepts a starting position and an ending position of 
# a bishop on a chessboard and returns the number of moves it would take for
# the bishop to get there.

# Examples

# > bishops(3, 39)
# > 1

# > bishops(3, 37)
# > 2

# > bishops(3, 4)
# > nil
 */

//function returns current row of number
function getRow(num) {
  return Math.floor(num/8)
}

function Bishop(start, end){
  //get the difference between the start and end numbers
  let diff = Math.abs(start-end);
  //check to see if the difference in the row numbers is even or odd (will be 0 or 1)
  let rowDiff = Math.abs(getRow(start) - getRow(end) % 2);
  //if the difference in the tile numbers minus adjustment for row difference is not even, then it is not a valid spot the bishop can move to.
  if (Math.abs(diff - rowDiff) % 2 !== 0 ) return 0;
  //otherwise, if either are immediately divisible by 7 or 9, its within one move
  if (diff % 7 === 0 || diff % 9 === 0) return 1;
  //otherwise, by default, it will be 2 moves
  return 2;
}


console.log('answer should be 1:',Bishop(3, 39));
//> 1

console.log('answer should be 2:',Bishop(3, 37));
// > 2

console.log('answer should be 0:',Bishop(3, 4));
// > 0