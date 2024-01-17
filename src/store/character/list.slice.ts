import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { initialResponseInfo } from '@/providers/interfaces/IResponseInfo'
import { ICharacterListSliceState } from '@/providers/interfaces/character'

import APIService from '@/utils/request'

export const getCharacters = createAsyncThunk('character.list', async (data: {
  name: string,
  page?: number
}, { rejectWithValue }) => {
  try {
    const response: any = await APIService.get(`character`, data)
    return response
  } catch (error: any) {
    return rejectWithValue(error.response || error.message || "An unexpected error occurred")
  }
})

const handleRejected = (state: ICharacterListSliceState, action: PayloadAction<any>) => {
  const errMessage = action.payload?.message || "An unexpected error occurred"
  state.data = []
  state.errors = [{ type: "server", message: errMessage }]
  state.loading = false
}

const handleFulfilled = (state: ICharacterListSliceState, action: any) => {
  const payloadData = action.payload.results
  const isLoadMore = action.meta?.isLoadMore

  if (payloadData.length) {
    state.data = isLoadMore ? [...state.data, ...payloadData] : payloadData
    state.info = action.payload.info
  }
  state.loading = false
  state.errors = []
}


export const characterListSlice = createSlice({
  name: 'character',
  initialState: {
    info: initialResponseInfo,
    data: [],
    loading: false,
    errors: []
  } as ICharacterListSliceState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state: ICharacterListSliceState) => { state.loading = true })
      .addCase(getCharacters.rejected, handleRejected)
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state: ICharacterListSliceState, action: any) => {
          if (action.meta.arg.page > 1) {
            action.meta.isLoadMore = true
          }
          handleFulfilled(state, action)
        }
      )
  }
})

export const { } = characterListSlice.actions

export default characterListSlice.reducer