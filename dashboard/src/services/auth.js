export default httpClient => ({
  register: async ({ name, email, password }) => {
    const response = await httpClient.post('/auth/register', { name, email, password })

    let errors = null

    if (!response.data) {
      const { status, statusText } = response.request

      errors = {
        status,
        statusText
      }
    }

    return {
      data: response.data,
      errors
    }
  },
  login: async ({ email, password }) => {
    const response = await httpClient.post('/auth/login', { email, password })

    let errors = null

    if (!response.data) {
      const { status, statusText } = response.request

      errors = {
        status,
        statusText
      }
    }

    return {
      data: response.data,
      errors
    }
  }
})