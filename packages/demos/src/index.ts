import data from "@viruni/core"

type DemoData = {
  userId: number,
  user: string,
  error: null | Error
}

const normalTash = () => {
  return new Promise<DemoData>((resolve, reject) => {
    setTimeout(() => {
      if(Math.random() > 0.5) {
        resolve({userId: Math.random(), user: "viruni", error: null})
      } else {
        reject({userId: 0, user: "", error: new Error('测试')})
      }
    }, 3000)
  })
}

export { normalTash }

console.log(data)
