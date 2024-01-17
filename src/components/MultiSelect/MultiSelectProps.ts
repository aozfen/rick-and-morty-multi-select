import { ICharacter } from "@/providers/interfaces"
import { ChangeEventHandler } from "react"

export interface IMultiSelect {
  placeholder?: string
  value?: string
  data: ICharacter[]
  selecteds: ICharacter[]
  loading?: boolean
  search: ChangeEventHandler<HTMLInputElement>
  onSelect: Function
  onScrollEnd: Function
}