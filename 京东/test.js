// const readline = (() => {
//   const inputs = ['4 3']
//   return () => inputs.shift()
// })()

// let line;
// while (line = readline()) {
//   let [a, b] = line.split(' ').map(Number)
//   // a个1，b个2
//   if (a - b > 1) {
//     console.log(-1)
//     break
//   }
//   const res = []
//   while (a > 0 && b > 0) {
//     res.push(1)
//     res.push(2)
//     a--
//     b--
//   }
//   while (b > 0) {
//     res.push(2)
//     b--
//   }
//   while (a > 0) {
//     res.push(1)
//     a--
//   }
//   console.log(res.join(' '));
// }

const readline = (() => {
  const inputs = ['3 4', '2 5 1 6 4 3 7']
  return () => inputs.shift()
})()

const [n, k] = readline().split(' ').map(Number)
const arr = readline().split(' ').map(Number)
const a = [], b = []

for (let i = 0; i < k; i++) {
  if (arr[i] > k) {
    a.push(i)
  }
}

for (let i = k; i < arr.length; i++) {
  if (arr[i] <= k) {
    b.push(i)
  }
}

let res = 0

while (a.length) {
  const tempA = a.pop()
  const tempB = b.pop()
  res += tempB - tempA
}
console.log(res);
