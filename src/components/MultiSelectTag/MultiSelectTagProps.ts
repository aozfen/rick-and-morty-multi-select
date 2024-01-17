import { MouseEventHandler } from "react"

export interface IMultiSelectTag {
  index: number
  title: string
  navigationSelectedIndex: number
  unSelect: MouseEventHandler<HTMLButtonElement>
}
