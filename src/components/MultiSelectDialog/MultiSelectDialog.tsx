import clsx from 'clsx'

import { ICharacter } from '@/providers/interfaces'
import Loading from '@/components/Loading'

import { MultiSelectDialogItem } from '../MultiSelectDialogItem'
import { IMultiSelectDialog } from '.'

import EmptyModule from '../EmptyData'
import useMultiSelectDialog from './useMultiSelectDialog'

import styles from './MultiSelectDialog.module.scss'


function MultiSelectDialog(props: IMultiSelectDialog) {
  const {
    isShow,
    loading,
    data,
    selecteds,
    onSelect,
    searchValue,
    navigationSelectedIndex
  } = props

  const {
    listRef
  } = useMultiSelectDialog(props)

  return (
    <div  className={clsx(styles['multi-select-dialog'], { [styles['show']]: isShow })}>
      <div ref={listRef} className={styles['multi-select-dialog-list']}>
        {data.length ? data.map((item: ICharacter, index: number) => (<MultiSelectDialogItem
          key={item.id}
          index={index}
          item={item}
          onSelect={onSelect}
          isSelected={selecteds.some((selectedItem: ICharacter) => selectedItem.id === item.id)}
          searchValue={searchValue}
          navigationSelectedIndex={navigationSelectedIndex}
        />)) : <EmptyModule text='Search results not found' />}
      </div>
      {loading && <Loading />}
    </div>
  )
}

export default MultiSelectDialog
