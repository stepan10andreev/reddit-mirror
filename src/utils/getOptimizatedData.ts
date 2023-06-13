interface IObj {
  [key: string]: string;
}

export function getOptimizatedData(array: any[], props: string[]) {
  let result = []
  let obj: IObj = {}
  array.map(item => item.data)
  for (let item of array) {
    for (let prop of props) {
        obj[prop] = item[prop]
    }
    result.push(obj)
    obj = {}
  }
  return result;
}

