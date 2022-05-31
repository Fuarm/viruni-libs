import data from "@viruni/core"
import { assign, createMachine, interpret } from "xstate"

type DemoData = {
  userId: number,
  user: string,
  error: null | Error,
  data: string
}

const normalTash = new Promise<DemoData>((resolve, reject) => {
  setTimeout(() => {
    if(Math.random() > 0.5) {
      resolve({userId: Math.random(), user: "viruni", error: null, data})
    } else {
      reject({userId: 0, user: "", error: new Error('测试')})
    }
  }, 3000)
})

const fetchCuteAnimals = () => normalTash

const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' }
    },
    active: {
      on: { TOGGLE: 'inactive'}
    }
  }
})

const toggleService = interpret(toggleMachine).start()
toggleService.onTransition(state => {
  console.log("🚗🚗", state.value)
  const selectionFired = new CustomEvent('ctoggle', {
    detail: state.value
  })
  window.dispatchEvent(selectionFired)
  window.dispatchEvent(new Event('toggle'))
})

export { toggleService, fetchCuteAnimals }
