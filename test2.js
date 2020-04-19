const calc = (number=1) => number - Math.floor(number / 3) - Math.floor(number / 5) + 2 * Math.floor(number / 15)

// calc(15) === 9
// calc(20) === 20

// const globalCalc = (number=1,test1,test2) => number - Math.floor(number / test1) - Math.floor(number / test2) + 2 * Math.floor(number / (test1 * test2))
// calc(15) === globalCalc(15,3,5)