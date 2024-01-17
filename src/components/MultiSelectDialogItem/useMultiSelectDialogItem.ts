import { MouseEvent } from 'react'
import { IMultiSelectDialogItem } from '.'

const useMultiSelectDialogItem = ({
  item,
  isSelected,
  onSelect,
  searchValue,
  index,
  navigationSelectedIndex
}: IMultiSelectDialogItem) => {
  const episodeTitleCreator = (count: number): string => {
    return count <= 1 ? `${count} Episode` : `${count} Episodes`
  }

  const handleSelect = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    onSelect(item)
  }

  return {
    isSelected,
    episodeTitle: episodeTitleCreator(item.episode.length),
    handleSelect,
    isItemSelected: index === navigationSelectedIndex,
    itemName: item.name,
    itemImage: item.image,
    itemAlt: item.name,
    searchValue
  }
}

export default useMultiSelectDialogItem
