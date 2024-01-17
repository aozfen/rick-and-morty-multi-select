import { ICharacter } from "@/providers/interfaces"

export interface IMultiSelectDialog {
  isShow: boolean
  loading?: boolean
  data: ICharacter[]
  selecteds: ICharacter[]
  onSelect: Function
  searchValue: string
  navigationSelectedIndex: number
  onScrollEnd: Function
}