
import clsx from 'clsx'
import TitleMarkdown from '../TitleMarkdown/TitleMarkdown'
import styles from './MultiSelectDialogItem.module.scss'

import { IMultiSelectDialogItem } from '.'

import useMultiSelectDialogItem from './useMultiSelectDialogItem'

function MultiSelectDialogItem(props: IMultiSelectDialogItem) {
  const {
    isSelected,
    handleSelect,
    isItemSelected,
    itemName,
    itemImage,
    itemAlt,
    episodeTitle,
    searchValue
  } = useMultiSelectDialogItem(props)

  return (
    <div className={clsx(styles['multi-select-dialog-item'], { [styles['selected']]: isItemSelected })} onClick={handleSelect}>
      <div className={styles['item-image']}>
        <img src={itemImage} alt={itemAlt} />
      </div>
      <div className={styles['item-meta']}>
        <div className={styles['title']}>
          <TitleMarkdown title={itemName} value={searchValue} />
        </div>
        <div className={styles['sub-title']}>
          <span>{episodeTitle}</span>
        </div>
      </div>
      <div className={styles['item-checked']}>
        {isSelected && <i className="ph-fill ph-check-circle"></i>}
      </div>
    </div>
  )
}

export default MultiSelectDialogItem

