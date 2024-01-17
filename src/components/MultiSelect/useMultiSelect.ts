import { ChangeEvent, ChangeEventHandler, useState } from "react"
import { IMultiSelect } from "."

const useMultiSelect = (props: IMultiSelect) => {
  const { data, onSelect } = props

  const [searchValue, setSearchValue] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [selectedTagIndex, setSelectedTagIndex] = useState(-1)

  const onSearch: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    props.search(event)
    setSearchValue(event.target.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % data.length)
    } else if (event.key === "ArrowUp") {
      event.preventDefault()
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1
      )
    } else if (event.key === "Tab") {
      event.preventDefault()
      if (props.selecteds.length)
        setSelectedTagIndex((prevIndex) => (prevIndex + 1) % props.selecteds.length)
    } else if (event.key === "Backspace") {
      if (selectedTagIndex !== -1) {
        event.preventDefault()
        onSelect(props.selecteds[selectedTagIndex])
        setSelectedTagIndex(-1)
      }
    } else if (event.key === "Enter") {
      if (selectedIndex !== -1) {
        onSelect(data[selectedIndex])
      }
    }
  }


  return {
    searchValue,
    selectedIndex,
    selectedTagIndex,
    onSearch,
    handleKeyDown
  }
}

export default useMultiSelect
