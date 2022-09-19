// const readline = (() => {
//   const inputs = [
//     '1 2 2 1 2',
//     '4',
//     '7 7',
//     '6 6',
//     '8',
//   ]
//   return () => inputs.shift()
// })()


// const [a1, a2, a3, a4, x] = readline().split(' ').map(Number)

// let line

// const a = []

// while (line = readline()) {
//   a.push(readline().split(' ').map(Number))
// }

// 不是背包问题

// const readline = (() => {
//   const inputs = [
//     '5 2',
//     '1 5 3 4 2',
//   ]
//   return () => inputs.shift()
// })()

// const [n, k] = readline().split(' ').map(Number)
// const height = readline().split(' ').map(Number)

// // dp[i]表示调到第i座山要花费的最小值

// const dp = new Array(n).fill(Infinity)
// dp[0] = 0
// for (let i = 1; i < n; i++) {

//   const curHeight = height[i]
//   const preHeights = []
//   for (let j = (i > k ? i - k : 0); j <= i; j++) {
//     const preHeight = height[j]
//     preHeights.push(preHeight >= curHeight ? dp[j] : curHeight - preHeight + dp[j])
//   }
//   dp[i] = Math.min(...preHeights)
// }
// console.log(dp[n - 1]);

const readline = (() => {
  const inputs = [
    '5 2',
    '1 2 1 3 2 3',
  ]
  return () => inputs.shift()
})()
const [n, k] = readline().split(' ').map(Number)
const nums = readline().split(' ').map(Number)
const map = new Map()
nums.forEach(num => map.set(num, (map.get(num) || 0) + 1))
let maxValue = 0, maxKey = []
map.forEach((value, key) => {
  if (value > maxValue) {
    maxKey = [key]
    maxValue = value
  } else if (value === maxValue) {
    maxKey.push(key)
  }
})

const myMap = (() => {
  const map = new Map()
  return {
    jia: (num) => map.set(num, (map.get(num) || 0) + 1),
    jian: (num) => map.set(num, (map.get(num) || 0) - 1),
    isOk: () => {
      let flag = false
      map.forEach((value, key) => {
        if (value >= k && maxKey.includes(key)) {
          flag = true
        }
      })
      return flag
    }
  }
})()
const length = nums.length
let res = 0
for (let i = 0; i < length; i++) {
  myMap.jia(nums[i])
  if (myMap.isOk()) {
    res++
  }
  for (let j = i + 1; j < length; j++) {
    myMap.jia(nums[j])
    if (myMap.isOk()) {
      res++
    }
  }
  for (let j = i + 1; j < length; j++) {
    myMap.jian(nums[j])
  }
  myMap.jian(nums[i])
}
console.log(res);