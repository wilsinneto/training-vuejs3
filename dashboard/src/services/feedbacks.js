const defaultPagination = {
  limit: 5,
  offset: 0
}

export default httpClient => ({

  getAll: async ({ type, limit, offset } = defaultPagination) => {
    const params = {
      limit,
      offset
    }

    if (type) {
      params.type = type
    }

    const response = await httpClient.get('/feedbacks', { params })

    return {
      data: response.data
    }
  },

  getSummary: async () => {
    const response = await httpClient.get('/feedbacks/summary')

    return {
      data: response.data
    }
  }
})