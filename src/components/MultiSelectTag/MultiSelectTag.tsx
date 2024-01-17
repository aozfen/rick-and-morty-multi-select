import clsx from "clsx"
import { IMultiSelectTag } from "."

import styles from './MultiSelectTag.module.scss'

function MultiSelectTag(props: IMultiSelectTag) {
  const {
    title,
    index,
    navigationSelectedIndex,
    unSelect
  } = props

  return (
    <span className={clsx(styles['multi-select-tag'], { [styles['selected']]: index === navigationSelectedIndex })}>
      <span className={styles['title']}>{title}</span>
      <button className={styles['cancel']} onClick={unSelect}>
        <i className="ph-bold ph-x text-white"></i>
      </button>
    </span>
  )
}

export default MultiSelectTag