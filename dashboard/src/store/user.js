import { reactive } from 'vue'

const state = reactive({
  currentUser: {}
})

export default state

export function cleancurrentUser () {
  state.currentUser = {}
}

export function setcurrentUser (user) {
  state.currentUser = user
}

export function setApiKey (apiKey) {
  const currentUser = { ...state.currentUser, apiKey }
  state.currentUser = currentUser
}