const symbols = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
]
export const getRandomExaCode = () => {
  const initialArr = Array(6).fill('')
  const exaString = initialArr
    .map(() => symbols[Math.floor(Math.random() * symbols.length)])
    .join('')
  return `#${exaString}`
}
