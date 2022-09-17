const readline = (() => {
  const strs = ['4',
    'aab',
    'abcd',
    'cccc',
    'abacad',
    'ababab',
  ]
  return () => strs.shift()
})()

let line
let n = readline()
let strsArr = []
while (line = readline()) {
  strsArr.push(line)
}
const getInit = () => ({
  maxStrs: [],
  max: 0,
  minStrs: [],
  min: Infinity,
  map: new Map()
})

const getMaxMin = (str) => {
  const map = new Map()
  for (let i = 0; i < str.length; i++) {
    map.set(str[i], (map.get(str[i]) || 0) + 1)
  }
  const res = getInit()
  map.forEach((value, str) => {
    res.max = Math.max(res.max, value)
    res.min = Math.min(res.min, value)
  })
  map.forEach((value, str) => {
    if (value === res.max) {
      res.maxStrs.push(value)
    }
    if (value === res.min) {
      res.minStrs.push(value)
    }
  })
  res.map = map
  console.log(res);
  return res
}



const selution = (str) => {
  const len = str.length
  const dp = new Array(len).fill(0).map(() => new Array(len).fill(0))
  // dp[i][j]代表下标在i和j之间的子串的分数
  const left = getInit()
  const up = new Array(len).fill(0).map(getInit)
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const newStr = str[j]
      if (left.maxStrs.includes(newStr)) {
        left.maxStrs = [newStr]
        left.max++
        left.map.set(newStr, left.map.get(newStr) + 1)
      }
      if (left.minStrs.includes(newStr)) {
        if (left.minStrs.length === 1) {
          left = getMaxMin(str.slice(i, j + 1))
        } else {
          left.minStrs = left.minStrs.splice(left.minStrs.indexOf(newStr), 1)
          left.map.set(newStr, left.map.get(newStr) + 1)
        }
      }
      dp[i][j] = left.max - left.min
    }
  }
}

strsArr.forEach(selution)

