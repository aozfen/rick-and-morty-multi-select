import { IResponseInfo } from "../IResponseInfo"
import { ICharacter } from "."

export interface ICharacterListSliceState {
  info: IResponseInfo
  data: Array<ICharacter>
  loading: boolean
  errors: Array<any>
}
