import useStore from '@/hooks/useStore'
import { setCurrentUser, resetUserStore, setApiKey, cleancurrentUser } from './user'

describe('UserStore', () => {
  let store

  beforeEach(() => {
    store = useStore()
  })

  afterEach(() => {
    resetUserStore()
  })

  it('should set current user', () => {
    setCurrentUser({ name: 'fulano' })
    expect(store.User.currentUser.name).toBe('fulano')
  })

  it('should set api_key on current user', () => {
    setApiKey('123')
    expect(store.User.currentUser.apiKey).toBe('123')
  })

  it('should clean current user', () => {
    setCurrentUser({ name: 'fulano' })
    expect(store.User.currentUser.name).toBe('fulano')
    cleancurrentUser()
    expect(store.User.currentUser.name).toBeFalsy()
  })
})