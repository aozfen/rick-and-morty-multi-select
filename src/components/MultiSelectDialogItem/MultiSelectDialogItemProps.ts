import { ICharacter } from "@/providers/interfaces"

export interface IMultiSelectDialogItem {
  index?: number
  item: ICharacter
  onSelect: Function
  isSelected?: boolean
  searchValue: string
  navigationSelectedIndex: number
}
