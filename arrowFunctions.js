//1.
  const double = (arr) => arr.map((val) => val * 2)

//2.
  const squareAndFindEvens = (nums) => {
    const sqaures = nums.map((num) => num ** 2)
    const evens = sqaures.filter((square) => sqaure % 2 === 0)
  }