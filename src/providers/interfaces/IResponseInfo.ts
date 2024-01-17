export interface IResponseInfo {
  count: number
  next: string
  pages: number
  prev: string
}

export const initialResponseInfo : IResponseInfo = {
  count: 0,
  next: "",
  pages: 0,
  prev: ""
}