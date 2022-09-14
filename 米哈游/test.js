// const input = '161 160 163 169 171'
// let arr2 = []
// let arr1 = []
// const res = []
// input.split(' ').map((numStr) => {
//   const num = parseInt(numStr)
//   if (num % 2) {
//     arr1.push(num)
//   } else {
//     arr2.push(num)
//   }
// })
// if (arr2.length > arr1.length) {
//   [arr1, arr2] = [arr2, arr1]
// }
// while (arr2.length) {
//   res.push(arr1.pop())
//   res.push(arr2.pop())
// }
// while (arr1.length) {
//   res.push(arr1.pop())
// }
// console.log(res.join(' '));


// const k = 2
// const line = 'mihoyoyomihoyomimihoyo'
// const mihoyo = /mihoyo/g
// let matched
// const indexs = []
// let min = -1, res = -1
// while ((matched = mihoyo.exec(line)) !== null) {
//   indexs.push(matched.index)
// }
// for (let i = 0, j = k - 1; j < indexs.length; i++, j++) {
//   if (min > indexs[j] - indexs[i] || min === -1) {
//     min = indexs[j] - indexs[i]
//     res = `${indexs[i]} ${indexs[j] + 5}`
//   }
// }
// console.log(res);
// console.log(indexs);

const getRes = (() => {
  const map = new Map()
  return (pre, cur, n) => {
    if (map.get(n)) {
      return map.get(n)
    } else {
      const res = 2 ** n
      map.set(n, res)
      return res
    }
  }
})()
// 4,5,6,7->n=3, 2,3->n=2, 8, 9, 10  -> n=4
let res = 0
const line = '2 3 2 3 2 3 4 8 2 6'
const arr = line.split(' ').map(Number)
for (let i = 1; i < arr.length; i++) {
  const pre = arr[i - 1]
  const cur = arr[i]
  const k = pre / cur
  const n = k >= 1 ? Math.floor(Math.log2(Math.floor(k))) + 1 : 0
  res += n
  arr[i] = cur * getRes(n)
}

console.log(arr, res);