const readline = (() => {
  const strs = [
    'flower flow flight'
  ]
  return () => strs.shift()
})()

let strs

while (strs = readline()) {
  const strArr = strs.split(' ')
  let res = strArr[0]
  for (let i = 0; i < strArr.length; i++) {
    while (strArr[i].slice(0, res.length) !== res) {
      res = res.slice(0, res.length - 1)
    }
  }
  console.log(strArr[0].slice(0, res));
}
// while (strs = readline()) {
//   const length = strs.length
//   const dp = new Array(length).fill(0).map(
//     () => new Array(length).fill(Infinity)
//   )
//   // dp[i][j]表示strs(i, j)这段字符串打印的最少次数
//   for (let i = 0; i < length; i++) {
//     dp[i][i] = 1
//   }
//   for (let i = length - 2; i >= 0; i--) {
//     for (let j = i + 1; j < length; j++) {
//       dp[i][j] = dp[i + 1][j] + 1

//       for (let k = i + 1; k < j; k++) {
//         if (strs[i] === strs[k]) {
//           dp[i][j] = Math.min(dp[i][j], dp[i + 1][k] + dp[k + 1][j])
//         }
//       }

//       if (strs[i] === strs[j]) {
//         dp[i][j] = Math.min(dp[i][j], dp[i + 1][j])
//       }
//     }
//   }
//   console.log(dp[0][length - 1]);
// }

