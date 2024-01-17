import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'

export enum HTTPStatus {
  SUCCESS = 1,
  ERROR = 0
}

type HTTPResult<T> = {
  status: HTTPStatus,
  message: string,
  result: T,
  data: any
}

type ErrorResponse = {
  data: {
    message?: string
  }
  status: number
}

const API_URL: string = import.meta.env.VITE_BASE_API_URL

const instance: AxiosInstance = axios.create({
  baseURL: API_URL || '/',
  timeout: 20000
})

instance.interceptors.request.use(async (config) => {
  const token = '' // If there are auth transactions, tokens should be added here.

  if (token) {
    config.headers.Authorization = 'Bearer ' + token
  }

  return config
}, (error) => {
  return Promise.reject(error)
})

instance.interceptors.response.use(
  (res: AxiosResponse) => {
    const { data, status } = res

    if (status === undefined) {
      return Promise.reject(new Error(''))
    }

    return data
  },
  async (error: AxiosError<ErrorResponse>) => {
    const { data, status } = error.response as ErrorResponse

    switch (status) {
      case 404:
        return Promise.reject(new Error(data.message || 'Not found'))
      case 422:
        return Promise.reject(new Error(data.message || 'Unprocessable Entity'))
      case 401:
        return Promise.reject(new Error(data.message || 'Unauthorized request'))
      default:
        if (error) return Promise.reject(error)
        return data
    }
  }
)

const service = {
  get: <T>(url: string, params?: Record<string, any>): Promise<HTTPResult<T>> => instance.get(url, { params }),
  post: <T>(url: string, params?: Record<string, any>, options?: any): Promise<HTTPResult<T>> => instance.post(url, params, options),
  put: <T>(url: string, params?: Record<string, any>): Promise<HTTPResult<T>> => instance.put(url, params),
  delete: <T>(url: string, params?: Record<string, any>): Promise<HTTPResult<T>> => instance.delete(url, { params }),
  head: <T>(url: string, params?: Record<string, any>): Promise<HTTPResult<T>> => instance.head(url, { params }),
  options: <T>(url: string, params?: Record<string, any>): Promise<HTTPResult<T>> => instance.options(url, { params }),
  patch: <T>(url: string, params?: Record<string, any>): Promise<HTTPResult<T>> => instance.patch(url, params)
}

export default service
