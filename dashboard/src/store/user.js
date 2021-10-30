import { reactive } from 'vue'

const state = reactive({
  currenUser: {}
})

export default state

export function cleanCurrentUser () {
  state.currenUser = {}
}

export function setCurrentUser (user) {
  state.currenUser = user
}

export function setApiKey (apiKey) {
  const currenUser = { ...state.currenUser, apiKey }
  state.currenUser = currenUser
}