import { useEffect, useRef } from 'react'
import { IMultiSelectDialog } from '.'


const useMultiSelectDialog = (props: IMultiSelectDialog) => {
  const {
    data,
    selecteds,
    onSelect,
    searchValue,
    navigationSelectedIndex,
    onScrollEnd
  } = props

  const listRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (listRef.current && navigationSelectedIndex !== -1) {
      const selectedElement = listRef.current.childNodes[navigationSelectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({
          block: 'nearest',
          inline: 'start'
        })
      }
    }
  }, [navigationSelectedIndex])

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = listRef.current!

      if (scrollTop + clientHeight === scrollHeight) {
        onScrollEnd()
      }
    }

    listRef.current?.addEventListener('scroll', handleScroll)

    return () => {
      listRef.current?.removeEventListener('scroll', handleScroll)
    }
  }, [onScrollEnd])

  return {
    listRef,
    data,
    selecteds,
    onSelect,
    searchValue,
    navigationSelectedIndex
  }
}

export default useMultiSelectDialog
