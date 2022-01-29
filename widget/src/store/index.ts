import { reactive, readonly } from "vue"

export type StoreState = {
    currentComponent: string;
    message: string;
    feedbackType: string;
    fingerprint: string;
    apiKey: string;
    currentPage: string;
}

const initialState = {
    currentComponent: 'SelectFeedbackType',
    message: '',
    feedbackType: '',
    fingerprint: '',
    apiKey: '',
    currentPage: '',
}

const state = reactive<StoreState>({ ...initialState })

export function setCurrentComponent (component: string): void {
    state.currentComponent = component
}

export function setMessage (message: string): void {
    state.message = message
}

export function setFeedbackType (type: string): void {
    state.feedbackType = type
}

export function setFingerprint (fingerprint: string) {
  state.fingerprint = fingerprint
}

export function setApiKey (apiKey: string) {
  state.apiKey = apiKey
}

export function setCurrentPage (page: string) {
  state.currentPage = page
}

export function resetStore (): void {
    setCurrentComponent(initialState.currentComponent)
    setMessage(initialState.message)
    setFeedbackType(initialState.feedbackType)
    setFingerprint(initialState.fingerprint)
    setApiKey(initialState.apiKey)
    setCurrentPage(initialState.currentPage)
}

export default readonly(state)